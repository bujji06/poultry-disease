// Smooth scroll for internal navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// File input preview or label update (optional enhancement for prediction page)
const fileInput = document.querySelector('input[type="file"]');
if (fileInput) {
  fileInput.addEventListener('change', function () {
    const fileName = this.files[0] ? this.files[0].name : "No file chosen";
    // This line assumes there is a next element sibling to show the file name.
    // If not, you might want to create one or select a specific element to display the name.
    if (this.nextElementSibling) {
        this.nextElementSibling.innerText = fileName;
    }
  });
}

// Navbar active highlight
const navLinks = document.querySelectorAll("nav a");
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
  });
});

// Optional: Dynamic year for footer
const yearEl = document.getElementById("current-year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}