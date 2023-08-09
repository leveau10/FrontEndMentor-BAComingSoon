var emailInput = document.getElementById('email')
emailInput.addEventListener("keyup", function () { ValidateEmail(emailInput) })

document.getElementById('email').maxLength = 25

function ValidateEmail(emailInput) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput.value)) {
        document.getElementById('error-message').classList.remove('email-error-active');
        document.getElementById('error-icon').classList.remove('error-icon-activated');
    } else {
        document.getElementById('error-message').classList.add('email-error-active');
        document.getElementById('error-icon').classList.add('error-icon-activated');
    }

}