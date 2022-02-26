window.addEventListener("load", function () {
  AOS.init();
});



// ---------------------------------------
//              Prelolader
// ---------------------------------------

let loader = document.getElementById('pre-loader');

window.addEventListener('load', () => {
  loader.style.display = 'none';

})


// ---------------------------------------
//              Toggler Nav
// ---------------------------------------

const navToggler = document.querySelector(".nav-toggler");

navToggler.addEventListener("click", toggleNav);

function toggleNav() {
  navToggler.classList.toggle("active");
  document.querySelector(".nav").classList.toggle("displayMenu");
}

// ---------------------------------------
//     Close Nav When Click Menu Items
// ---------------------------------------

document.addEventListener("click", (e) => {
  if (e.target.closest(".nav-item")) {
    toggleNav();
  }
});

// ---------------------------------------
//              Sticky Header
// ---------------------------------------
window.addEventListener("scroll", function () {
  if (this.scrollY > 60) {
    document.querySelector(".header").classList.add("sticky");
  } else {
    document.querySelector(".header").classList.remove("sticky");
  }
});
