const sections = document.querySelectorAll("section");
const navList = document.querySelectorAll("nav ul li");

window.onscroll = () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 60) {
      current = section.getAttribute("id"); }
  });

  navList.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
};

const showContent = function(event) {
    const clickedLink = event.target;
    if (!clickedLink || !clickedLink.classList.contains("show")) {
        return;
    }

    document.querySelectorAll("a.show.active").forEach(a => a.classList.remove("active"));
    clickedLink.classList.add("active");

    const targetContent = document.querySelector(clickedLink.getAttribute("href"));
    const header = document.querySelectorAll("header");
    document.querySelectorAll(".content").forEach(el => el.style.display = "none");
    targetContent.style.display = "grid";
    header.style.display = "none";

	event.preventDefault();
};

document.querySelector("nav.nav").addEventListener("click", showContent);

document.querySelectorAll(".content:not(:first-child)").forEach(el => el.style.display = "none");




// const contents = document.querySelectorAll("section .content");
// const navListLP = document.querySelectorAll("nav .navContainerLP ul li");

// const showContent = function(event) {
//     const clickedLink = event.target;
//     if (!clickedLink || !clickedLink.classList.contains("show")) {
//         return;
//     }

//     navListLP.forEach(a => a.classList.remove("active"));
//     clickedLink.classList.add("active");

//     navListLP.forEach((li) => {
//         li.classList.remove("active");
//         if (li.classList.contains(current)) {
//           li.classList.add("active");
//         }
//     });

//     // const contents = document.querySelector(clickedLink.getAttribute("href"));
//     contents.forEach(el => el.style.display = "none");
//     contents.style.display = "grid";
	
// 	event.preventDefault();
// };

// document.querySelector("nav").addEventListener("click", showContent);

// document.querySelectorAll(".content:not(:first-child)").forEach(el => el.style.display = "none");






// let toggleAbout = document.getElementById("toggle-about");
// let toggleContact = document.getElementById("toggle-contact");

// function buttonAbout() {
//     if (toggleAbout.style.display === "block") {
//         toggleAbout.style.display = "none";
//     } else {
//         toggleAbout.style.display = "block";
//         toggleContact.style.display = "none";
//     }
// };

// function buttonContact() {
//     if (toggleContact.style.display === "block") {
//         toggleContact.style.display = "none";
//     } else {
//         toggleContact.style.display = "block";
//         toggleAbout.style.display = "none";
//     }
// };


// function myFunction(selectTag) {
//     let listValue = selectTag.options[selectTag.selectedIndex].text;
//     document.getElementById("nav-li").style.fontFamily = listValue;
// }