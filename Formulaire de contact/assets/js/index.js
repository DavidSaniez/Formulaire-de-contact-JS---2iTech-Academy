function success() {
    if (document.getElementById("textInForm").value === "") {
        document.getElementById('submitBtn').disabled = true;
    } else {
        document.getElementById('submitBtn').disabled = false;
    }
}

function printError(elemId, errMess) {
    document.getElementById(elemId).innerHTML = errMess;
}

function validateForm() {
    var name = document.contactForm.name.value;
    var email = document.contactForm.email.value;
    var submitBtn = document.getElementById('submitBtn');

    var errorPseudo = errorEmail = true;

    if (name == "") {
        printError("errorName", "Veuillez entrer un pseudo valide");
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(name) === false) {
            printError("errorName", "Veuillez entrer un pseudo valide");
        } else {
            printError("errorName", "");
            errorPseudo = false;
        }
    }

    if (email == "") {
        printError("errorEmail", "Veuillez entrer une adresse email correcte");
    } else {
        var regex = /^\S+@\S+\.\S+$/;
        if (regex.test(email) === false) {
            printError("errorEmail", "Veuillez entrer une adresse email correcte");
        } else {
            printError("errorEmail", "");
            errorEmail = false;
        }
    }

    if ((errorPseudo || errorEmail) == true) {
        return false;
    }

    if (document.contactForm != '') {
        submitBtn.disabled = false;
    } else {
        submitBtn.disabled = true;
    }
}

function passwordConfirmation() {
    var password = document.getElementById('password2');
    var confirm = document.getElementById('confirm2');
    var message = document.getElementById('confirmMess2');

    if (password.value == confirm.value) {
        message.innerHTML = 'Les mots de passes correspondent';
    } else {
        message.innerHTML = 'Les mots de passe ne correspondent pas';
    }
}