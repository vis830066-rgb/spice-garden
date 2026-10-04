document.querySelector("#home button").addEventListener("click", function () {
    document.querySelector("#menu").scrollIntoView({
        behavior: "smooth"
    });
});

document.querySelector("#bookingForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.querySelector("#customerName").value;

    document.querySelector("#bookingResult").textContent =
        "Thank you " + name + "! Your table request has been received.";
});