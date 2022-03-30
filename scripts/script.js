
//banner change image todo

//elements on screen behaviour on scroll
let prevScrollpos = window.pageYOffset;

let elements = {
    rootElement: document.documentElement,
    mainSection: document.getElementById("mainSection"),
    form: document.getElementById("form"),
    navbar: document.getElementById("navbar"),
    btnEntrar: document.getElementById("btnEntrar"),
    dropDownListWrapper: document.getElementById("dropDownListWrapper"),
    doubleArrowImg: document.getElementById("doubleArrowImg"),
    showSubMenu: document.getElementById("showSubMenu"),
    scrollToTopBtn: document.getElementById("scrollToTopBtn")
};
let globalVars = {};

//Listeners
$("#scrollToTopBtn").click(function() {
    $("html, body").animate({ scrollTop: $("#mainSection").offset().top }, 1500);
});
$("#btnVantagens").click(function() {
    $("html, body").animate({ scrollTop: $("#vantagens").offset().top }, 1500);
});
$("#btnSobre").click(function() {
    $("html, body").animate({ scrollTop: $("#sobre").offset().top }, 1500);
});
$("#btnServiço").click(function() {
    $("html, body").animate({ scrollTop: $("#serviço").offset().top }, 1500);
});
$("#btnEncontreNos").click(function() {
    $("html, body").animate({ scrollTop: $("#encontre-nos").offset().top }, 1500);
});
$("#btnAntecipação").click(function() {
    $("html, body").animate({ scrollTop: $("#antecipação").offset().top }, 1500);
});

window.onscroll = function() {
    let currentScrollPos = window.scrollY;
    let mainSectionY = elements.mainSection.getBoundingClientRect().bottom;
    globalVars.mainSectionVisible = mainSectionY > 0;

    if (globalVars.mainSectionVisible) {
        if(globalVars.togglePageStyle){
            toggleMenuStyles(false);
            elements.showSubMenu.checked = true;
            showSubMenu();
            globalVars.togglePageStyle = false;
            toggleScrollToTopBtn(true);
        } else {
        if(!globalVars.togglePageStyle) {
            toggleMenuStyles(true);
            elements.showSubMenu.checked = false;
            showSubMenu()
            globalVars.togglePageStyle = true;
            toggleScrollToTopBtn(false);
        }
    }

// Style togglers
//Navbar
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
//toggle scrollToTopBtn
function toggleScrollToTopBtn(toggle) {
    if(toggle) {
        elements.scrollToTopBtn.style.bottom = "-300px"
    } else {
        elements.scrollToTopBtn.style.bottom = "20px"
    }
}

//menu


//subMenu
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