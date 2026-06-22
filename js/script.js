///////////////////////////////////////////////////////////
// Set current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

///////////////////////////////////////////////////////////
// Make mobile navigation work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  const isOpen = headerEl.classList.toggle("nav-open");
  btnNavEl.setAttribute("aria-expanded", isOpen);
  document.body.style.overflow = isOpen ? "hidden" : "";
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && headerEl.classList.contains("nav-open")) {
    headerEl.classList.remove("nav-open");
    btnNavEl.setAttribute("aria-expanded", false);
    document.body.style.overflow = "";
  }
});

document.addEventListener("click", function (e) {
  if (
    headerEl.classList.contains("nav-open") &&
    !headerEl.contains(e.target)
  ) {
    headerEl.classList.remove("nav-open");
    btnNavEl.setAttribute("aria-expanded", false);
    document.body.style.overflow = "";
  }
});

///////////////////////////////////////////////////////////
// Smooth scrolling animation

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href");
    if (targetId === "#") return;
    const target = document.querySelector(targetId);
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    if (link.classList.contains("main-nav-link"))
      headerEl.classList.remove("nav-open");
  });
});

///////////////////////////////////////////////////////////
// Sticky navigation

const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);
