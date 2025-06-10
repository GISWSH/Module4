//template_s3chi9
// service_yml4u4n
// user_K1PoFs8p82YVWStDxrUls

function contact (event) {
    event.preventDefault();
    emailjs
    .sendform(
        "service_yml4u4n",
        "template_s3chi9",
        event.target,
        "user_K1PoFs8p82YVWStDxrUls"
    ).then(() => {
        console.log("Email sent successfully");
    })
}