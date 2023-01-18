const menu = document.querySelector(".navbar");
const togglebtn = document.querySelector(".toggle");
const anchors = document.querySelectorAll('.navbar a[href^="#');
const logo = document.querySelector(".logofull");

// menu
togglebtn.addEventListener("click", e => {
  const vis = menu.getAttribute("data-visible");
  if (vis === "false") {
    menu.setAttribute("data-visible", true);
    togglebtn.setAttribute("aria-expanded", true);
    logo.setAttribute("aria-show", false);
  } else {
    menu.setAttribute("data-visible", false);
    togglebtn.setAttribute("aria-expanded", false);
    logo.setAttribute("aria-show", true);
  }
});

anchors.forEach(anchor => {
  anchor.addEventListener("click", e => {
    const visi = menu.getAttribute("data-visible");
    if (visi === "true") {
      menu.setAttribute("data-visible", false);
      togglebtn.setAttribute("aria-expanded", false);
      logo.setAttribute("aria-show", true);
    }
  });
});

// hero

const hero = document.querySelector(".hero");

function change() {
  let imgs = hero.getAttribute("data-set");
  if (imgs === "one") {
    hero.setAttribute("data-set", "two");
  } else if (imgs === "two") {
    hero.setAttribute("data-set", "three");
  } else {
    hero.setAttribute("data-set", "one");
  }
}

const timer = setInterval(function () {
  change();
}, 10000);

// AccordList

const list = document.getElementsByClassName("accordBox");

for (i = 0; i < list.length; i++) {
  list[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}
