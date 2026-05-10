// ─── NAV ACTIVE ON SCROLL ───────────────────────────────
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const top = section.offsetTop - 200;
    if (scrollY >= top) {
      current = section.id;
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

// ─── PORTFOLIO FILTER ────────────────────────────────────
const tabs = document.querySelectorAll(".tab");
const items = document.querySelectorAll(".portfolio-grid .item");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    // Update active tab
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");

    const filter = tab.dataset.filter;

    items.forEach(item => {
      const matches = filter === "all" || item.classList.contains(filter);
      // Use grid display so the grid layout is preserved
      item.style.display = matches ? "block" : "none";
    });
  });
});
document.querySelector('.btn.primary').addEventListener('click', () => {
  document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' });
});