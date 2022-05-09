function ValidateEmail(input) {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (input.value.match(validRegex)) {
        alert("Valid email address!");
        document.form1.text1.focus();
        return true;
    } else {
        alert("Invalid email address!");
        document.form1.text1.focus();
        return false;
    }
}

function creditCardValidation(creditCardNum) {
    let regEx = /^[0-9]{13,19}$/;
    if(creditCardNum.value.match(regEx)) {
        alert("Valid Card");
        return true;
    } else {
        alert("Please enter a valid credit card number.");
        return false;
    }
}





