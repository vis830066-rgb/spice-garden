document.addEventListener("DOMContentLoaded", function () {

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
        link.addEventListener("click", function (e) {
            const target = document.querySelector(this.getAttribute("href"));

            if (target) {
                e.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });


    // Booking form
    const bookingForm = document.getElementById("bookingForm");
    const bookingMessage = document.getElementById("bookingMessage");

    bookingForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const phone = document.getElementById("phone").value;
        const date = document.getElementById("date").value;
        const guests = document.getElementById("guests").value;

        if (name === "" || phone === "" || date === "" || guests === "") {
            bookingMessage.textContent = "Please fill in all details.";
            return;
        }

        bookingMessage.textContent =
            "Thank you, " + name +
            "! Your table request has been received.";

        bookingForm.reset();
    });

});