// toto budeš potřebovat později
/*
if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
	// panacek a mince se prekryvaji
}
*/


// sem začni psát svůj program

let figurka = document.getElementById('panacek');
let startovniPozice = 
figurka.style.top = "50%";
figurka.style.left = "50%";

let pohyb = 3;

function pohybPanacka(event) {
	if (event.keyCode === 40) { //keydown
		figurka.style.top = parseInt(figurka.style.top) + pohyb + "%";
	} else if (event.keyCode === 38) { //keyup
		figurka.style.top = parseInt(figurka.style.top) - pohyb + "%";
	} else if (event.keyCode === 37) { //keyleft
		figurka.style.left = parseInt(figurka.style.left) - pohyb + "%";
	} else { //keyright
		figurka.style.left = parseInt(figurka.style.left) + pohyb + "%";
	}
}