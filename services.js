const menuOpen = document.querySelector(".menu-open");
const menuClose = document.querySelector(".menu-close");
const menu = document.querySelector(".menu");
// const media = window.matchMedia("(max-width < 40em)");
const media = window.matchMedia("(max-width: 640px)");

function setupTopNav(e) {
  if (e.matches) {
    // menu.classList.remove("show");
    console.log("is mobile");
    menu.style.transition = "none";
  } else {
    // menu.classList.add("show");
    // menu.style.transition = "none";
    console.log("is desktop");
  }
}

function openMenu() {
  //   menu.style.transition = "transform 0.3s ease-in-out";
  menu.removeAttribute("style");
  menuOpen.setAttribute("aria-expanded", "true");
  menuClose.setAttribute("aria-expanded", "true");
  menu.classList.add("show");
  menuClose.focus();
}

function closeMenu() {
  //   menu.style.transition = "transform 0.3s ease-in-out";
  menu.classList.remove("show");
  menuOpen.setAttribute("aria-expanded", "false");
  menuClose.setAttribute("aria-expanded", "false");
  menuOpen.focus();

  setTimeout(() => {
    menu.style.transition = "none";
  }, 300);
}

setupTopNav(media);

menuOpen.addEventListener("click", openMenu);

menuClose.addEventListener("click", closeMenu);

media.addEventListener("change", function (e) {
  setupTopNav(e);
});
