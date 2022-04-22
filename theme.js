export let lightTheme = {
	text: "#242424",
	bg: "#b8b8b8",
	bgTransparent: "#9c9c9cf2",
	secondary: "#4d4d4d",
	mainBg: "#ffffff33",
	name: "light",
};
export let darkTheme = {
	text: "#b1b1b1",
	bg: "#121215",
	bgTransparent: "#000000cc",
	secondary: "#4d4d4d",
	mainBg: "#000000cc",
	name: "dark",
};

export function getCssVariable(cssVar) {
	return getComputedStyle(document.documentElement).getPropertyValue(cssVar);
}

export function SetCssVariable(cssVar, value) {
	return document.documentElement.style.setProperty(cssVar, value);
}

export function toggleTheme(theme) {
	SetCssVariable("--text", theme.text);
	SetCssVariable("--bg", theme.bg);
	SetCssVariable("--bgTransparent", theme.bgTransparent);
	SetCssVariable("--secondary", theme.secondary);
	SetCssVariable("--mainBg", theme.mainBg);
	return theme.name;
}

if (localStorage.getItem("theme") == "dark") {
	toggleTheme(darkTheme);
	window.addEventListener("DOMContentLoaded", () => {
		document.querySelector(".theme-btn").innerHTML = "&#xF5A1;";
	});
}
