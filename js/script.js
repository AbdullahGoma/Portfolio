document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    const closeMenuBtn = document.querySelector(".close-btn");
    const body = document.body;
  
    function openMenu() {
      navLinks.classList.add("active");
      body.style.overflow = "hidden";
    }
  
    function closeMenu() {
      navLinks.classList.remove("active");
      body.style.overflow = "auto";
    }
  
    menuToggle?.addEventListener("click", openMenu);
    closeMenuBtn?.addEventListener("click", closeMenu);
  
    // Close menu when clicking outside
    document.addEventListener("click", (e) => {
        if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
          closeMenu();
        }
      });
  
    // Handle link clicks
    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", (e) => {
        e.stopPropagation();
        const href = link.getAttribute("href");
        if (href.startsWith("#")) {
          e.preventDefault();
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({ behavior: "smooth" });
          }
        }
        closeMenu(); // Close menu after handling
      });
    });
  });