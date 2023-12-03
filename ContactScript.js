// document.addEventListener('DOMContentLoaded', function () {
//     const contactForm = document.getElementById('contactForm');

//     contactForm.addEventListener('submit', function (e) {
//         e.preventDefault();

//         const name = document.getElementById('name').value;
//         const email = document.getElementById('email').value;
//         const subject = document.getElementById('subject').value;
//         const message = document.getElementById('message').value;

//         alert(`Name: ${name}\Email: ${email}\nSubject: ${subject}\nMessage: ${message}`);
// 		alert(' Thank you, for your submission! ');
// 		contactForm.reset();
//     });
// });

  const scriptURL = 'https://script.google.com/macros/s/AKfycbzycYU1hyCkwkxzhCKkIWHir0RBjkdAomMVfybZ2OOh7xX2lHdJB9lM1BGeKuf6ew7Ppg/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg") 

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML ="Message sent succesfully"
        setTimeout(function(){
            msg.innerHTML = ""
        }, 5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })