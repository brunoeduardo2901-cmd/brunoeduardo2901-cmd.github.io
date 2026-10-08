const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const themeButton = document.querySelector("#themeBtn");

menuButton?.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

themeButton?.addEventListener("click", () => {
  document.body.classList.toggle("light");
  themeButton.textContent = document.body.classList.contains("light") ? "☾" : "☼";
  localStorage.setItem("portfolio-theme",
    document.body.classList.contains("light") ? "light" : "dark");
});

if (localStorage.getItem("portfolio-theme") === "light") {
  document.body.classList.add("light");
  themeButton.textContent = "☾";
}
