// const gradient = [sideOrCorner[getRandomNumber(sideOrCorner)]];
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const sideOrCorner = ["top", "right", "bottom", "left"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
	const angle = Math.floor(Math.random() * 360);
	let firstHexColor = '#';
	let secondHexColor = '#';
	for(let i = 0; i < 6; i++) {
		firstHexColor += hex[getRandomNumber(hex)];
		secondHexColor += hex[getRandomNumber(hex)];
	}
	let gradientColor = `linear-gradient(to ${sideOrCorner[getRandomNumber(sideOrCorner)]}, ${firstHexColor}, ${secondHexColor})`;

	color.textContent = gradientColor;
	document.body.style.backgroundImage = gradientColor;
});

function getRandomNumber(arr) {
	return Math.floor(Math.random() * arr.length);
}