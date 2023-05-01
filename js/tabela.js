// tamanho da tela
let width = 200 * 3;
let height = 26 * 50;

horarios = ["", "8:00 - 8:30","8:30 - 9:00","9:00 - 9:30","9:30 - 10:00","10:00 - 10:30","10:30 - 11:00","11:00 - 11:30","11:30 - 12:00","12:00 - 12:30","12:30 - 13:00","13:00 - 13:30","13:30 - 14:00","14:00 - 14:30","14:30 - 15:00","15:00 - 15:30","15:30 - 16:00","16:00 - 16:30","16:30 - 17:00","17:00 - 17:30","17:30 - 18:00","18:00 - 18:30","18:30 - 19:00","19:00 - 19:30","19:30 - 20:00","20:00 - 20:30"]

modalidades = [
	["", [255,255,255]], // 0 = ""
	["2x2", [0,0,255]], // 1 = 2x2
	["3x3", [0,255,255]], // 2 = 3x3
	["4x4", [0,255,0]], // 3 = 4x4
	["5x5", [255,255,0]], // 4 = 5x5
	["6x6", [255,153,0]], // 5 = 6x6
	["7x7", [255,0,0]], // 6 = 7x7
	["BLD", [128,0,128]], // 7 = BLD
	["OH", [255,255,153]], // 8 = OH
	["FMC", [255,0,255]], // 9 = FMC
	["Clock", [0,153,0]], // 10 = Clock
	["Megaminx", [255,51,153]], // 11 = Megaminx
	["Pyraminx", [0,51,102]], // 12 = Pyraminx
	["Skewb", [153,102,51]], // 13 = Skewb
	["Square-1", [153,255,51]], // 14 = Square-1
	["Premiação", [255,255,153]] // 14 = Square-1
]

sab = [
	[7," Final", 2],
	[6," Final",3],
	[5," Final",3],
	[0,"",2],
	[10," 1ª",2],
	[12," 1ª",2],
	[13," Final",2],
	[14," Final",2],
	[3," 1ª",2],
	[4," 1ª",2],
	[10," Final",1],
	[12," Final",1],
	[4," Final",1]
]

dom = [
	[9,"", 3],
	[3," Final",1],
	[2," 1ª",4],
	[0,"",2],
	[11," Final",3],
	[1," 1ª",2],
	[8," Final",2],
	[2," 2ª",2],
	[1," Final",1],
	[2," Final",1],
]

containers = []

function setup() {
	createCanvas(width,height);

	var t = 1
	
	for (let i = 0; i < sab.length; i++) {
		if (sab[i][0] != 0) {
			var txt = modalidades[sab[i][0]][0] + sab[i][1];		
			containers.push([1,t,1,sab[i][2],txt,modalidades[sab[i][0]][1]]);
		}
		t += sab[i][2];
	}
	var t = 1
	
	for (let i = 0; i < dom.length; i++) {
		if (sab[i][0] != 0) {
			var txt = modalidades[dom[i][0]][0] + dom[i][1];		
			containers.push([2,t,1,dom[i][2],txt,modalidades[dom[i][0]][1]]);
		}
		t += dom[i][2];
	}
}

function draw() {
	background(0); // pinta o fundo de preto

	slot(1,0,1,1,"SAB",[255,255,255]);
	slot(2,0,1,1,"DOM",[255,255,255]);
	slot(1,9,2,2,"Almoço",[255,255,255]);
	slot(2,22,1,4,"Premiação",[255,255,255]);

	for (let i = 0; i < horarios.length; i++) {
		slot(0,i,1,1,horarios[i],[255,255,255]);
	}

	for (let i = 0; i < containers.length; i++) {
		slot(containers[i][0],containers[i][1],containers[i][2],containers[i][3],containers[i][4],containers[i][5]);
	}

	containers.forEach(e => {

		var w = e[2] * 200;
		var h = e[3] * 50;
		var x = w/e[2] * e[0];
		var y = h/e[3] * e[1];

		if (x <= mouseX && mouseX <= x + w && y <= mouseY && mouseY <= y + h) slot(e[0],e[1],e[2],e[3],e[4],[120,120,120]);
		else slot(e[0],e[1],e[2],e[3],e[4],e[5]);
	});
}

function slot(x,y,w,h,txt,clr) {

	var wl = w * 200;
	var hl = h * 50;
	var xl = wl/w * x;
	var yl = hl/h * y;

	fill(clr[0],clr[1],clr[2]);
	rect(xl,yl,wl-3,hl-3);

	fill(0);
	textSize(24);
	textAlign(CENTER);
	text(txt, xl+(wl-3)/2, yl + (hl+12)/2);
}

function getName() {

	for (let i = 0; i < containers.length; i++) {

		var e = containers[i];

		var w = e[2] * 200;
		var h = e[3] * 50;
		var x = w/e[2] * e[0];
		var y = h/e[3] * e[1];

		if (x <= mouseX && mouseX <= x + w && y <= mouseY && mouseY <= y + h) {
			return e[4];
		}
	}
}

function mouseClicked() {
	
	console.log(getName());
	console.log(mouseX,mouseY)
}