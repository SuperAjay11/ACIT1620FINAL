toggle = document.querySelector(".toggle")

toggle.addEventListener("click", changeTheme)

function changeTheme(event) {
    listelement = document.getElementsByTagName('*')
    for (let i = 0; i < listelement.length; i++) {                      //perfectly changes default light theme to dark theme by the click of the button
        classesList = listelement[i].classList
        if (!classesList.contains('dark-theme')) {
            classesList.add('dark-theme')
            classesList.remove('light-theme')
        } 
        else {
            classesList.remove('dark-theme')
            classesList.add('light-theme')
        }
    }

}