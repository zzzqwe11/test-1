function toggleMenu() {
    const nav = document.querySelector(".nav");

    if (nav) {
        nav.classList.toggle("mobile-open");
    }
}


document.addEventListener("DOMContentLoaded", () => {

    const forms = document.querySelectorAll(
        ".contact-form, .captain-form"
    );

    forms.forEach(form => {

        form.addEventListener("submit", function(event) {

            event.preventDefault();

            alert(
                "Спасибо! Ваше сообщение отправлено."
            );

            form.reset();

        });

    });

});
