document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        alert(`Email: ${email}\nSubject: ${subject}\nMessage: ${message}`);
		alert(' Thank you, for your submission! ');
		contactForm.reset();
    });
});
