let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector(".dark-mode-switch");

const enableDarkMode = () => {
	document.body.classList.add("darkMode");
	document.querySelector("#light-mode").style.display = "none";
	document.querySelector("#dark-mode").style.display = "block";
	localStorage.setItem("darkMode", "enabled");
};
const disableDarkMode = () => {
	document.body.classList.remove("darkMode");
	document.querySelector("#light-mode").style.display = "block";
	document.querySelector("#dark-mode").style.display = "none";
	localStorage.setItem("darkMode", null);
};

if (darkMode === "enabled") {
	enableDarkMode();
	document.querySelector("#dark-mode").style.display = "block";
} else {
	document.querySelector("#light-mode").style.display = "block";
}
darkModeToggle.addEventListener("click", () => {
	darkMode = localStorage.getItem("darkMode");
	if (darkMode != "enabled") {
		enableDarkMode();
	} else {
		disableDarkMode();
	}
});
