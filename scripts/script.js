


//banner change image todo


//navbar behaviour
let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    let mainSectionY = document.getElementById("mainSection").getBoundingClientRect().bottom;
    let formY = document.getElementById("form").getBoundingClientRect().bottom;
    console.log(formY);
    if (mainSectionY < 0) {
        toggleMenuStyles(true);
        if (prevScrollpos > currentScrollPos) {
            navbar.style.top = "-100px";
            } else {
            navbar.style.top = "0px";
            }
            prevScrollpos = currentScrollPos;
    } else {
        toggleMenuStyles(false);
    }
}

//style toggler for navbar
function toggleMenuStyles(toggle){
    let btnEntrar = document.getElementById("btnEntrar");
    let navbar = document.getElementById("navbar");
    let aTagsNavBar = document.querySelectorAll(".link");
    if (toggle) {
        navbar.style.position = "fixed";
        navbar.style.marginTop = 0;
        navbar.style.background = "white";
        navbar.style.boxShadow = "0px 10px var(--orange)";
        btnEntrar.style.display = "none";
        aTagsNavBar.forEach(link => { link.style.color = "var(--black)"; })
    } else {
        navbar.style = "";
        btnEntrar.style = "";
        aTagsNavBar.forEach(link => { link.style = ""; })
    }
    
}