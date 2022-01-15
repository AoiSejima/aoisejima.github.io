const showContent = function(event) {
    const clickedLink = event.target;
    if (!clickedLink || !clickedLink.classList.contains("href")) {
        return;
    }

    document.querySelectorAll("a.show.active").forEach(a => a.classList.remove("active"));
    clickedLink.classList.add("active");

    const targetContent = document.querySelector(clickedLink.getAttribute("href"));
    document.querySelectorAll(".content").forEach(el => el.style.display = "none");
    targetContent.style.display = "grid";

    window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
	
	event.preventDefault();
};

document.querySelector("nav.nav").addEventListener("click", showContent);
document.querySelectorAll(".content:not(:first-child)").forEach(el => el.style.display = "none");





let toggleAbout = document.getElementById("toggle-about");
let toggleContact = document.getElementById("toggle-contact");

function buttonAbout() {
    if (toggleAbout.style.display === "block") {
        toggleAbout.style.display = "none";
    } else {
        toggleAbout.style.display = "block";
        toggleContact.style.display = "none";
    }
};

function buttonContact() {
    if (toggleContact.style.display === "block") {
        toggleContact.style.display = "none";
    } else {
        toggleContact.style.display = "block";
        toggleAbout.style.display = "none";
    }
};


function myFunction(selectTag) {
    let listValue = selectTag.options[selectTag.selectedIndex].text;
    document.getElementById("nav-li").style.fontFamily = listValue;
}