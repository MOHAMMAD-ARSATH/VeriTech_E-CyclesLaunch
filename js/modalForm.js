const modal = document.getElementById('modal');
const preOrderBtn = document.querySelector('.cta-button');
const closeBtn = document.getElementsByClassName('close')[0];
const title = document.getElementById("modalTitle");

let isLaunched = sessionStorage.getItem("isLaunched")=="true" ? true: false;

function openModal() {
    if (isLaunched) {
        title.textContent = "Book Now";
    } else {
        title.textContent = "Pre-Order Now";
    }
    modal.style.display = 'block';
   
}

function closeModal() {
    modal.style.display = 'none';
}

preOrderBtn.onclick = openModal;  

closeBtn.onclick = function () {
    modal.style.display = 'none';
};

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};

closeBtn.onclick = function () {
    modal.style.display = 'none';
};

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};


const submitButton = document.getElementById('submitButton');
const form = document.getElementById('modalPreOrderForm');

function toggleSubmitButton() {
    submitButton.disabled = !validateModalForm();
}

form.addEventListener('submit', function (event) {
    event.preventDefault();

    if (validateModalForm()) {
        const modalName = document.getElementById('modalName').value;

        Swal.fire({
            title: isLaunched ? `Thank you for booking, ${modalName}!`: `Thank you for pre-ordering, ${modalName}!`,
            text: "We will contact you soon.",
            icon: "success"
        }).then(() => {
            location.reload();
        });

        document.getElementById('modal').style.display = 'none'; 
    }
});


function validateModalFullName() {
    const fullNameInput = document.getElementById('modalName');
    const fullName = fullNameInput.value.trim();
    const regex = /^[a-zA-Z ]{5,}$/;
    if (!regex.test(fullName)) {
        showErr('modalName', 'Name should contain at least 5 characters');
        return false;
    }
    removeErr('modalName');
    return true;
}

function validateModalEmail() {
    const emailInput = document.getElementById('modalEmail');
    const email = emailInput.value.trim();
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
        showErr('modalEmail', 'Please enter a valid email address.');
        return false;
    }
    removeErr('modalEmail');
    return true;
}

function validateModalPhone() {
    const phoneInput = document.getElementById('modalPhone');
    const phone = phoneInput.value.trim();
    const regex = /^[6-9]\d{9}$/;
    if (!regex.test(phone)) {
        showErr('modalPhone', 'Please enter a valid phone number');
        return false;
    }
    removeErr('modalPhone');
    return true;
}

function validateColor() {
    const val = document.getElementById('modalColor').value.trim();
    if (val === '') {
        showErr('modalColor', 'Please select a color.');
        return false;
    }
    removeErr('modalColor');
    return true;
}

function validateAddress() {
    const val = document.getElementById('modalAddress').value.trim();
    if (val === '') {
        showErr('modalAddress', 'Please enter the address.');
        return false;
    }
    removeErr('modalAddress');
    return true;
}

function validateCity() {
    const val = document.getElementById('modalCity').value.trim();
    if (val === '') {
        showErr('modalCity', 'Please enter the city.');
        return false;
    }
    removeErr('modalCity');
    return true;
}

function validatePin() {
    const val = document.getElementById('modalPin').value.trim();
    const regex = /^\d{6}$/;
    if (!regex.test(val)) {
        showErr('modalPin', 'Please enter a valid pin code.');
        return false;
    }
    removeErr('modalPin');
    return true;
}

function validateState() {
    const val = document.getElementById('modalState').value.trim();
    if (val === '') {
        showErr('modalState', 'Please enter the state.');
        return false;
    }
    removeErr('modalState');
    return true;
}

function validateCountry() {
    const val = document.getElementById('modalCountry').value.trim();
    if (val === '') {
        showErr('modalCountry', 'Please enter the country.');
        return false;
    }
    removeErr('modalCountry');
    return true;
}

function validateModalForm() {
    return (
        validateModalFullName() &&
        validateModalEmail() &&
        validateModalPhone() &&
        validateColor() &&
        validateAddress() &&
        validateCity() &&
        validatePin() &&
        validateState() &&
        validateCountry()
    );
}


function showErr(inputId, errorMessage) {
    const errorElement = document.getElementById(`${inputId}Error`);
    errorElement.textContent = errorMessage;
    document.getElementById(inputId).style.border = '1px solid red';
}

function removeErr(inputId) {
    const errorElement = document.getElementById(`${inputId}Error`);
    errorElement.textContent = '';
    document.getElementById(inputId).style.border = '1px solid #ccc';
}

function setupOnchangeValidation(inputId, validationFunction) {
    const inputElement = document.getElementById(inputId);
    inputElement.addEventListener('input', function () {
        validationFunction();
        toggleSubmitButton();
    });
}

setupOnchangeValidation('modalName', validateModalFullName);
setupOnchangeValidation('modalEmail', validateModalEmail);
setupOnchangeValidation('modalPhone', validateModalPhone);
setupOnchangeValidation('modalColor', validateColor);
setupOnchangeValidation('modalAddress', validateAddress);
setupOnchangeValidation('modalCity', validateCity);
setupOnchangeValidation('modalPin', validatePin);
setupOnchangeValidation('modalState', validateState);
setupOnchangeValidation('modalCountry', validateCountry);


function sendWhatsapp() {
    const phonenumber = "+919790484764";

    const modalName = document.getElementById("modalName").value;
    const modalEmail = document.getElementById("modalEmail").value;
    const modalPhone = document.getElementById("modalPhone").value;
    const modalColor = document.getElementById("modalColor").value;
    const modalAddress = document.getElementById("modalAddress").value;
    const modalAddress2 = document.getElementById("modalAddress2").value;
    const modalCity = document.getElementById("modalCity").value;
    const modalPin = document.getElementById("modalPin").value;
    const modalState = document.getElementById("modalState").value;
    const modalCountry = document.getElementById("modalCountry").value;

    const url = "https://wa.me/" + phonenumber + "?text=" +
        "New Hero Lectro E-cycle Order Received:%0a%0a" +
        "*Color:* " + modalColor + "%0a" +
        "*Customer Details:*%0a" +
        "- *Name:* " + modalName + "%0a" +
        "- *Email:* " + modalEmail + "%0a" +
        "- *Phone Number:* " + modalPhone + "%0a" +
        "- *Address:* " + modalAddress + ", " + modalAddress2 + ", " + modalCity + ", " + modalState + " - " + modalPin + "%0a" +
        "- *Country:* " + modalCountry + "%0a%0a" +
        "Please follow up with the customer and process the order accordingly.";

    window.open(url, '_blank').focus();
}
