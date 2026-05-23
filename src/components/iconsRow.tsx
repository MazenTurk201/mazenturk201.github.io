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
        "bi bi-tiktok"
    ]

    const links = [
        "https://www.facebook.com/mazen.turk.269412/",
        "https://github.com/MazenTurk201/",
        "https://wa.me/201092130013?text=Hi+Turk",
        "",
        "",
        "",
        "",
        "https://www.paypal.com/paypalme/fesbok",
        "",
        ""
    ]


    return (
        <div className="flex gap-3 not-sm:grid not-sm:grid-cols-5 items-center place-content-center">
            {icons.map((icon, index) => (
                <a href={links[index]} className="hoverIcons">
                    <i key={index} className={icon}></i>
                </a>
            ))}
        </div>
    );
}

export default iconsRow;