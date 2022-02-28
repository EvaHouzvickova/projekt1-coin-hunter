// toto budeš potřebovat později
/*
if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
	// panacek a mince se prekryvaji
}
*/


// sem začni psát svůj program

let panacek = document.getElementById('panacek');
let startovniPozice = 
panacek.style.top = parseInt(window.innerHeight/2) + "px";
panacek.style.left = parseInt(window.innerWidth/2) + "px";;

let pohyb = 20;

function pohybPanacka(event) {
	let panacekY = panacek.style.top;
	let panacekX = panacek.style.left;

	if (event.keyCode === 40 && (parseInt(panacekY) + pohyb) <= window.innerHeight) { //keydown
		panacek.style.top = parseInt(panacekY) + pohyb + "px";
	} if (event.keyCode === 38 && (parseInt(panacekY) - pohyb) >= 0) { //keyup
		panacek.style.top = parseInt(panacekY) - pohyb + "px";
	} if (event.keyCode === 37 && (parseInt(panacekX) + pohyb) >= 0) { //keyleft
		panacek.style.left = parseInt(panacekX) - pohyb + "px";
	} if (event.keyCode === 39 && (parseInt(panacekX) - pohyb) <= window.innerWidth) { //keyright
		panacek.style.left = parseInt(panacekX) + pohyb + "px";
	}
}

let minceY = nahodnaPoziceMince(0,window.innerHeight)
let minceX = nahodnaPoziceMince(0,window.innerWidth)
let mince = document.getElementById('mince');

mince.style.top = minceY + "px";
mince.style.left = minceX + "px";

function nahodnaPoziceMince(min, max) {
	return Math.floor(Math.random()*(max - min + 1) + min);
}
