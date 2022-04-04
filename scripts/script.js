
//banner change image todo

//elements on screen behavior on scroll
let prevScrollpos = window.pageYOffset;

let elements = {
    rootElement: document.documentElement,
    body: document.querySelector("body"),
    mainSection: document.getElementById("mainSection"),
    form: document.getElementById("form"),
    navbar: document.getElementById("navbar"),
    btnEntrar: document.getElementById("btnEntrar"),
    dropDownListWrapper: document.getElementById("dropDownListWrapper"),
    doubleArrowImg: document.getElementById("doubleArrowImg"),
    showSubMenu: document.getElementById("showSubMenu"),
    scrollToTopBtn: document.getElementById("scrollToTopBtn"),
    whatsappBtn: document.getElementById("whatsappBtn"),
    lblShowSubMenu: document.getElementById("lblShowSubMenu"),
};
let globalVars = {
    mainSectionVisible: true,
    modalOpened: false
};

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

    mainSectionVisible();
}

// Change on mainSectionVisible
function mainSectionVisible(){
    let mainSectionY = elements.mainSection.getBoundingClientRect().bottom;
    globalVars.mainSectionVisible = mainSectionY > 0;

    if (globalVars.mainSectionVisible) {
        if(globalVars.togglePageStyle){
            toggleMenuStyles(false);
            elements.showSubMenu.checked = true;
            showSubMenu();
            globalVars.togglePageStyle = false;

            toggleScrollToTopBtn(true);
        }
        
    } else {
        if(!globalVars.togglePageStyle) {
            toggleMenuStyles(true);
            elements.showSubMenu.checked = false;
            showSubMenu()
            globalVars.togglePageStyle = true;
            if(!globalVars.modalOpened){
                toggleScrollToTopBtn(false);
                toggleWhatsappBtn(false);
            }
            elements.rootElement.style.web
        }
    }
}

//Navbar
function toggleMenuStyles(toggle){
    let aTagsNavBar = document.querySelectorAll(".link");
    if (toggle) {
        elements.navbar.style.position = "fixed";
        elements.navbar.style.backgroundColor = "white";
        elements.navbar.style.width = "100%";
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
        elements.scrollToTopBtn.style.right = "-300px"
    } else {
        elements.scrollToTopBtn.style.right = "20px"
    }
}
//toggle whatsappBtn
function toggleWhatsappBtn(toggle) {
    if(toggle) {
        elements.whatsappBtn.style.bottom = "-300px";
    } else {
        elements.whatsappBtn.style.bottom = "20px";
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

//toggleForm
function toggleForm() {
    if(elements.form.classList.contains('hidden')) {
        elements.form.classList.remove('hidden');
        elements.form.style.position = "sticky";
        toggleScrollToTopBtn(true)
        toggleWhatsappBtn(true)
        globalVars.modalOpened = true;
        setTimeout(function(){
            openModal();
        }, 50);
    } else {
        closeModal()
        setTimeout(function() {
            elements.form.classList.add('hidden');
            elements.form.style = "";
        }, 50);
        globalVars.modalOpened = false;
        if(!globalVars.mainSectionVisible){
            toggleScrollToTopBtn(false)   
        }
        toggleWhatsappBtn(false)
    }
}

//form Animation
function openModal() {
    if(globalVars.mainSectionVisible) {
        elements.form.style.bottom = "0px";
    }
    //todo: fazer scroll do modal
    if(window.innerHeight >= 635)
        elements.body.style.overflow = "hidden";
}

function closeModal() {
    elements.body.style = "";
    if(globalVars.mainSectionVisible) {
        elements.form.style.bottom = "-2000px";
    }
}