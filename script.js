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
