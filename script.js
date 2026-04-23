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


// CONTACT FORM SUBMIT (Formspree + success message)
const contactForm = document.querySelector("form");
const successMsg = document.getElementById("successMsg");

contactForm.addEventListener("submit", async function (e) {
  e.preventDefault();

  const data = new FormData(contactForm);

  const response = await fetch(contactForm.action, {
    method: "POST",
    body: data,
    headers: {
      'Accept': 'application/json'
    }
  });

if (response.ok) {
  const overlay = document.getElementById("overlay");
  const successMsg = document.getElementById("successMsg");

  overlay.style.display = "block";
  successMsg.style.display = "block";

  setTimeout(() => {
    successMsg.classList.add("show");
  }, 50);

  contactForm.reset();

  // Auto hide after 3 sec
  setTimeout(() => {
    successMsg.classList.remove("show");

    setTimeout(() => {
      overlay.style.display = "none";
      successMsg.style.display = "none";

      // go to home
      document.querySelector("#home").scrollIntoView({
        behavior: "smooth"
      });

    }, 400);

  }, 3000);
} else {
    alert("Something went wrong. Try again.");
  }
});

