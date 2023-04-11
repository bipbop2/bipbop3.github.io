/*Jeg brukte denne tutorealen til inspirasjon for nav-baren https://www.youtube.com/watch?v=zuAmsj2EN54 */

//henter elementer
const hamburger = document.querySelector(".hamburger")
const navmenu = document.querySelector(".navmenu")
/* console.log(navmenu) */

//Arrowfunctions lagres iukke, brukes når den kun må brukes en gang, mindre kode en vanlige funksjoner
hamburger.addEventListener("click", () => { //når man trykker på hamburgermenyen får den class active (css)
    hamburger.classList.toggle("active"); 
    navmenu.classList.toggle("active");
})

//alle elementer med klassen nav-link får en click event listener som fjerner class active
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", ()=> {
    hamburger.classList.remove("active") 
    navmenu.classList.remove("active")
}))