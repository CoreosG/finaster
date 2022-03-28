
//banner change image todo


//elements on screen behaviour on scroll
let prevScrollpos = window.pageYOffset;
let elements = {
    mainSection: document.getElementById("mainSection"),
    form: document.getElementById("form"),
    navbar: document.getElementById("navbar"),
    btnEntrar: document.getElementById("btnEntrar"),
    dropDownListWrapper: document.getElementById("dropDownListWrapper"),
    doubleArrowImg: document.getElementById("doubleArrowImg"),
    showSubMenu: document.getElementById("showSubMenu")
};
let globalVars = {};

window.onscroll = function() {
    let currentScrollPos = window.scrollY;
    let height = screen.height;
    let mainSectionY = elements.mainSection.getBoundingClientRect().bottom;
    console.log(mainSectionY, prevScrollpos, currentScrollPos);
    if (mainSectionY < 0) {
        if(!globalVars.navbarStateToggled) {
            toggleMenuStyles(true);
            globalVars.navbarStateToggled = true;
        }

        if (prevScrollpos >= currentScrollPos) {
            elements.navbar.style.top = "-500px";
            } else {
            elements.navbar.style.top = "0px";
            }
            prevScrollpos = currentScrollPos;
    } else {
        
        toggleMenuStyles(false);
    }

}


//pos toggler for form
// function togglePositionForm(toggle){
//     if (toggle) {
//         elements.form.style.top = "12%";
//         elements.form.style.position = "fixed";
//     } else {
//         elements.form.style = "";
//     }
// }

//style toggler for navbar
function toggleMenuStyles(toggle){
    let aTagsNavBar = document.querySelectorAll(".link");
    if (toggle) {
        elements.navbar.style.position = "fixed";
        elements.navbar.style.backgroundColor = "white";
        // elements.navbar.style.boxShadow = "0px 10px var(--orange)";
        globalVars.dropDownList = false;
        aTagsNavBar.forEach(link => { link.style.color = "var(--black)"; })
    } else {
        elements.navbar.style = "";
        aTagsNavBar.forEach(link => { link.style = ""; })
    }
    
}

//drop down menu

function showSubMenu() {
    let show = elements.showSubMenu.checked;
    if (show) {
        elements.dropDownListWrapper.style.display = "block";
        elements.doubleArrowImg.src = "./images/svg/setaCima.svg"
    } else {
        elements.dropDownListWrapper.style.display = "none";
        elements.doubleArrowImg.src = "./images/svg/setaBaixo.svg";
    }
}
// showSubMenu();