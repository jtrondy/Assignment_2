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
    //card validation
    let card_name = document.getElementById("card_name").value;
    let card_number = document.getElementById("card_number").value;
    let card_number_format = /^[0-9]{16}$/;
    let card_cvv = document.getElementById("card_cvv").value;
    let card_cvv_format = /^[0-9]{3}$/;

    document.getElementById("card_name_error").innerHTML = "";
    document.getElementById("card_number_error").innerHTML = "";
    document.getElementById("card_cvv_error").innerHTML = "";

    if (card_name === "" || card_name === null) {
        document.getElementById("card_name_error").innerHTML = "Please a valid name";
        return false;
    }
    if (!card_number.match(card_number_format)) {
        document.getElementById("card_number_error").innerHTML = "Please a valid card number";
        return false;
    }
    if (!card_cvv.match(card_cvv_format)) {
        document.getElementById("card_cvv_error").innerHTML = "Please enter a valid CVV";
        return false;
    }
    //DATE VALIDATION
    document.getElementById("card_date_error").innerHTML = "";
    var today = new Date();
    var month = today.getMonth();
    var year = today.getFullYear();
    var selection = document.getElementById("card_date").value;

    //adds a 0 infront of month if less than 10, EG 5 -> 05
    if (month < 10) {
        month = '0' + month;
    }
    today = year + "-" + month;
    if (today >= selection) {
        document.getElementById("card_date_error").innerHTML = "Please enter a valid date";
        return false;
    }
    alert("Thanks for submitting your form");
    resetInfo();
}
function resetInfo() {
    //this line resets dropdown list to value "60" which corresponds to Computer Repairs
    document.getElementById("booking_service_select").value = "60";
    //this for loop resets the input fields after a successful submission
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




