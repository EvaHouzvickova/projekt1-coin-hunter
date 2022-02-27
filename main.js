// toto budeš potřebovat později
/*
if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
	// panacek a mince se prekryvaji
}
*/


// sem začni psát svůj program

let figurka = document.getElementById('panacek');
let startovniPozice = 
figurka.style.top = "20px";
figurka.style.left = "20px";

let pohyb = 20;

function pohybPanacka(event) {
	let figurkaY = figurka.style.top;
	let figurkaX = figurka.style.left;

	if (event.keyCode === 40 && (parseInt(figurkaY) + pohyb) <= window.innerHeight) { //keydown
		figurka.style.top = parseInt(figurkaY) + pohyb + "px";
	} if (event.keyCode === 38 && (parseInt(figurkaY) - pohyb) >= 0) { //keyup
		figurka.style.top = parseInt(figurkaY) - pohyb + "px";
	} if (event.keyCode === 37 && (parseInt(figurkaX) + pohyb) >= 0) { //keyleft
		figurka.style.left = parseInt(figurkaX) - pohyb + "px";
	} if (event.keyCode === 39 && (parseInt(figurkaX) - pohyb) <= window.innerWidth) { //keyright
		figurka.style.left = parseInt(figurkaX) + pohyb + "px";
	}
}
