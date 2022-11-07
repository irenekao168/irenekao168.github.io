function toggleTheme() {
    document.querySelector("body").classList.add("dark-mode");
}

var buttonVariable = document.getElementById("toggleButton");
buttonVariable.onclick = toggleTheme;
