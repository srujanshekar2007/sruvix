const navLinks = document.querySelectorAll(".nav-links a");

for (const link of navLinks) {
  link.addEventListener("click", () => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;
    target.style.scrollMarginTop = "92px";
  });
}
