const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("open");

    navToggle.setAttribute("aria-expanded", isOpen);
  });

  // ปิดเมนูเมื่อกดเลือกลิงก์
  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// เปลี่ยนเมนูที่ active ตาม section ที่กำลังดู
const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(".nav-pill, .bottom-pill");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const currentId = entry.target.id;

        navLinks.forEach((link) => {
          link.classList.toggle(
            "active",
            link.getAttribute("href") === `#${currentId}`
          );
        });
      }
    });
  },
  { threshold: 0.45 }
);

sections.forEach((section) => observer.observe(section));
