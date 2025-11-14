const root = document.documentElement;

const themeToggle = document.getElementById("theme-toggle");

let savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    root.classList.add("dark");
}

themeToggle?.addEventListener("click", () => {
    root.classList.toggle("dark");

    if (root.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});
