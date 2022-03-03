// toto budeš potřebovat později
/*
if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
	// panacek a mince se prekryvaji
}
*/

// sem začni psát svůj program

let panacek = document.getElementById('panacek');
let panacekY = window.innerHeight / 2;
let panacekX = window.innerWidth / 2;
panacek.style.top = panacekY + "px";//vychozí pozice panáčka
panacek.style.left = panacekX + "px";
let panacekSirka = 64;
let panacekVyska = 70;
let pohyb = 20;

let mince = document.getElementById('mince');
let minceSirka = 36;
let minceVyska = 36;

let hudba = document.getElementById('hudba');
hudba.play();

function generatorMince() {
	minceY = Math.floor(Math.random() * window.innerHeight);
	minceX = Math.floor(Math.random() * window.innerWidth);
	mince.style.top = minceY + "px";
	mince.style.left = minceX + "px";
}

function panacekSebralMinci() {
	if (!(panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
		minceY = Math.floor(Math.random() * window.innerHeight);
		minceX = Math.floor(Math.random() * window.innerWidth);
		mince.style.top = minceY + "px";
		mince.style.left = minceX + "px";	
	}
}

function pohybPanacka(event) {
	let panacekY = panacek.style.top;
	let panacekX = panacek.style.left;

	if (event.keyCode === 40 && (parseInt(panacekY) + pohyb) <= window.innerHeight) { //keydown
		panacek.src = "obrazky/panacek.png";
		panacek.style.top = parseInt(panacekY) + pohyb + "px";
	} if (event.keyCode === 38 && (parseInt(panacekY) - pohyb) >= 0) { //keyup
		panacek.src = "obrazky/panacek-nahoru.png";
		panacek.style.top = parseInt(panacekY) - pohyb + "px";
	} if (event.keyCode === 37 && (parseInt(panacekX) + pohyb) >= 0) { //keyleft
		panacek.src = "obrazky/panacek-vlevo.png";
		panacek.style.left = parseInt(panacekX) - pohyb + "px";
	} if (event.keyCode === 39 && (parseInt(panacekX) - pohyb) <= window.innerWidth) {//keyright
		panacek.src = "obrazky/panacek-vpravo.png";
		panacek.style.left = parseInt(panacekX) + pohyb + "px";
	}
}
