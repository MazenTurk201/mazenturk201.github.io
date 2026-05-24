function iconsRow() {
    const icons = [
        "bi bi-facebook",
        "bi bi-github",
        "bi bi-whatsapp",
        "bi bi-telegram",
        "bi bi-discord",
        "bi bi-linkedin",
        "bi bi-instagram",
        "bi bi-paypal",
        "bi bi-youtube",
        "bi bi-tiktok",
        "bi bi-basket2-fill",
        "bi bi-cup-hot-fill"
    ]

    const links = [
        "https://www.facebook.com/mazen.turk.269412/",
        "https://github.com/MazenTurk201/",
        "https://wa.me/201092130013?text=Hi+Turk",
        "https://t.me/mazenturk",
        "https://discord.com/channels/@me/983875402651021353",
        "https://www.linkedin.com/in/mazen-sameh-19a0a2302/",
        "https://instagram.com/mazenturkk",
        "https://www.paypal.com/paypalme/fesbok",
        "https://www.youtube.com/@mazenturk",
        "https://tiktok.com/@mazenturk",
        "https://payhip.com/mazenturk",
        "https://buymeacoffee.com/maznktrl"
    ]


    return (
        <div className="flex gap-3 not-sm:grid not-sm:grid-cols-6 items-center place-content-center">
            {icons.map((icon, index) => (
                <a href={links[index]} className="hoverIcons">
                    <i key={index} className={icon}></i>
                </a>
            ))}
        </div>
    );
}

export default iconsRow;