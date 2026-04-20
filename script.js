// Smooth scrolling
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// Fade-in animation
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
      }
    });
  },
  { threshold: 0.3 }
);

document.querySelectorAll(".fade").forEach(el => observer.observe(el));

const skillSection = document.querySelector('.skills-section');
const bars = document.querySelectorAll('.bar-fill');

const skillObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        bars.forEach((bar, i) => {
          bar.style.animationDelay = `${i * 0.08}s`;
          bar.style.animationPlayState = 'running';
        });
        skillObserver.disconnect();
      }
    });
  },
  { threshold: 0.3 }
);

skillObserver.observe(skillSection);


// CONTACT FORM SUBMIT
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault(); // stop page reload

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // Basic validation
  if (!name || !email || !message) {
    alert("Please fill all fields");
    return;
  }

  // Simulate sending data (for frontend portfolio)
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Message:", message);

  alert("Message sent successfully!");

  // Clear form
  contactForm.reset();

  // Move to HOME section
  document.querySelector("#home").scrollIntoView({
    behavior: "smooth"
  });
});

