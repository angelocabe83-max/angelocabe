


/* ================= LOGIN JS (DO NOT REMOVE) ================= */
document.addEventListener("DOMContentLoaded", function () {

    var loginBtn = document.getElementById("loginBtn");

    if (loginBtn) {
        loginBtn.addEventListener("click", function () {

            var email = document.getElementById("userEmail").value.trim();
            var pass  = document.getElementById("userPass").value.trim();

            if (email === "" || pass === "") {
                alert("Input Email and Password");
            } else {
                alert("Success!");
            }

        });
    }

});


/* ================= REGISTER JS ================= */
document.addEventListener("DOMContentLoaded", function () {

    var registerBtn = document.getElementById("registerBtn");
    if (!registerBtn) return;

    // ARRAY to store all users
    var users = [];

    var card = document.querySelector(".credentials-card");


    /* ========= SHOW ALL USERS ========= */
    function displayAllUsers() {

        // Remove old extra users (keep title only)
        var oldList = document.querySelectorAll(".added-user");
        oldList.forEach(function(el) {
            el.remove();
        });

        users.forEach(function(user, index) {

            var div = document.createElement("div");
            div.className = "credential-item added-user";

            div.innerHTML = `
                <hr>
                <p><strong>Credential: ${index + 1}</strong></p>
                <p><strong>First Name:</strong> ${user.first}</p>
                <p><strong>Middle Name:</strong> ${user.middle || "-"}</p>
                <p><strong>Last Name:</strong> ${user.last}</p>
                <p><strong>Email:</strong> ${user.email}</p>
                <p><strong>Age:</strong> ${user.age}</p>
            `;

            card.appendChild(div);
        });
    }


    /* ========= REGISTER CLICK ========= */
    registerBtn.addEventListener("click", function () {

        var firstName  = document.getElementById("firstName").value.trim();
        var middleName = document.getElementById("middleName").value.trim();
        var lastName   = document.getElementById("lastName").value.trim();
        var email      = document.getElementById("email").value.trim();
        var age        = document.getElementById("age").value.trim();

        if (!firstName || !lastName || !email || !age) {
            alert("Please fill in all required fields!");
            return;
        }

        if (isNaN(age) || age <= 0) {
            alert("Please enter a valid age!");
            return;
        }

        // SAVE user in array
        users.push({
            first: firstName,
            middle: middleName,
            last: lastName,
            email: email,
            age: age
        });

        // Show all users in card
        displayAllUsers();

        // Clear inputs
        document.getElementById("firstName").value = "";
        document.getElementById("middleName").value = "";
        document.getElementById("lastName").value = "";
        document.getElementById("email").value = "";
        document.getElementById("age").value = "";

        alert("Registration Successful!\nWelcome " + firstName + " " + lastName + "!");
    });

});
