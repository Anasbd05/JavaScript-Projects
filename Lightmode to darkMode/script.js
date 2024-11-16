let darkMode = document.getElementById("icon");


darkMode.onclick = function () {
  document.body.classList.toggle("darkTheme");
  // Update icon and save theme preference to localStorage
  
  if (document.body.classList.contains("darkTheme")) {
    darkMode.src = "sun.png";
    localStorage.setItem("theme", "dark");
  } else {
    darkMode.src = "moon.png";
    localStorage.setItem("theme", "light");
  }
};

// Check localStorage for the current theme

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("darkTheme");
  darkMode.src = "sun.png";
} else {
  darkMode.src = "moon.png";
}