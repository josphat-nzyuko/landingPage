document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const feedback = document.getElementById('form-feedback').value; 
    const submitBtn = document.getElementById('submit-btn');
    alert("Form submitted!");

    if ( name && email && message ) {
        feedback.textContent = "Thank you for contacting us, " + name + "! We will get back to you shortly.";
        feedback.style.color = "green";
        feedback.clasList.remove('error');
        feedback.style.display = "block";
        this.reset();
    } else {
        feedback.textContent = "Please fill in all fields before submitting the form.";
        feedback.style.color = "red";
        feedback.clasList.add('error');
        feedback.style.display = "block";
    }

});