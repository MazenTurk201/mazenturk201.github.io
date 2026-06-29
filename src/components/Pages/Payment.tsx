import { useState, type ChangeEvent, type FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { servicesData } from "@/components/Data/globalData";

interface SubOption {
    id: string;
    name: string;
    price: number;
}

interface ServiceItem {
    id: string;
    name: string;
    price: number;
    subOptions?: SubOption[];
}

// هيكلة الحالة للخدمات المختارة من العميل
interface SelectedService {
    serviceId: string;
    quantity: number;
    selectedSubOptions: string[]; // يحتوي على الـ ids بتاعة التشيك بوكس المختارة
}

interface FormDataState {
    name: string;
    email: string;
    phone: string;
    notes: string;
}

export default function Payment() {
    const [formData, setFormData] = useState<FormDataState>({
        name: '',
        email: '',
        phone: '',
        notes: ''
    });

    // قائمة الخدمات المختارة (تبدأ بخدمة واحدة فارغة)
    const [selectedServices, setSelectedServices] = useState<SelectedService[]>([
        { serviceId: '', quantity: 1, selectedSubOptions: [] }
    ]);

    // تاب الدفع الحالي
    const [activeTab, setActiveTab] = useState<'vodafone' | 'instapay'>('vodafone');

    const [loading, setLoading] = useState<boolean>(false);
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);

    const cloudName = "dfabiwpjy";
    const uploadPreset = "Images";

    // البحث عن بيانات الخدمة بكامل تفاصيلها من خلال الـ ID
    const findServiceById = (id: string): ServiceItem | undefined => {
        for (const cat of servicesData) {
            const item = cat.items.find(i => i.id === id);
            if (item) return item;
        }
        return undefined;
    };

    // 🔄 حساب التوتال لايف
    const calculateTotal = (): number => {
        let total = 0;
        selectedServices.forEach(sService => {
            const serviceInfo = findServiceById(sService.serviceId);
            if (serviceInfo) {
                let itemPrice = serviceInfo.price;
                // حساب أسعار التشيك بوكس الفرعية
                if (serviceInfo.subOptions) {
                    serviceInfo.subOptions.forEach(sub => {
                        if (sService.selectedSubOptions.includes(sub.id)) {
                            itemPrice += sub.price;
                        }
                    });
                }
                total += itemPrice * sService.quantity;
            }
        });
        return total;
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    // ➕ إضافة خانة خدمة جديدة
    const addServiceField = () => {
        setSelectedServices(prev => [...prev, { serviceId: '', quantity: 1, selectedSubOptions: [] }]);
    };

    // ❌ حذف خانة خدمة
    const removeServiceField = (index: number) => {
        setSelectedServices(prev => prev.filter((_, i) => i !== index));
    };

    // 🔄 تحديث الخدمة المختارة في خانة معينة
    const handleServiceChange = (index: number, serviceId: string) => {
        setSelectedServices(prev => {
            const updated = [...prev];
            updated[index] = { serviceId, quantity: 1, selectedSubOptions: [] };
            return updated;
        });
    };

    // 🔄 تحديث الكمية لخدمة معينة
    const handleQuantityChange = (index: number, quantity: number) => {
        setSelectedServices(prev => {
            const updated = [...prev];
            updated[index].quantity = quantity < 1 ? 1 : quantity;
            return updated;
        });
    };

    // 🔄 تحديث التشيك بوكس الفرعية للخدمة
    const handleSubOptionChange = (index: number, subOptionId: string, checked: boolean) => {
        setSelectedServices(prev => {
            const updated = [...prev];
            const subOptions = updated[index].selectedSubOptions;
            if (checked) {
                updated[index].selectedSubOptions = [...subOptions, subOptionId];
            } else {
                updated[index].selectedSubOptions = subOptions.filter(id => id !== subOptionId);
            }
            return updated;
        });
    };

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (!files || files.length === 0) return;
        const file = files[0];
        if (!file.type.startsWith('image/')) {
            setError('يا صاحبي لازم تختار صورة بس!');
            return;
        }
        if (file.size > 5 * 1024 * 1024) {
            setError('الصورة حجمها كبير أوي، خليها أقل من 5 ميجا');
            return;
        }
        setError(null);
        setImageFile(file);
        setImagePreview(URL.createObjectURL(file));
    };

    // 🚀 السبت النهائي للأيميل
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        
        if (selectedServices.some(s => !s.serviceId)) {
            setError('من فضلك اختار الخدمة في الخانات المفتوحة يا هندسة!');
            return;
        }
        if (!imageFile) {
            setError('لازم ترفع صورة إيصال الدفع تأكيداً للمعاملة!');
            return;
        }

        setLoading(true);
        setError(null);
        setSuccess(null);

        try {
            // 1️⃣ رفع الإيصال لـ Cloudinary
            const cloudinaryFormData = new FormData();
            cloudinaryFormData.append('file', imageFile);
            cloudinaryFormData.append('upload_preset', uploadPreset);

            const cloudinaryResponse = await fetch(
                `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
                { method: 'POST', body: cloudinaryFormData }
            );

            if (!cloudinaryResponse.ok) throw new Error('حصلت مشكلة في رفع صورة الإيصال');
            const cloudinaryData = await cloudinaryResponse.json();
            const uploadedImageUrl = cloudinaryData.secure_url;

            // 2️⃣ تجميع وتنسيق نص الخدمات المختارة عشان يتبعت في الإيميل بشكل نضيف
            let servicesSummaryText = "";
            selectedServices.forEach((s, idx) => {
                const serviceInfo = findServiceById(s.serviceId);
                if (serviceInfo) {
                    servicesSummaryText += `${idx + 1}- ${serviceInfo.name} (الكمية: ${s.quantity}) [سعر أساسي: ${serviceInfo.price}$]`;
                    if (s.selectedSubOptions.length > 0) {
                        const subNames = serviceInfo.subOptions?.filter(sub => s.selectedSubOptions.includes(sub.id)).map(sub => sub.name).join('، ');
                        servicesSummaryText += ` | إضافات: (${subNames})`;
                    }
                    servicesSummaryText += "\n";
                }
            });

            const templateParams = {
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                notes: formData.notes,
                services_summary: servicesSummaryText, // هتحط الحقل ده {{services_summary}} في الـ Template بتاع EmailJS
                payment_method: activeTab === 'vodafone' ? 'فودافون كاش' : 'إنستا باي',
                total_price: `${calculateTotal()} EGP`,
                image_url: uploadedImageUrl,
                to_email: 'maznktr@gmail.com'
            };

            await emailjs.send(
                'service_wvmdhnm',     
                'template_pgb1ub8',    
                templateParams,
                'CeGmWhpqNiTtG5YOh'      
            );

            setSuccess('تم إرسال الطلب وحساب الإجمالي بنجاح يا ترك! 🔥');
            setFormData({ name: '', email: '', phone: '', notes: '' });
            setSelectedServices([{ serviceId: '', quantity: 1, selectedSubOptions: [] }]);
            setImageFile(null);
            setImagePreview(null);

        } catch (err: any) {
            setError(err.message || 'حصل خطأ غير متوقع');
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="flex flex-col items-center justify-center min-h-screen bg-slate-950 p-4 font-sans text-right" dir="rtl">
            <div className="w-full max-w-xl bg-slate-900 rounded-2xl shadow-2xl p-6 sm:p-8 border border-slate-800">
                
                <h2 className="text-2xl font-bold text-white mb-2 text-center">طلب الخدمات وتأكيد الدفع 💳</h2>
                <p className="text-sm text-slate-400 mb-6 text-center">اختر الخدمات المطلوبة، احسب إجماليك، واطلب فوراً</p>

                <form onSubmit={handleSubmit} className="space-y-5">
                    
                    {/* بيانات العميل الأساسية */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-1">الاسم بالكامل</label>
                            <input
                                type="text"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder="اكتب اسمك"
                                className="w-full px-4 py-2 bg-slate-950 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-1">رقم الهاتف (واتساب)</label>
                            <input
                                type="tel"
                                name="phone"
                                required
                                value={formData.phone}
                                onChange={handleInputChange}
                                placeholder="01xxxxxxxxx"
                                className="w-full text-left px-4 py-2 bg-slate-950 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                                dir="ltr"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-1">البريد الإلكتروني</label>
                        <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="name@example.com"
                            className="w-full text-left px-4 py-2 bg-slate-950 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                            dir="ltr"
                        />
                    </div>

                    {/* 🛠️ سكشن حقول الخدمات الديناميكية */}
                    <div className="space-y-4 p-4 bg-slate-950 rounded-xl border border-slate-800">
                        <span className="block text-sm font-bold text-indigo-400">الخدمات المطلوبة</span>
                        
                        {selectedServices.map((sService, index) => {
                            const currentServiceInfo = findServiceById(sService.serviceId);

                            return (
                                <div key={index} className="p-3 bg-slate-900 rounded-lg border border-slate-800 space-y-3 relative">
                                    {selectedServices.length > 1 && (
                                        <button
                                            type="button"
                                            onClick={() => removeServiceField(index)}
                                            className="absolute top-2 left-2 text-red-500 hover:text-red-400 text-xs font-bold"
                                        >
                                            حذف ❌
                                        </button>
                                    )}

                                    <div className="grid grid-cols-3 gap-2 pt-2">
                                        {/* الاختيار وعمل اللوب للـ Categories */}
                                        <div className="col-span-2">
                                            <label className="block text-xs text-slate-400 mb-1">الخدمة</label>
                                            <select
                                                required
                                                value={sService.serviceId}
                                                onChange={(e) => handleServiceChange(index, e.target.value)}
                                                className="w-full px-2 py-2 bg-slate-950 border border-slate-700 rounded-lg text-white text-sm focus:outline-none focus:border-indigo-500"
                                            >
                                                <option value="">-- اختر خدمة --</option>
                                                {servicesData.map((cat, catIdx) => (
                                                    <optgroup key={catIdx} label={cat.categoryName} className="bg-slate-900 text-indigo-300">
                                                        {cat.items.map((item) => (
                                                            <option key={item.id} value={item.id} className="text-white">
                                                                {item.name} ({item.price} EGP)
                                                            </option>
                                                        ))}
                                                    </optgroup>
                                                ))}
                                            </select>
                                        </div>

                                        {/* الكمية */}
                                        <div>
                                            <label className="block text-xs text-slate-400 mb-1">الكمية</label>
                                            <input
                                                type="number"
                                                min="1"
                                                value={sService.quantity}
                                                onChange={(e) => handleQuantityChange(index, parseInt(e.target.value) || 1)}
                                                className="w-full px-2 py-1.5 bg-slate-950 border border-slate-700 rounded-lg text-white text-center text-sm focus:outline-none focus:border-indigo-500"
                                            />
                                        </div>
                                    </div>

                                    {/* 🔄 عرض الخيارات الفرعية (Checkboxes) بناءً على الخدمة المختارة */}
                                    {currentServiceInfo && currentServiceInfo.subOptions && (
                                        <div className="p-2 bg-slate-950 rounded-md border border-slate-800 space-y-1.5 animate-fadeIn">
                                            <span className="block text-xs font-semibold text-slate-400">إضافات وتفاصيل مطلوبة:</span>
                                            {currentServiceInfo.subOptions.map((sub) => (
                                                <label key={sub.id} className="flex items-center gap-2 text-xs text-slate-300 cursor-pointer select-none">
                                                    <input
                                                        type="checkbox"
                                                        checked={sService.selectedSubOptions.includes(sub.id)}
                                                        onChange={(e) => handleSubOptionChange(index, sub.id, e.target.checked)}
                                                        className="rounded text-indigo-600 focus:ring-0 bg-slate-900 border-slate-700 w-4 h-4"
                                                    />
                                                    <span>{sub.name} (+{sub.price} EGP)</span>
                                                </label>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            );
                        })}

                        <button
                            type="button"
                            onClick={addServiceField}
                            className="w-full py-1.5 border border-dashed border-indigo-500/50 text-indigo-400 rounded-lg text-xs font-semibold hover:bg-indigo-500/10 transition-colors"
                        >
                            ➕ إضافة خدمة أخرى للطلب
                        </button>
                    </div>

                    {/* 💰 سكشن عرض التوتال المباشر */}
                    <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl flex justify-between items-center">
                        <span className="text-sm font-bold text-slate-300">إجمالي الحساب المبدئي:</span>
                        <span className="text-xl font-extrabold text-emerald-400">{calculateTotal()} EGP</span>
                    </div>

                    {/* 💳 سكشن تابات الدفع بالرقم كليكبل */}
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-slate-300">طريقة تحويل المبلغ (اضغط للاتصال أو الدفع على الرقم)</label>
                        <div className="grid grid-cols-2 gap-2 p-1 bg-slate-950 rounded-xl border border-slate-800">
                            <button
                                type="button"
                                onClick={() => setActiveTab('vodafone')}
                                className={`py-2 text-xs font-bold rounded-lg transition-all ${activeTab === 'vodafone' ? 'bg-red-600 text-white shadow-md' : 'text-slate-400 hover:text-white'}`}
                            >
                                فودافون كاش 🔴
                            </button>
                            <button
                                type="button"
                                onClick={() => setActiveTab('instapay')}
                                className={`py-2 text-xs font-bold rounded-lg transition-all ${activeTab === 'instapay' ? 'bg-pink-700 text-white shadow-md' : 'text-slate-400 hover:text-white'}`}
                            >
                                إنستا باي ⚡
                            </button>
                        </div>
                        
                        <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl text-center">
                            <p className="text-xs text-slate-400 mb-1">اضغط على الرقم أدناه للتحويل مباشرة:</p>
                            <a 
                                href={activeTab === 'vodafone' ? `tel:*9*7*01092130013*${calculateTotal()}#` : "https://ipn.eg/S/mazenturk201/instapay/6rKTP3" }
                                className="text-lg font-mono font-bold text-indigo-400 hover:underline tracking-widest"
                            >
                                اضغط هنا
                            </a>
                            <p className="text-[10px] text-slate-500 mt-1">
                                {activeTab === 'vodafone' ? 'قم بتحويل الكاش على هذا الرقم ثم ارفع المرفق هنا.' : 'ابعت عبر تطبيق انستا باي على رقم الهاتف الموضح.'}
                            </p>
                        </div>
                    </div>

                    {/* الملاحظات */}
                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-1">ملاحظات أو روابط إضافية</label>
                        <textarea
                            name="notes"
                            rows={2}
                            value={formData.notes}
                            onChange={handleInputChange}
                            placeholder="أي تفاصيل تانية حابب توضحها يا هندسة..."
                            className="w-full px-4 py-2 bg-slate-950 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                        />
                    </div>

                    {/* رفع وصورة الإيصال */}
                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">إيصال الدفع (صورة التحويل)</label>
                        <label className="flex flex-col items-center justify-center w-full h-28 border-2 border-dashed border-slate-700 rounded-xl cursor-pointer hover:bg-slate-950 hover:border-indigo-500 transition-colors overflow-hidden relative">
                            {imagePreview ? (
                                <img src={imagePreview} alt="Preview" className="w-full h-full object-cover opacity-60" />
                            ) : (
                                <div className="flex flex-col items-center justify-center pt-4 pb-5">
                                    <svg className="w-7 h-7 text-slate-500 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 002-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                    </svg>
                                    <p className="text-xs text-slate-400 font-semibold">اضغط لرفع صورة إيصال التحويل</p>
                                </div>
                            )}
                            <input type="file" className="hidden" accept="image/*" onChange={handleFileChange} disabled={loading} />
                        </label>
                    </div>

                    {/* الأخطاء والنجاح */}
                    {error && <div className="p-3 bg-red-950 text-red-400 rounded-lg text-sm font-medium border border-red-900">⚠️ {error}</div>}
                    {success && <div className="p-3 bg-emerald-950 text-emerald-400 rounded-lg text-sm font-medium border border-emerald-900">🎉 {success}</div>}

                    {/* زرار الإرسال النهائي */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2"
                    >
                        {loading ? (
                            <>
                                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                                <span>بنجري المعاملة ثواني...</span>
                            </>
                        ) : (
                            <span>تأكيد الطلب وإرسال البيانات 🚀</span>
                        )}
                    </button>

                </form>
            </div>
        </main>
    );
}