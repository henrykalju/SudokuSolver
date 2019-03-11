console.log("Hey");

console.log();

button1 = document.getElementById("lahenda");
button1.style = "width: 100px; height: 100px";
button1.onclick = lahenda;

button2 = document.getElementById("tyhjenda");
button2.style = "width: 100px; height: 100px";
button2.onclick = tyhjenda;

buttonVali = document.getElementById("vali");
buttonVali.style = "width: 100px; height: 100px;";
buttonVali.onclick = vali;

ctx = document.getElementById("canvas");
canvas = ctx.getContext("2d");

size = 50;

ctx.width = 9 * size;
ctx.height = 9 * size;
canvas.font = "40px Arial";

const easy = [[{value: 0}, {value: 0}, {value: 2}, {value: 0}, {value: 5}, {value: 0}, {value: 0}, {value: 1}, {value: 0}],
   		[{value: 4}, {value: 0}, {value: 5}, {value: 0}, {value: 9}, {value: 0}, {value: 0}, {value: 0}, {value: 0}],
   		[{value: 0}, {value: 1}, {value: 8}, {value: 7}, {value: 0}, {value: 0}, {value: 5}, {value: 0}, {value: 3}],
   		[{value: 0}, {value: 5}, {value: 0}, {value: 6}, {value: 7}, {value: 0}, {value: 1}, {value: 0}, {value: 0}],
   	    [{value: 0}, {value: 9}, {value: 0}, {value: 1}, {value: 0}, {value: 4}, {value: 0}, {value: 8}, {value: 0}],
   		[{value: 0}, {value: 0}, {value: 7}, {value: 0}, {value: 3}, {value: 5}, {value: 0}, {value: 6}, {value: 0}],
   		[{value: 7}, {value: 0}, {value: 3}, {value: 0}, {value: 0}, {value: 6}, {value: 2}, {value: 9}, {value: 0}],
   		[{value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 1}, {value: 0}, {value: 3}, {value: 0}, {value: 4}],
   		[{value: 0}, {value: 2}, {value: 0}, {value: 0}, {value: 4}, {value: 0}, {value: 8}, {value: 0}, {value: 0}]];

const medium = [[{value: 3}, {value: 1}, {value: 0}, {value: 6}, {value: 0}, {value: 5}, {value: 4}, {value: 0}, {value: 0}],
   		  [{value: 6}, {value: 0}, {value: 4}, {value: 2}, {value: 1}, {value: 0}, {value: 0}, {value: 8}, {value: 3}],
   		  [{value: 9}, {value: 0}, {value: 0}, {value: 0}, {value: 3}, {value: 0}, {value: 0}, {value: 2}, {value: 0}],
   		  [{value: 2}, {value: 4}, {value: 7}, {value: 5}, {value: 6}, {value: 0}, {value: 0}, {value: 3}, {value: 0}],
   		  [{value: 8}, {value: 6}, {value: 0}, {value: 1}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}],
   		  [{value: 0}, {value: 0}, {value: 5}, {value: 3}, {value: 0}, {value: 2}, {value: 6}, {value: 7}, {value: 0}],
   		  [{value: 0}, {value: 8}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 4}],
   		  [{value: 0}, {value: 3}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 7}, {value: 6}, {value: 2}],
   		  [{value: 5}, {value: 0}, {value: 0}, {value: 0}, {value: 7}, {value: 0}, {value: 8}, {value: 0}, {value: 9}]];

const hard = [[{value: 7}, {value: 0}, {value: 2}, {value: 0}, {value: 1}, {value: 0}, {value: 0}, {value: 9}, {value: 0}],
   		[{value: 8}, {value: 5}, {value: 0}, {value: 0}, {value: 0}, {value: 2}, {value: 0}, {value: 0}, {value: 1}],
   		[{value: 0}, {value: 0}, {value: 0}, {value: 8}, {value: 0}, {value: 3}, {value: 0}, {value: 7}, {value: 0}],
   		[{value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 4}, {value: 5}, {value: 0}],
   		[{value: 4}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 8}],
   		[{value: 0}, {value: 3}, {value: 8}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}],
   		[{value: 0}, {value: 7}, {value: 0}, {value: 6}, {value: 0}, {value: 1}, {value: 0}, {value: 0}, {value: 0}],
   		[{value: 1}, {value: 0}, {value: 0}, {value: 9}, {value: 0}, {value: 0}, {value: 0}, {value: 6}, {value: 5}],
   		[{value: 0}, {value: 2}, {value: 0}, {value: 0}, {value: 8}, {value: 0}, {value: 7}, {value: 0}, {value: 4}]];

const evil = [[{value: 0}, {value: 6}, {value: 0}, {value: 4}, {value: 0}, {value: 0}, {value: 7}, {value: 0}, {value: 0}],
   		[{value: 0}, {value: 0}, {value: 2}, {value: 0}, {value: 8}, {value: 0}, {value: 0}, {value: 6}, {value: 4}],
   		[{value: 8}, {value: 0}, {value: 7}, {value: 0}, {value: 0}, {value: 0}, {value: 1}, {value: 0}, {value: 0}],
   		[{value: 7}, {value: 0}, {value: 0}, {value: 5}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}],
   		[{value: 0}, {value: 3}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 7}, {value: 0}],
   		[{value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 9}, {value: 0}, {value: 0}, {value: 2}],
   		[{value: 0}, {value: 0}, {value: 8}, {value: 0}, {value: 0}, {value: 0}, {value: 2}, {value: 0}, {value: 3}],
   		[{value: 9}, {value: 2}, {value: 0}, {value: 0}, {value: 3}, {value: 0}, {value: 6}, {value: 0}, {value: 0}],
   		[{value: 0}, {value: 0}, {value: 5}, {value: 0}, {value: 0}, {value: 6}, {value: 0}, {value: 1}, {value: 0}]];

var ruudustik = [[{value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}],
   			 [{value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}],
   			 [{value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}],
   			 [{value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}],
   			 [{value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}],
   			 [{value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}],
   			 [{value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}],
   			 [{value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}],
   			 [{value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}]];


for (let i = 0; i < ruudustik.length; i++) {
	for (let j = 0; j < 9; j++) {
		ruudustik[i][j].activated = false;
		
		ruudustik[i][j].possible1 = [false, false, false, false, false, false, false, false, false];
		ruudustik[i][j].possible2 = [true, true, true, true, true, true, true, true, true];
		ruudustik[i][j].possible3 = [false, false, false, false, false, false, false, false, false];

		if (ruudustik[i][j].value != 0) {
			ruudustik[i][j].possible1[ruudustik[i][j].value -1] = true;
			ruudustik[i][j].possible2[ruudustik[i][j].value -1] = true;
			ruudustik[i][j].algne = true;
		};
	};
};
draw();

ctx.addEventListener("mouseup", function(event){
	x = Math.min(8, Math.max(0, (event.clientX - 8 - (event.clientX - 8)%size)/size));
	y = Math.min(8, Math.max(0, (event.clientY - 8 - (event.clientY - 8)%size)/size));
	
	for (let i = 0; i < ruudustik.length; i++){
		for (let j = 0; j < ruudustik[0].length; j++){
			if ((j != y || i != x) && ruudustik[j][i].activated){
				ruudustik[j][i].activated = false;					
			};
		};
	};
	
	if (ruudustik[y][x].activated){
		ruudustik[y][x].activated = false;
	}else {
		ruudustik[y][x].activated = true;
	};
	draw();
});

document.addEventListener("keydown", function(event){
	keypressed = event.keyCode;
	//console.log(keypressed)
	
	for (let i = 0; i < ruudustik.length; i++){
		for (let j = 0; j < ruudustik[0].length; j++){
			if (ruudustik[j][i].activated){
				if (keypressed <= 105 && keypressed >= 96) {
                    ruudustik[j][i].activated = false;
                    ruudustik[j][i].value = keypressed - 96;
                }else if (keypressed <= 57 && keypressed >= 48){
                    ruudustik[j][i].value = keypressed - 48;
					ruudustik[j][i].activated = false;
                };
                ruudustik[j][i].algne = true;
            };
		};
	};
	
	draw();
	
});

function draw(){
	
	canvas.beginPath();
	canvas.fillStyle = "white";
	canvas.rect(0, 0, ctx.width, ctx.height);
	canvas.fill();
	
	for (let i = 0; i < 3; i++){
		for (let j = 0; j < 3; j++){
			canvas.beginPath();
			canvas.lineWidth = "2.5";
			canvas.strokeStyle = "black";
			canvas.rect(j*size*3, i*size*3, size*3, size*3);
			canvas.stroke();
		};
	};
	
	for (let i = 0; i < ruudustik.length; i++){
		for (let j = 0; j < ruudustik[0].length; j++){
			if (!ruudustik[i][j].activated){
				canvas.beginPath();
				canvas.lineWidth = "0.25";
				canvas.strokeStyle = "black";
				canvas.rect(j*size, i*size, size, size);
				canvas.stroke();
			};
			if(ruudustik[i][j].activated){
				canvas.beginPath();
				canvas.lineWidth = "2";
				canvas.strokeStyle = "red";
				canvas.rect(j*size, i*size, size, size);
				canvas.stroke();
			};
			if (ruudustik[i][j].value >= 1 && ruudustik[i][j].value <= 9){
				if(ruudustik[i][j].algne) {
					canvas.fillStyle = "black";
				} else {
					canvas.fillStyle = "gray";
				}
				canvas.fillText(String(ruudustik[i][j].value), (j + 0.27)*size, (i + 0.82)*size);
			};
		};
	};
};

var paarid = [];

function lahenda(){
	var start = new Date().getTime();
	console.log("No hakkame ss lahendama!");

	lahendatud = false;
	var korrad = 0;

	while (!lahendatud && korrad < 15){
		let valmis = 0;

		for(let i = 0; i < 9; i++) {
            for(let j = 0; j < 9; j++) {
                if (ruudustik[i][j].value != 0) {
                    valmis++;
                };
            };
        };
        if(valmis == 81) {
        	var end = new Date().getTime();
            lahendatud = true;
            break;
        } else if(valmis < 17) {
        	break;
        };


		for (let a = 0; /*a on rida*/ a < 9; a++) {
			for (let b = 0; /*b on nr*/ b < 9; b++) {
				let numbreid = 0;
				let kohad = [];
				for(let c = 0; /*c on tulp*/ c < 9; c++) {
					if(voimalik(a, c, b)) {
						numbreid++;
						kohad.push(c);
						ruudustik[a][c].possible1[b] = true;
					} else {
						ruudustik[a][c].possible1[b] = false;
					};
				};
				if(numbreid == 1) {
					ruudustik[a][kohad[0]].possible1[b] = true;
					ruudustik[a][kohad[0]].possible2[b] = true;
					ruudustik[a][kohad[0]].value = b+1;
					draw();
				};
			};
			let samad = [[], [], [], [], [], [], [], [], []];
			for (let i = 0; i < 9; i++) {
				for (let j = 0; j < 9; j++) {
					if (i != j) {
						let sama = true;
						for(let x = 0; x < 9; x++) {
							if (ruudustik[a][i].possible1[x] != ruudustik[a][j].possible1[x] || (ruudustik[a][i].value != 0 || ruudustik[a][j].value != 0)){
								sama = false;
							};
						};
						if (sama) {
							let midagi = 0;
							for(let o = 0; o < 9; o++){
								if(ruudustik[a][i].possible1[o] == true) {
									midagi++;
								};
							};
							if (!samad[j].includes(i, j) && midagi == 2){
								samad[i] = [i, j];
							};
						};
					};
				};
			};
			let x;
			let y;
			for (let i = 0; i < 9; i++){
				if (samad[i].length != 0) {
					x = samad[i][0];
					y = samad[i][1];
					for (let asd = 0; asd < 9; asd++){
						if(ruudustik[a][i].possible1[asd]){
							for(let afk = 0; afk < 9; afk++){
								if (afk != x && afk != y){
									ruudustik[a][afk].possible2[asd] = false;
								};
							};
						};
					};
				};
			};

		};

		for (let a = 0; /*a on tulp*/ a < 9; a++) {
			for (let b = 0; /*b on nr*/ b < 9; b++) {
				let numbreid = 0;
				let kohad = [];
				for(let c = 0; /*c on rida*/ c < 9; c++) {
					if(voimalik(c, a, b)) {
						numbreid++;
						kohad.push(c);
						ruudustik[c][a].possible1[b] = true;
					} else {
						ruudustik[c][a].possible1[b] = false;
					};
				};
				if(numbreid == 1) {
					ruudustik[kohad[0]][a].possible1[b] = true;
					ruudustik[kohad[0]][a].possible2[b] = true;
					ruudustik[kohad[0]][a].value = b+1;
					draw();			
				};
			};

			let samad = [[], [], [], [], [], [], [], [], []];
			for (let i = 0; i < 9; i++) {
				for (let j = 0; j < 9; j++) {
					if (i != j) {
						let sama = true;
						for(let x = 0; x < 9; x++) {
							if (ruudustik[i][a].possible1[x] != ruudustik[j][a].possible1[x] || (ruudustik[i][a].value != 0 || ruudustik[j][a].value != 0)){
								sama = false;
							};
						};
						if (sama) {
							let midagi = 0;
							for(let o = 0; o < 9; o++){
								if(ruudustik[i][a].possible1[o] == true) {
									midagi++;
								};
							};
							if (!samad[j].includes(i, j) && midagi == 2){
								samad[i] = [i, j];
							};
						};
					};
				};
			};
			let x;
			let y;
			for (let i = 0; i < 9; i++){
				if (samad[i].length != 0) {
					x = samad[i][0];
					y = samad[i][1];
					for (let asd = 0; asd < 9; asd++){
						if(ruudustik[i][a].possible1[asd]){
							for(let afk = 0; afk < 9; afk++){
								if (afk != x && afk != y){
									ruudustik[afk][a].possible2[asd] = false;
								};
							};
						};
					};
				};
			};
		};	

		for (let i = 0; i < 9; i++) {
			let rida = i - (i%3);
			let tulp = (i%3)*3;

			for (let z = 0; z < 9; z++) {
				let numbreid = 0;
				let kohad = [];
				for (let x = 0; x < 3; x++) {
					for (let y = 0; y < 3; y++) {
						if (voimalik(rida + y, tulp + x, z)){
							numbreid++;
							kohad.push(y);
							kohad.push(x);	
							ruudustik[rida + y][tulp + x].possible1[z] = true;
						} else {
							ruudustik[rida + y][tulp + x].possible1[z] = false;
						};
					};
				};

				if (numbreid == 1){
					ruudustik[rida + kohad[0]][tulp + kohad[1]].possible1[z] = true;
					ruudustik[rida + kohad[0]][tulp + kohad[1]].possible2[z] = true;
					ruudustik[rida + kohad[0]][tulp + kohad[1]].value = z + 1;
					draw();
				};
			};
		};

		for (let suurRuut = 0; suurRuut < 9; suurRuut++) {
			let suurRida = suurRuut - (suurRuut%3);
			let suurTulp = (suurRuut%3)*3;
			for(let smallRuut = 0; smallRuut < 9; smallRuut++) {
				let smallRida = (smallRuut - smallRuut%3) / 3;
				let smallTulp = (smallRuut%3);
				for(let smallRuut2 = 0; smallRuut2 < 9; smallRuut2++) {
					let smallRida2 = (smallRuut2 - smallRuut2%3) / 3;
					let smallTulp2 = (smallRuut2%3);

					if(smallRida != smallRida2 || smallTulp != smallTulp2) {
						if(checkPossible(ruudustik[suurRida + smallRida][suurTulp + smallTulp].possible1, ruudustik[suurRida + smallRida2][suurTulp + smallTulp2].possible1)){
							ruudustik[suurRida + smallRida][suurTulp + smallTulp].possible3 = ruudustik[suurRida + smallRida][suurTulp + smallTulp].possible1;
							ruudustik[suurRida + smallRida2][suurTulp + smallTulp2].possible3 = ruudustik[suurRida + smallRida2][suurTulp + smallTulp2].possible1;
							
							paarid.push([suurRida + smallRida, suurTulp + smallTulp, suurRida + smallRida2, suurTulp + smallTulp2]);

						};
					};
				};
			};
		};

		for (let i = 0; i < 9; i++){

            for (let j = 0; j < 9; j++){
                voimalikke = 0;
                nr = 0;
                for (let k = 0; k < 9; k++){
                    if (voimalik(i, j, k)){
                        voimalikke++;
                        nr = k+1;
                    };
                };
                if (voimalikke == 1){
                    ruudustik[i][j].value = nr;
                };
            };
        };
        
		korrad++;
    };

	draw();
	if (lahendatud){
		console.log("Ja ongi lahendatud!!!");
		console.log("Aega kulus: ", end - start, " ms");
	} else {
		console.log("ERROR 4004 KEEGI TEGI MIDAGI VALESTI");
	};
};

function voimalik(rida, tulp, nr){

	if(!ruudustik[rida][tulp].possible2[nr]){
		return false;
	}



	if(ruudustik[rida][tulp].value != 0) {
		return false;
	};

	for(let i = 0; i < 9; i++) {
		if(ruudustik[rida][i].value == nr+1) {
			return false;
		};
	};

	for(let i = 0; i < 9; i++) {
		if(ruudustik[i][tulp].value == nr+1) {
			return false;
		};
	};

	for (let i = 0; i < 3; i++) {
		for (let j = 0; j < 3; j++) {
			if (ruudustik[(rida-rida%3)+i][(tulp-tulp%3)+j].value == nr+1){
				return false;
			};
			if(ruudustik[(rida-rida%3)+i][(tulp-tulp%3)+j].possible3[nr] && (i != rida%3 || j != tulp%3) && 
				checkSame(rida, tulp, i, j)) {
				return false;
			};
		};
	};

	return true;
};

function tyhjenda(){
	for (let i = 0; i < 9; i++){
		for (let j = 0; j < 9; j++){
			ruudustik[i][j].activated = false;
			ruudustik[i][j].value = 0;
			ruudustik[i][j].possible1 = [false, false, false, false, false, false, false, false, false];
			ruudustik[i][j].possible2 = [true, true, true, true, true, true, true, true, true];
		};
	};
	draw();
};

function vali(){
	let valik = document.getElementById("valik").options.selectedIndex;
	if(valik == 0) {
		ruudustik = easy;
	} else if(valik == 1) {
		ruudustik = medium;
	} else if(valik == 2) {
		ruudustik = hard;
	} else if(valik == 3) {
		ruudustik = evil;
	} else {
		console.log("Not available");
	};

	for (let i = 0; i < ruudustik.length; i++) {
		for (let j = 0; j < 9; j++) {
		
			ruudustik[i][j].possible1 = [false, false, false, false, false, false, false, false, false];
			ruudustik[i][j].possible2 = [true, true, true, true, true, true, true, true, true];
			ruudustik[i][j].possible3 = [false, false, false, false, false, false, false, false, false];

			if (ruudustik[i][j].value != 0) {
				ruudustik[i][j].possible1[ruudustik[i][j].value -1] = true;
				ruudustik[i][j].possible2[ruudustik[i][j].value -1] = true;
				ruudustik[i][j].algne = true;
			};
		};
	};
	draw();
};

function checkPossible(a = [], b = []){
	let samu = 0;
	for(let i = 0; i < a.length; i++) {
		if(a[i] != b[i]) {
			return false;
		} else if (a[i]) {
			samu++;
		};
	};
	if (samu == 2){
		return true;
	} else {
		return false;
	};
};

function checkSame(rida, tulp, i, j) {
	for(let paar = 0; paar < paarid.length; paar++) {
		if(rida == paarid[paar][0] && tulp == paarid[paar][1]) {
			let paarilinex = paarid[paar][2]%3;
			let paariliney = paarid[paar][3]%3;
			if (i == paarilinex && j == paariliney){
				return false;
			};
		};
	};
	return true;
};