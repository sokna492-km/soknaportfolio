// Simple example interaction
document.querySelector(".primary").addEventListener("click", function () {
  alert("Thanks for your interest! We'll connect soon.");
});


const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".reveal").forEach(el => {
  observer.observe(el);
});


// Highlight active navbar link based on current page
const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll(".nav-links a").forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});
