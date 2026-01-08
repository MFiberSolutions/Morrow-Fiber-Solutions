// Mobile nav toggle
const navToggle = document.getElementById("navToggle");
const mainNav = document.getElementById("mainNav");

if (navToggle && mainNav) {
  navToggle.addEventListener("click", () => {
    mainNav.classList.toggle("open");
  });

  // Close nav on link click (mobile)
  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("open");
    });
  });
}

// Smooth-ish scroll (native with fallback)
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (e) => {
    const targetId = anchor.getAttribute("href").slice(1);
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      e.preventDefault();
      targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// Reveal-on-scroll
const revealEls = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window && revealEls.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  revealEls.forEach((el) => observer.observe(el));
} else {
  // Fallback: just show them
  revealEls.forEach((el) => el.classList.add("visible"));
}

// Simple stat counter for hero
const statEls = document.querySelectorAll(".stat[data-target]");
if (statEls.length) {
  const runCounter = (el) => {
    const target = parseInt(el.getAttribute("data-target"), 10);
    if (Number.isNaN(target)) return;

    let current = 0;
    const duration = 1200; // ms
    const startTime = performance.now();

    const step = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      current = Math.floor(target * progress);
      el.textContent = current;
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = target;
      }
    };

    requestAnimationFrame(step);
  };

  // Trigger when card is visible
  const heroCard = document.querySelector(".hero-card");
  if ("IntersectionObserver" in window && heroCard) {
    const statObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            statEls.forEach(runCounter);
            statObserver.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );
    statObserver.observe(heroCard);
  } else {
    statEls.forEach(runCounter);
  }
}
