const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const form = document.querySelector("form");

form.addEventListener("submit", validate);

confirmPassword.addEventListener("blur", compareFields);
confirmPassword.addEventListener("keyup", compareFields);

function validate(event){
    //Prevent form from submitting by default so the password fields can be validated first
    event.preventDefault();
   
    if (password.value === confirm.value) {
        //Manually submit form once conditions are met
        form.submit();
    }
}

function compareFields(){
    if (password.value === confirmPassword.value) {
        confirmPassword.classList.remove("error");
    }else{
        confirmPassword.classList.add("error");
    }
}