// ========================================
// SECRET BUTTON
// ========================================

const button =
    document.getElementById("secretButton");

let clickCount = 0;


button.addEventListener("click", function () {

    clickCount++;


    if (clickCount === 1) {

        button.textContent =
            "You opened it.";

    }

    else if (clickCount === 2) {

        button.textContent =
            "I told you not to.";

    }

    else if (clickCount === 3) {

        button.textContent =
            "Okay... you win.";

    }

    else {

        button.textContent =
            "Stop clicking me 😂";

    }

});



// ========================================
// CONTACT FORM
// ========================================

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");


contactForm.addEventListener(
    "submit",
    function (event) {

        // Stop the page from refreshing
        event.preventDefault();


        // Show message
        formMessage.style.display =
            "block";


        formMessage.textContent =
            "Message received. I'll get back to you.";


        // Clear the form
        contactForm.reset();

    }
);