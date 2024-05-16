// ============== NAVBARS VISIBLE ================== //

const navbar = document.querySelector("#navbar");

let lastScrollTop = 0;

window.addEventListener("scroll", () => {
    if (scrollY > lastScrollTop) {
      navbar.classList.remove("visible");
    } else if (scrollY < lastScrollTop) {
      navbar.classList.add("visible");
    }
    lastScrollTop = scrollY <= 0 ? 0 : scrollY;
  },
);

// ================= CHECKBOX ====================== //

const checkbox = document.querySelector('#checkbox');
const wrapper = document.querySelector('#wrapper');

checkbox.addEventListener('change', function(e) {
    if (e.target.checked) {
        wrapper.classList.add('light')
    } else {
        wrapper.classList.remove('light')
    }

})