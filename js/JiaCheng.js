function Salutations() {
    var name = document.getElementById("name").value;
    var contact = document.getElementById("contact").value;
    var email = document.getElementById("email").value;
    var gender = document.getElementById("gender").value;

    var genders = {
        "M": "Male",
        "F": "Female",
    }

    var age = new Date().getFullYear() - document.getElementById("age").value;

    var text = "";

    if (name != "") {
        text = text + "Good day, " + name + "! ";
    }
    if (contact != "") {
        text = text + "Your contact number is " + contact + ". ";
    }
    if (email != "") {
        text = text + "Your email address is " + email + ". ";
    }
    if (gender != "U") {
        text = text + "You are of " + genders[gender] + " gender. ";
    }
    if (age != new Date().getFullYear()) {
        text = text + "You are " + age + " years old.";
    }
    document.getElementById("salutations").innerHTML = text;
}

function Marker() {
    var Q1 = document.getElementsByName("Q1");
    var Q2 = document.getElementsByName("Q2");
    var Q3 = document.getElementsByName("Q3");
    var Q4 = document.getElementsByName("Q4");
    Q1 = Checker(Q1);
    Q2 = Checker(Q2);
    Q3 = Checker(Q3);
    Q4 = Checker(Q4);
    var answers = [Q1, Q2, Q3, Q4];
    var score = 0;
    for (var i = 0; i < answers.length; i++) {
        if (answers[i] == 1) {
            score = score + 1;
        }
    }
    alert("You've got " + score + "/4 of the answers correct!");
}

function Checker(list) {
    for (var i = 0; i < list.length; i++) {
        if (list[i].checked) {
            return list[i].value;
        }
    }
}