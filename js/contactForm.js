const form = document.getElementById('contactForm');
const fullname = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const message = document.getElementById('message');

function showError(input, errorMessage) {
    const errorElement = document.getElementById(`${input.id}Error`);
    errorElement.textContent = errorMessage;
}

function removeError(input) {
    const errorElement = document.getElementById(`${input.id}Error`);
    errorElement.textContent = '';
}

function validateName() {
    const nameRegex = /^[a-zA-Z ]{4,}$/;
    const isValid = nameRegex.test(fullname.value);

    if (!isValid) {
        fullname.style.border = '1px solid red';
        showError(fullname, 'Name should contain at least 4 characters and only alphabets.');
    } else {
        fullname.style.border = '1px solid #ccc';
        removeError(fullname);
    }
}

function validateEmail() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(email.value);

    if (!isValid) {
        email.style.border = '1px solid red';
        showError(email, 'Please enter a valid email address.');
    } else {
        email.style.border = '1px solid #ccc';
        removeError(email);
    }
}

function validatePhone() {
    const phoneRegex = /^[6-9]\d{9}$/;
    const isValid = phoneRegex.test(phone.value);

    if (!isValid) {
        phone.style.border = '1px solid red';
        showError(phone, 'Please enter a valid 10-digit phone number starting with 6 to 9.');
    } else {
        phone.style.border = '1px solid #ccc';
        removeError(phone);
    }
}

function validateMessage() {
    const isValid = message.value.length >= 30;

    if (!isValid) {
        message.style.border = '1px solid red';
        showError(message, 'Message should be at least 30 characters.');
    } else {
        message.style.border = '1px solid #ccc';
        removeError(message);
    }
}

function validateForm() {
    const isAnyFieldEmpty =
        fullname.value.trim() === '' &&
        email.value.trim() === '' &&
        phone.value.trim() === '' &&
        message.value.trim() === '';

    if (isAnyFieldEmpty) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please enter all fields before submitting the form.",
        });
        return false;
    }

    validateName();
    validateEmail();
    validatePhone();
    validateMessage();

    const isValidForm =
        fullname.style.border === '1px solid #ccc' &&
        email.style.border === '1px solid #ccc' &&
        phone.style.border === '1px solid #ccc' &&
        message.style.border === '1px solid #ccc';

    return true;
}


function sendEmail() {
    const isValidForm = validateForm();

    if (isValidForm) {
        const bodyMsg = `
        Dear Hero Lectro Team,<br>
        <br>
        I hope this message finds you well. I would like to inquire about your Hero Lectro e-cycles.<br>
        <br>
        <strong>Full Name:</strong> ${fullname.value}<br>
        <strong>Email:</strong> ${email.value}<br>
        <strong>Phone Number</strong>: ${phone.value}<br>
        <br>
        <strong>Message:</strong><br>
        &nbsp;&nbsp;&nbsp;${message.value}<br>
        <br>
        Thank you for your attention. Looking forward to hearing from you soon.<br>
        <br>
        <br>
        Best regards,<br>
        ${fullname.value}`;

        Email.send({
            SecureToken: "abe436b2-f9b7-48f9-a2ec-0631c2702a66",
            To: 'arsathmd11@gmail.com',
            From: "arsathmd11@gmail.com",
            Subject: `Customer Enquiry: Hero Lectro e-cycles - ${fullname.value}`,
            Body: bodyMsg
        }).then(
            message => {
                if (message == 'OK') {
                    Swal.fire({
                        title: "Your message has been sent successfully.",
                        text: "We'll get back to you soon.",
                        icon: "success"
                    });
                    form.reset();
                } else {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Something went wrong! Please try again later.",
                    });
                    console.error("Email sending error:", response);
                }
            }
        );
        // Disable form submission here
        return false;
    }
}

fullname.addEventListener('input', validateName);
email.addEventListener('input', validateEmail);
phone.addEventListener('input', validatePhone);
message.addEventListener('input', validateMessage);

form.addEventListener('submit', (e) => {
    e.preventDefault();

});
