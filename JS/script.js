//declare global variables for script
let body = document.querySelector('body');
let DarkMode = document.querySelector("input.toggle");

DarkMode.addEventListener("click", (e) => {
    if (DarkMode.checked == true){
        body.classList.toggle("dark-theme", true);
        body.classList.toggle("light-theme", false);
      } 
    else {
    body.classList.toggle("light-theme", true);
    body.classList.toggle("dark-theme", false);
    }
});
//help of my assignment part B made this part pretty easy for me 
let button = document.querySelector('button#frm-btn');
let message = document.querySelector('textarea#msg');
let personName = document.querySelector('input#name');
let email = document.querySelector('input#email');
let service = 
{
  email: "",
  name: "",
  service: "Some service, facial transmogrification",
  message: "",
};
//added evevnt listener for button
button.addEventListener("click", (e) => {
    e.preventDefault();
    service['email'] = email.value;
    service['name'] = personName.value;
    service['message'] = message.value;
    email.value = "";
    personName.value = "";
    message.value = "";
    console.log(service);
});