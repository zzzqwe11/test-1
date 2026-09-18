function openBooking(boatId) {

    const boat =
        boats.find(
            item => item.id === boatId
        );


    if (!boat) return;


    const date =
        prompt(
            "Введите дату бронирования (например, 20.09.2026):"
        );


    if (!date) return;


    const time =
        prompt(
            "Введите время начала:"
        );


    if (!time) return;


    const duration =
        prompt(
            "На сколько часов забронировать?"
        );


    if (!duration) return;


    const user =
        JSON.parse(
            localStorage.getItem(
                "aquatoriaCurrentUser"
            )
        );


    if (!user) {

        alert(
            "Для бронирования необходимо войти в аккаунт."
        );

        window.location.href =
            "login.html";

        return;

    }


    const booking = {

        id: Date.now(),

        userEmail: user.email,

        boatId: boat.id,

        boatName: boat.name,

        date: date,

        time: time,

        duration: duration,

        status: "Ожидает подтверждения"

    };


    const bookings =
        JSON.parse(
            localStorage.getItem(
                "aquatoriaBookings"
            )
        ) || [];


    bookings.push(booking);


    localStorage.setItem(
        "aquatoriaBookings",
        JSON.stringify(bookings)
    );


    alert(
        "Бронирование успешно создано!"
    );

}
