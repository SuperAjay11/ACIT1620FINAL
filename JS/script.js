//declare 
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