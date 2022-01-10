// Toggle Hide and Show
let toggleWorkTOC = document.getElementById("toggle-work-TOC");
// let toggleOtherWorks = document.getElementById("toggle-otherWorks");

let toggleAbout = document.getElementById("toggle-about");
let toggleContact = document.getElementById("toggle-contact");


function buttonWorkTOC() {
    if (toggleWorkTOC.style.display === "block") {
        toggleWorkTOC.style.display = "none";
    } else {
        toggleWorkTOC.style.display = "block";
        toggleAbout.style.display = "none";
        toggleContact.style.display = "none";
    }
};

// function buttonOtherWorks() {
//     if (toggleOtherWorks.style.display === "block") {
//         toggleOtherWorks.style.display = "none";
//     } else {
//         toggleOtherWorks.style.display = "block";
//         toggleAbout.style.display = "none";
//         toggleContact.style.display = "none";
//     }
// };

function buttonAbout() {
    if (toggleAbout.style.display === "block") {
        toggleAbout.style.display = "none";
    } else {
        toggleAbout.style.display = "block";
        toggleWorkTOC.style.display = "none";
        toggleContact.style.display = "none";
    }
};

function buttonContact() {
    if (toggleContact.style.display === "block") {
        toggleContact.style.display = "none";
    } else {
        toggleContact.style.display = "block";
        toggleWorkTOC.style.display = "none";
        toggleAbout.style.display = "none";
    }
};

let buttonTabWebsite = document.getElementById("buttonTabWebsite");
function buttonActivateTabWebsite() {
    if (buttonTabWebsite.style.display === "block") {
        buttonTabWebsite.style.display = "none";
    } else {
        buttonTabWebsite.style.display = "block";
        // toggleWorkTOC.style.display = "none";
        // toggleAbout.style.display = "none";
    }
};



let collapsibleTabs = document.getElementsByClassName("collapsibleTabs");
let i;

for (i = 0; i < collapsibleTabs.length; i++) {
  collapsibleTabs[i].addEventListener("click", function() {
    this.classList.toggle("active");

    let content = this.nextElementSibling;

    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
  });
}