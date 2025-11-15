const root = document.documentElement;

const themeToggle = document.getElementById("theme-toggle");
const themeStatus = document.getElementById("themeStatus");

let savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    root.classList.add("dark");
}

themeToggle?.addEventListener("click", () => {
    root.classList.toggle("dark");

    if (root.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
        themeStatus.innerText = "Dark";
    } else {
        localStorage.setItem("theme", "light");
        themeStatus.innerText = "Light";
    }
});
