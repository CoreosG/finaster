


//banner change image todo


//elements on screen behaviour on scroll
let prevScrollpos = window.pageYOffset;
let elements = {
    mainSection: document.getElementById("mainSection"),
    form: document.getElementById("form"),
    navbar: document.getElementById("navbar"),
    btnEntrar: document.getElementById("btnEntrar")
};

window.onscroll = function() {
    let currentScrollPos = window.scrollY;
    let height = screen.height;
    let mainSectionY = elements.mainSection.getBoundingClientRect().bottom;
    let formY = elements.form.getBoundingClientRect().top;
    if (mainSectionY < 0) {
        toggleMenuStyles(true);
        if (prevScrollpos > currentScrollPos) {
            elements.navbar.style.top = "-100px";
            } else {
            elements.navbar.style.top = "0px";
            }
            prevScrollpos = currentScrollPos;
    } else {
        toggleMenuStyles(false);
    }
    console.log(formY, mainSectionY);
    if (formY <= 0){
        togglePositionForm(true);
    }else if (mainSectionY >= height * 0.6){
        togglePositionForm(false)
    }
}

//pos toggler for form
function togglePositionForm(toggle){
    if (toggle) {
        elements.form.style.top = "12%";
        elements.form.style.position = "fixed";
    } else {
        elements.form.style = "";
    }
}

//style toggler for navbar
function toggleMenuStyles(toggle){
    let aTagsNavBar = document.querySelectorAll(".link");
    if (toggle) {
        elements.navbar.style.position = "fixed";
        elements.navbar.style.marginTop = 0;
        elements.navbar.style.background = "white";
        elements.navbar.style.boxShadow = "0px 10px var(--orange)";
        elements.btnEntrar.style.display = "none";
        aTagsNavBar.forEach(link => { link.style.color = "var(--black)"; })
    } else {
        elements.navbar.style = "";
        elements.btnEntrar.style = "";
        aTagsNavBar.forEach(link => { link.style = ""; })
    }
    
}