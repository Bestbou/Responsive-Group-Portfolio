console.log("JavaScript loaded successfully!");

document.addEventListener("DOMContentLoaded", function () {
    console.log("Page is ready!");

});

document.addEventListener("DOMContentLoaded", function () {


    const groupPhoto = document.getElementById("groupPhoto");
    const groupModal = document.getElementById("groupModal");
    const closeModal = document.getElementById("closeModal");

    if (groupPhoto && groupModal && closeModal) {
        groupPhoto.addEventListener("click", function () {
            groupModal.style.display = "flex";
        });

        closeModal.addEventListener("click", function () {
            groupModal.style.display = "none";
        });

        groupModal.addEventListener("click", function (event) {
            if (event.target === groupModal) {
                groupModal.style.display = "none";
            }
        });
    }

    const contactForm = document.getElementById("contactForm");
    const confirmModal = document.getElementById("confirmModal");
    const confirmSubmit = document.getElementById("confirmSubmit");
    const cancelSubmit = document.getElementById("cancelSubmit");

    if (contactForm && confirmModal && confirmSubmit && cancelSubmit) {

        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();
            confirmModal.style.display = "flex";
        });

        confirmSubmit.addEventListener("click", function () {
            confirmModal.style.display = "none";
            alert("Your form has been submitted successfully!");
            contactForm.reset();
        });

        cancelSubmit.addEventListener("click", function () {
            confirmModal.style.display = "none";
        });

        confirmModal.addEventListener("click", function (event) {
            if (event.target === confirmModal) {
                confirmModal.style.display = "none";
            }
        });
    }

});
