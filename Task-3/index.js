
document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.getElementById("submit");
    console.log("Submit button:", submitButton);

    const signInPage = document.getElementById("signin-page");
    const signUpPage = document.getElementById("signup-page");
    signInPage.style.display = "none";

    function changepage() {
        if (signInPage.style.display === "none") {
            signInPage.style.display = "block";
            signUpPage.style.display = "none";
        } else {
            signInPage.style.display = "none";
            signUpPage.style.display = "block";
        }
    }
    function changepageup() {
        if (signUpPage.style.display === "none") {
            signInPage.style.display = "none";
            signUpPage.style.display = "block";
            
        } else {
            signInPage.style.display = "block";
            signUpPage.style.display = "none";
            
        }
    }

    const signInButton = document.getElementById("signinbutton");
    const signUpButton = document.getElementById("signUpbutton");
    signInButton.addEventListener("click", changepage);
    signUpButton.addEventListener("click", changepageup);
});



function verify() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "admin" && password === "India@123") {
        alert("Authentication successful!");
    } else {
        alert("Authentication failed. Please check your credentials.");
    }
    
}

function show(elementId) {
    var element = document.getElementById(elementId);
    element.style.display = "block";
}

document.getElementById("sub").addEventListener("click", verify);

document.getElementById("rule").addEventListener("click", function () {
    show("rules");  
});






