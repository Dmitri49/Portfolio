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

// ================= LIGHT THEMA ====================== //

const checkbox = document.querySelector('#checkbox');
const wrapper = document.querySelector('#wrapper');
const aboutSection = document.querySelector('#about_section');
const skillsSection = document.querySelector('#skills_section');
const worksSection = document.querySelector('#works_section');
const contactSection = document.querySelector('#contact_section')

checkbox.addEventListener('change', function(e) {
    if (e.target.checked) {
        wrapper.classList.add('light');
        aboutSection.classList.add('light');
        skillsSection.classList.add('light');
        worksSection.classList.add('light');
        contactSection.classList.add('light');
    } else {
        wrapper.classList.remove('light');
        aboutSection.classList.remove('light');
        skillsSection.classList.remove('light');
        worksSection.classList.remove('light');
        contactSection.classList.remove('light');
    }

})