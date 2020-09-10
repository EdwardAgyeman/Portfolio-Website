// function navEffect() {
//     const sections = document.querySelectorAll("section");
//     const navLinks = document.querySelectorAll("li a");

//     sections.forEach(section => {
//         section.addEventListener("mouseenter", function() {
//             const id = this.getAttribute("id");
//             const navActive = document.querySelector(`a[href="#${id}"]`);
//             navLinks.forEach(link => link.classList.remove("active"));
//             navActive.classList.add("active");
//         })
//     })
// }

// navEffect();

// **********************************************VERSION 2.0***************************************************


// =====Show menu=====
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId), 
    nav = document.getElementById(navId)

    if(toggle && nav) {
        toggle.addEventListener("click", () => {
            nav.classList.toggle("show")
        })
    }
}
showMenu("nav-toggle","nav-menu")


// =====Active and remove menu=====
const navLink = document.querySelectorAll(".nav__link")

function linkAction() {
    // Active link
    navLink.forEach(n => n.classList.remove("active"))
    this.classList.add("active")

    // Remove menu mobile
    const navMenu = document.getElementById("nav-menu")
    navMenu.classList.remove("show")
}

navLink.forEach(n => n.addEventListener("click", linkAction))