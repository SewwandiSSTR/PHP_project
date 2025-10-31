/*
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (e) {
        const name = document.querySelector("input[type='text']").value.trim();
        const email = document.querySelector("input[type='email']").value.trim();
        const password = document.querySelector("input[type='password']").value;
        const confirmPassword = document.querySelectorAll("input[type='password']")[1].value;

        

        if (!name || !email || !password || !confirmPassword) {
            alert( "All fields are required.");
        } else if (password !== confirmPassword) {
            alert("password is not matched");
        }else{
             alert("password is matched");
        }

      
    });
});*/