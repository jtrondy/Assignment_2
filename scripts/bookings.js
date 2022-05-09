/*function ValidateEmail(input) {
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
}*/
function updatePrice() {
    let price = document.getElementById("booking_service_select").value;
    console.log(price);
    document.getElementById("booking_price").textContent = '$' + price.toString();
}
function inputCheck() {
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var address = document.getElementById("address").value;
    var phone = document.getElementById("phoneNo").value;

    document.getElementById("fnameerror").innerHTML = "";
    document.getElementById("lnameerror").innerHTML = "";
    document.getElementById("lnameerror").innerHTML = "";
    document.getElementById("adderror").innerHTML = "";
    document.getElementById("phoneerror").innerHTML = "";

    var email = document.getElementById("email").value;
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!email.match(mailformat)) {
        alert("Must enter a valid email address");
        document.customerInfoForm.email.focus();
        return false;
    }
    if (firstname === "" || firstname === null) {
        document.getElementById("fnameerror").innerHTML = "Please enter a first name";
        return false;
    }
    if (lastname === "" || lastname === null) {
        document.getElementById("lnameerror").innerHTML = "Please enter a last name";
        return false;
    }
    if (address === "" || address === null) {
        document.getElementById("adderror").innerHTML = "Please enter an address";
        return false;
    }
    if (phone === "" || phone === null) {
        document.getElementById("phoneerror").innerHTML = "Please enter a phone number";
        return false;
    }
    alert("Thanks for submitting your form");
    resetInfo();
}

function resetInfo() {
    document.getElementById("titleDropList").value = "computerRepair";
    var i;
    var textboxes = document.getElementsByClassName("guestInfoTextBox");
    for (i = 0; i < textboxes.length; i++) {
        textboxes[i].value = "";
    }
    document.getElementById("adderror").style.display = "none";
    document.getElementById("fnameerror").style.display = "none";
    document.getElementById("lnameerror").style.display = "none";
    document.getElementById("phoneerror").style.display = "none";
}



