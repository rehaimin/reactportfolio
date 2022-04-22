const navCol = document.querySelector(".nav");
const nav = document.querySelector("nav");
const myProjectsBtn = document.querySelector(".perso a");

const menuBtn = document.querySelector(".menu-btn");

menuBtn.addEventListener("click", () => {
	navCol.classList.toggle("nav-display");
});

nav.addEventListener("click", () => {
	if (window.innerWidth <= 870) {
		if (navCol.classList.contains("nav-display")) {
			navCol.classList.remove("nav-display");
		}
	}
});

const themeBtn = document.querySelector(".theme-btn");
themeBtn.addEventListener("click", () => {
	if (getCssVariable("--bg") == darkTheme.bg) {
		toggleTheme(lightTheme);
		themeBtn.innerHTML = "&#xF494;";
		localStorage.setItem("theme", "light");
	} else {
		toggleTheme(darkTheme);
		themeBtn.innerHTML = "&#xF5A1;";
		localStorage.setItem("theme", "dark");
	}
});
