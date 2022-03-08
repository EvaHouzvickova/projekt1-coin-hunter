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
let panacekSirka = panacek.width;
let panacekVyska = panacek.height;
let pohyb = 20;

let mince = document.getElementById('mince');
let minceSirka = mince.width;
let minceVyska = mince.height;
let minceY = Math.floor((Math.random() * window.innerHeight) + 1);
let minceX = Math.floor((Math.random() * window.innerWidth) + 1);

let hudba = document.getElementById('hudba');
let zvukMince = document.getElementById('zvukmince');
let fanfaraVitez = document.getElementById('zvukfanfara');

let skore = document.getElementById('score');
let pocitadloMinci = 0;
console.log(pocitadloMinci);

function vychoziPozicePanacka() { //vychozí pozice panáčka
	panacek.style.top = panacekY + "px";
	panacek.style.left = panacekX + "px";
}

function generatorPoziceMince() { //random pozice mince
	minceY = Math.floor((Math.random() * window.innerHeight) + 1);
	minceX = Math.floor((Math.random() * window.innerWidth) + 1);
	mince.style.top = minceY + "px";
	mince.style.left = minceX + "px";
}

function priNacteniStranky() { 
	vychoziPozicePanacka()
	generatorPoziceMince()
}

function vitez() {
	if ( pocitadloMinci >= 5) {
		hudba.pause();
		fanfaraVitez.play();
		if(confirm("Vyhrál si, gratulujeme. Chceš hrát znovu?")){
		window.location.reload();
		}
	}
}

function panacekSebralMinci() { 
		generatorPoziceMince();
		zvukMince.play();	
		++pocitadloMinci; //při sebrání mince přičítáme
		console.log(pocitadloMinci);
		skore.textContent = pocitadloMinci;
		vitez();
	}

function pohybPanacka(event) {
	let panacekY = panacek.style.top;
	let panacekX = panacek.style.left;

	//hudba.play();

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
	} if (!(parseInt(panacekX) + panacekSirka < minceX || minceX + minceSirka < parseInt(panacekX) || parseInt(panacekY) + panacekVyska < minceY || minceY + minceVyska < parseInt(panacekY))) { //prekryti panacka a mince
		panacekSebralMinci();
	}
}

