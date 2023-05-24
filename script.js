const navLinks = document.getElementById("navLinks");
function showMenu() {
  navLinks.style.right = "0";
}
function hideMenu() {
  navLinks.style.right = "-800px";
}
const nav = document.querySelectorAll(".nav-menu ul li");
for (let i = 0; i < nav.length; i++) {
  if (
    nav[i].innerHTML.includes("home") &&
    location.pathname.includes("index")
  ) {
    nav[i].classList.add("selected");
  } else if (
    nav[i].innerHTML.includes("services") &&
    location.pathname.includes("services")
  ) {
    nav[i].classList.add("selected");
  } else if (
    nav[i].innerHTML.includes("gallery") &&
    location.pathname.includes("gallery")
  ) {
    nav[i].classList.add("selected");
  } else if (
    nav[i].innerHTML.includes("about") &&
    location.pathname.includes("about")
  ) {
    nav[i].classList.add("selected");
  } else if (
    nav[i].innerHTML.includes("contact") &&
    location.pathname.includes("contact")
  ) {
    nav[i].classList.add("selected");
  } else {
    nav[i].classList.remove("selected");
  }
}

window.onscroll = function() {
  scrollFunction();
  toTopFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    let icons = document.querySelectorAll(".nav-icon");
    for (let i = 0; i < icons.length; i++) {
      icons[i].style.display = "none";
    }
    document.querySelector(".nav-logo img").style.height = "45px";
    document.querySelector(".header").style.height = "60px";
    document.querySelector(".navbar").style.height = "60px";
    document.querySelector(".fa-bars").style.top = "2px";
  } else {
    let icons = document.querySelectorAll(".nav-icon");
    for (let i = 0; i < icons.length; i++) {
      icons[i].style.display = "block";
    }
    document.querySelector(".nav-logo img").style.height = "65px";
    document.querySelector(".header").style.height = "80px";
    document.querySelector(".navbar").style.height = "80px";
    document.querySelector(".fa-bars").style.top = "12px";
  }
}

let icons = document.querySelector("a i.fa-arrow-up");
function toTopFunction() {
  if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
    icons.style.display = "block";
  } else {
    icons.style.display = "none";
  }
}
