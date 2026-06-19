"use client";
import Skill from "@/components/Widgets/skillWidgets";
import { skills } from "@/components/Data/globalData";
// بنجيب المكونات الأساسية من Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
// بنجيب الـ Modules اللي محتاجينها (زي التقليب الأوتوماتيك والـ Pagination)
import { Autoplay, Pagination } from 'swiper/modules';

// بنعمل Import للـ CSS الخاص بـ Swiper عشان يشتغل صح
import 'swiper/css';
import 'swiper/css/pagination';

// ... مصفوفة الـ skills بتاعتك زي ما هي بالظبط بدون أي تغيير ...



export default function SkillSlider() {
  return (
    <div className="w-full">
      <Swiper
        // بنعرف الـ Modules اللي هنستخدمها
        modules={[Autoplay, Pagination]}
        spaceBetween={20} // المسافة بين الكروت بـ البيكسل
        slidesPerView={1} // الافتراضي للموبايل
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        // هنا بقى الـ Breakpoints المقابلة للـ Responsive بتاعك
        breakpoints={{
          // لما الشاشة تكون أكبر من أو تساوي 464px (التابلت)
          464: {
            slidesPerView: 2,
          },
          // لما الشاشة تكون أكبر من أو تساوي 1024px (الديسك توب)
          1024: {
            slidesPerView: 3,
          },
        }}
        className="" // تقدر تضيف أي ستايل إضافي هنا
      >
        {skills.map((skillInfo, index) => (
          // كل كارت لازم يتحط جوه المكون ده الخاص بـ Swiper
          <SwiperSlide key={index} className="flex items-center justify-center pt-20 pb-20 w-full"> 
            <Skill
              title={skillInfo.title}
              tags={skillInfo.tags}
              icon={skillInfo.icon}
              percent={skillInfo.percent}
              color={skillInfo.color}
              ImgStyle={skillInfo.ImgStyle}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
