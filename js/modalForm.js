const modal = document.getElementById('modal');
const preOrderBtn = document.querySelector('.cta-button');
const closeBtn = document.getElementsByClassName('close')[0];

function openModal() {
    modal.style.display = 'block';
    // document.getElementById('submitButton').disabled = true; // Initially disable the button
}

preOrderBtn.onclick = function () {
    modal.style.display = 'block';
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

document.getElementById('modalPreOrderForm').addEventListener('submit', function (event) {
    event.preventDefault();
    validateModalFullName();
    validateModalEmail();
    validateModalPhone();
    validateColor();
    validateAddress();
    validateCity();
    validatePin();
    validateState();
    validateCountry();

    const isValidForm = validateModalForm();
    console.log(isValidForm);

    submitButton.disabled = !isValidForm; // Use !isValidForm to enable the button if the form is valid

    if (isValidForm) {
        submitButton.style.backgroundColor = '#ff5500'; // Apply the enabled style
        const modalName = document.getElementById('modalName').value;
        const isSuccessful = true;

        if (isSuccessful) {
            Swal.fire({
                title: `Thank you for pre-ordering, ${modalName}!`,
                text: "We will contact you soon.",
                icon: "success"
            }).then(() => {
                // Reload the page after displaying the SwalFire message
                location.reload();
            });
        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
            });
        }
        document.getElementById('modal').style.display = 'none'; // Close the modal after submission
    } else {
        submitButton.style.backgroundColor = '#ccc'; // Apply the disabled style
    }
});


// Validation functions
function validateModalFullName() {
    const fullNameInput = document.getElementById('modalName');
    const fullName = fullNameInput.value.trim();
    const regex = /^[a-zA-Z ]{5,}$/;

    if (!regex.test(fullName)) {
        showErr('modalName', 'Name should contain atleast 5 characters');
        return false;
    } else {
        removeErr('modalName');
        return true;
    }
}

function validateModalEmail() {
    const emailInput = document.getElementById('modalEmail');
    const email = emailInput.value.trim();
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regex.test(email)) {
        showErr('modalEmail', 'Please enter a valid email address.');
        return false;
    } else {
        removeErr('modalEmail');
        return true;
    }
}

function validateModalPhone() {
    const phoneInput = document.getElementById('modalPhone');
    const phone = phoneInput.value.trim();
    const regex = /^[6-9]\d{9}$/;

    if (!regex.test(phone)) {
        showErr('modalPhone', 'Please enter a valid phone number');
        return false;
    } else {
        removeErr('modalPhone');
        return true;
    }
}

function validateColor() {
    const colorInput = document.getElementById('modalColor');
    const color = colorInput.value.trim();

    if (color === '') {
        showErr('modalColor', 'Please select a color.');
        return false;
    } else {
        removeErr('modalColor');
        return true;
    }
}

function validateAddress() {
    const addressInput = document.getElementById('modalAddress');
    const address = addressInput.value.trim();

    if (address === '') {
        showErr('modalAddress', 'Please enter the address.');
        return false;
    } else {
        removeErr('modalAddress');
        return true;
    }
}

function validateCity() {
    const cityInput = document.getElementById('modalCity');
    const city = cityInput.value.trim();

    if (city === '') {
        showErr('modalCity', 'Please enter the city.');
        return false;
    } else {
        removeErr('modalCity');
        return true;
    }
}

function validatePin() {
    const pinInput = document.getElementById('modalPin');
    const pin = pinInput.value.trim();
    const regex = /^\d{6}$/;

    if (!regex.test(pin)) {
        showErr('modalPin', 'Please enter a valid pin code.');
        return false;
    } else {
        removeErr('modalPin');
        return true;
    }
}

function validateState() {
    const stateInput = document.getElementById('modalState');
    const state = stateInput.value.trim();

    if (state === '') {
        showErr('modalState', 'Please enter the state.');
        return false;
    } else {
        removeErr('modalState');
        return true;
    }
}

function validateCountry() {
    const countryInput = document.getElementById('modalCountry');
    const country = countryInput.value.trim();

    if (country === '') {
        showErr('modalCountry', 'Please enter the country.');
        return false;
    } else {
        removeErr('modalCountry');
        return true;
    }
}

function validateModalForm() {
    const isNameValid = validateModalFullName();
    const isEmailValid = validateModalEmail();
    const isPhoneValid = validateModalPhone();
    const isColorValid = validateColor();
    const isAddressValid = validateAddress();
    const isCityValid = validateCity();
    const isPinValid = validatePin();
    const isStateValid = validateState();
    const isCountryValid = validateCountry();

    const isValidForm = isNameValid && isEmailValid && isPhoneValid && isColorValid &&
        isAddressValid && isCityValid && isPinValid && isStateValid && isCountryValid;

    return isValidForm;
}


function setupOnchangeValidation(inputId, validationFunction) {
    const inputElement = document.getElementById(inputId);
    inputElement.addEventListener('input', function () {
        validationFunction(inputId);
    });
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

// Setup onchange validation for each input field
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