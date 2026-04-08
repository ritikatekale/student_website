const toggle = document.getElementById("darkModeToggle");

// Load saved mode
if (localStorage.getItem("theme") === "dark") {
document.body.classList.add("dark");
}

// Toggle mode
toggle.onclick = () => {
document.body.classList.toggle("dark");

if (document.body.classList.contains("dark")) {
localStorage.setItem("theme", "dark");
} else {
localStorage.setItem("theme", "light");
}
};
