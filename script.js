// /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
let validateEmail=document.getElementById('user-mail');
let inputBtn=document.querySelector(".input-btn");

let errorMsg=document.querySelector('.error-msg');
let errorIcon=document.querySelector('.error-icon');
validateEmail.addEventListener('keyup',()=>{
    if(validateEmail.value!="" && !validateEmail.value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
        errorMsg.style.visibility="visible";
        errorIcon.style.visibility="visible";
    }else{
        errorMsg.style.visibility="hidden";
        errorIcon.style.visibility="hidden";
    }
})
inputBtn.addEventListener('click',()=>{
    if(validateEmail.value!="" && !validateEmail.value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
        errorMsg.style.visibility="visible";
        errorIcon.style.visibility="visible";
    }else{
        validateEmail.value="";
    }
})