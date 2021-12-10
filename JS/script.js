//declare global variables for script
let body = document.querySelector('body');
let DarkMode = document.querySelector("input.toggle");
//changed way i makde this dark mode becuase i got confused and mess up, so i added the if else to make it nice and easy
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

//thanks for the class Mr.Lau is was rocky in the begininng but i really enjoyed learning html css and JS I hope to see you again next term