
function updatePrice() {
    let price = document.getElementById("booking_service_select").value;
    document.getElementById("booking_price").innerHTML = '$' + price.toString();
}
function inputCheck() {
    let firstname = document.getElementById("firstname").value;
    let lastname = document.getElementById("lastname").value;
    let address = document.getElementById("address").value;
    let phone = document.getElementById("phoneNo").value;
    let service = document.getElementById("booking_service_select").value;


    //setting error text to an empty string to clear previously caught errors
    document.getElementById("fnameerror").innerHTML = "";
    document.getElementById("lnameerror").innerHTML = "";
    document.getElementById("lnameerror").innerHTML = "";
    document.getElementById("adderror").innerHTML = "";
    document.getElementById("phoneerror").innerHTML = "";

    document.getElementById("card_name_error").innerHTML = "";
    document.getElementById("card_number_error").innerHTML = "";
    document.getElementById("card_cvv_error").innerHTML = "";
    document.getElementById("card_date_error").innerHTML = "";
    document.getElementById("service_error").innerHTML = "";

    document.getElementById("booking_terms_error").innerHTML = "";

    //input validation
    let email = document.getElementById("email").value;
    let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
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

    if (phone === "" || phone === null) {
        document.getElementById("phoneerror").innerHTML = "Please enter a phone number";
        return false;
    }

    if (service === '0') {
        document.getElementById("service_error").innerHTML = "Please select a service";
        return false;
    }

    if (address === "" || address === null) {
        document.getElementById("adderror").innerHTML = "Please enter an address";
        return false;
    }



    //card validation
    let card_name = document.getElementById("card_name").value;
    let card_number = document.getElementById("card_number").value;
    let card_number_format = /^\d{16}$/;
    let card_cvv = document.getElementById("card_cvv").value;
    let card_cvv_format = /^\d{3}$/;

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

    let today = new Date();
    let month = today.getMonth() + 1; // +1 because values are 0 - 11 -> +1 makes 1 - 12
    let year = today.getFullYear();
    let selection = document.getElementById("card_date").value;

    //adds a 0 infront of month if less than 10, EG 5 -> 05
    if (month < 10) {
        month = '0' + month;
    }
    today = year + "-" + month;
    if (today > selection) {
        document.getElementById("card_date_error").innerHTML = "Please enter a valid date";
        return false;
    }

    //terms and conditions checkbox
    let terms_checkbox = document.getElementById("booking_terms").checked;
    if (!terms_checkbox) {
        document.getElementById("booking_terms_error").innerHTML = "Please agree to the terms and conditions";
        return false;
    }
    alert("Thanks for submitting your form");
    resetInfo();
}
function resetInfo() {
    //this line resets dropdown list to value "0" which corresponds to "Please select a service"
    document.getElementById("booking_service_select").value = "0";
    document.getElementById("booking_price").innerHTML = '$0';

    //resetting checkboxes on booking page to unchecked
    document.getElementById("booking_terms").checked = false;
    document.getElementById("booking_urgent").checked = false;


    //this for loop resets the input fields after a successful submission
    let i;
    let textboxes = document.getElementsByClassName("guestInfoTextBox");
    for (i = 0; i < textboxes.length; i++) {
        textboxes[i].value = "";
    }

}




