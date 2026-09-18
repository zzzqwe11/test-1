const defaultReviews = [

    {
        name: "Алексей",

        boat: "Катер «Акватория»",

        rating: 5,

        text:
            "Отлично провели время! Катер в прекрасном состоянии, всё прошло комфортно."

    },

    {
        name: "Мария",

        boat: "Катер «Волна»",

        rating: 5,

        text:
            "Очень понравилась прогулка. Красивые места и отличный сервис."

    },

    {
        name: "Дмитрий",

        boat: "Общий отзыв",

        rating: 5,

        text:
            "Брали катер компанией друзей. Всё понравилось от начала до конца."

    }

];


function getReviews() {

    let reviews =
        JSON.parse(
            localStorage.getItem("aquatoriaReviews")
        );


    if (!reviews) {

        reviews = defaultReviews;

        localStorage.setItem(
            "aquatoriaReviews",
            JSON.stringify(reviews)
        );

    }


    return reviews;

}


function renderReviews() {

    const container =
        document.getElementById("reviews-list");

    if (!container) return;


    const reviews = getReviews();


    container.innerHTML =
        reviews.map(review => `

            <article class="review">

                <div class="review-stars">

                    ${"★".repeat(review.rating)}
                    ${"☆".repeat(5 - review.rating)}

                </div>

                <p>
                    «${review.text}»
                </p>

                <div class="review-author">

                    ${review.name}

                    <small>
                        · ${review.boat}
                    </small>

                </div>

            </article>

        `).join("");

}


function renderHomeReviews() {

    const container =
        document.getElementById(
            "home-reviews"
        );

    if (!container) return;


    const reviews = getReviews();


    container.innerHTML =
        reviews.slice(0, 3)
        .map(review => `

            <article class="review">

                <div class="review-stars">
                    ${"★".repeat(review.rating)}
                </div>

                <p>
                    «${review.text}»
                </p>

                <div class="review-author">
                    ${review.name}
                </div>

            </article>

        `)
        .join("");

}


document.addEventListener(
    "DOMContentLoaded",
    () => {

        renderReviews();
        renderHomeReviews();


        const form =
            document.getElementById(
                "review-form"
            );


        if (form) {

            form.addEventListener(
                "submit",
                event => {

                    event.preventDefault();


                    const name =
                        document.getElementById(
                            "review-name"
                        ).value;


                    const boat =
                        document.getElementById(
                            "review-boat"
                        ).value;


                    const rating =
                        Number(
                            document.getElementById(
                                "review-rating"
                            ).value
                        );


                    const text =
                        document.getElementById(
                            "review-text"
                        ).value;


                    const reviews =
                        getReviews();


                    reviews.unshift({

                        name,
                        boat,
                        rating,
                        text

                    });


                    localStorage.setItem(

                        "aquatoriaReviews",

                        JSON.stringify(reviews)

                    );


                    alert(
                        "Спасибо за ваш отзыв!"
                    );


                    form.reset();


                    renderReviews();

                }
            );

        }

    }
);
