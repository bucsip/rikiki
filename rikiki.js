window.onload = function game1() {


var game = {
	playerNames: [],
	round0: { point: [0, 0, 0, 0, 0]},
	round1: { tipp: [],
			hand:[],
			point:[]
		},
	round2: { tipp: [],
			hand:[],
			point:[]
		},
	round3: { tipp: [],
			hand:[],
			point:[]
		},
	round4: { tipp: [],
			hand:[],
			point:[]
		},
	round5: { tipp: [],
			hand:[],
			point:[]
		},
	round6: { tipp: [],
			hand:[],
			point:[]
		},
	round7: { tipp: [],
			hand:[],
			point:[]
		},
	round8: { tipp: [],
			hand:[],
			point:[]
		},
	round9: { tipp: [],
			hand:[],
			point:[]
		},
	round10: { tipp: [],
			hand:[],
			point:[]
		},
	round11: { tipp: [],
			hand:[],
			point:[]
		},
	round12: { tipp: [],
			hand:[],
			point:[]
		},
	round13: { tipp: [],
			hand:[],
			point:[]
		},
	round14: { tipp: [],
			hand:[],
			point:[]
		},
	round15: { tipp: [],
			hand:[],
			point:[]
		},
	round16: { tipp: [],
			hand:[],
			point:[]
		},
	round17: { tipp: [],
			hand:[],
			point:[]
		},
	round18: { tipp: [],
			hand:[],
			point:[]
		},
	round19: { tipp: [],
			hand:[],
			point:[]
		},
	round20: { tipp: [],
			hand:[],
			point:[]
		}
  };

var players = prompt("Hányan játszatok?");

function playersTable() {
  
if (Number(players) < 6 && Number(players) > 1) {
  for ( var i = 0; i < players; i++) {
  var p = prompt("Kérem a(z) " + (i+1) + ". játékos nevét!");
  game.playerNames.push(p);
  };
}else {
  players = prompt("Kérlek egy számot írj be 2-től 5-ig! Hányan játszatok?");
  return playersTable();
}
  
}

playersTable();

for (var n = 0; n < Number(players); n++){
  document.getElementById("name" + (n+1)).innerHTML = game.playerNames[n];
}

if (Number(players) < 5) {
  for (var j = Number(players) +1 ; j < 6; j++) {
    var parent = document.getElementById("gameBoard");
    var child = document.getElementById("gameTable" + j);
    parent.removeChild(child);
  }
}

var rounds = prompt("Hány kört akartok játszani?");

function roundSet() {
  
    if (Number(rounds) < 11 && Number(rounds) > 4) {
      
      for (var m = 1; m < Number(players) +1; m++) {
      var gg = 20;
      for ( var g = 0; g < (10 - Number(rounds)); g++) {
        var parent = document.getElementById("gameTable" + m);
        var child = document.getElementById("pointTable" + m + gg);
        parent.removeChild(child);
        gg--;
        child = document.getElementById("pointTable" + m + gg);
        parent.removeChild(child);
        gg--;
      }
      }
	  for (var sz = 1; sz < Number(rounds)*2+1; sz++){
		if(sz % Number(players) == 0){
			document.getElementById("point" + Number(players) + sz).style.backgroundColor = "#32CD32";
		}else {
			document.getElementById("point" + sz % Number(players) + sz).style.backgroundColor = "#32CD32";
		}
	  }
      }else {
        rounds = prompt("Kérlek egy számot írj be 5-től 10-ig! Hány kört akartok játszani?");
        return roundSet();
      }
}

roundSet();

var btn3 = document.getElementById("newg");
btn3.addEventListener("click", newgame);

var btn4 = document.getElementById("backbutton");
btn4.addEventListener("click", backb);

var btn = document.getElementById("tippb");
btn.addEventListener("click", tipp);

var r = 1;
var r2 = 1;
var v = 1;
var f = 1;
function tipp() {
  
  if (r2 < Number(rounds)+1) {
    for (; v < Number(players)+1; v++){
      var x = prompt("Mennyit tippelsz " + game.playerNames[v-1] + "?");
		
		if ( r2+1 > Number(x) && -1 < Number(x)){ 
		document.getElementById("tip" + v + r).innerHTML = Number(x);
		game["round"+r].tipp.push(Number(x));
		} else {
			alert("Kérlek figyelj oda és valós értéket adj meg!");
			return tipp();
		}
	}
	v = 1;
  }
  btn.disabled = true;
  btn2.disabled = false;
  btn4.disabled = false;
}

var btn2 = document.getElementById("handdd");
btn2.addEventListener("click", handd);


  
function handd () {

var yy = 0;
  
for (; f < Number(players)+1; f++){
	var h = prompt("Mennyit vittél " + game.playerNames[f-1] + "?");
	yy += Number(h);
	if ( r2+1 > Number(h) && -1 < Number(h)){ 
	 document.getElementById("hand" + f + r).innerHTML = Number(h);
	 game["round"+r].hand.push(Number(h));
   
  if (h == game["round"+r].tipp[f-1]) {
		var dd = game["round"+(r-1)].point[f-1];
		game["round"+r].point.push(dd+10+Number(h)*2);
		document.getElementById("point" + f + r).innerHTML = game["round"+r].point[f-1];
  }else {
		var bb = game["round"+(r-1)].point[f-1];
		var hh = Math.abs(game["round"+r].tipp[f-1]-h);
		game["round"+r].point.push(bb-hh*2);
		document.getElementById("point" + f + r).innerHTML = game["round"+r].point[f-1];
	}
  	
	} else {
		alert("Kérlek figyelj oda és valós értéket adj meg!");
		return handd();
}
 
}
  if (yy == r2){
	if ( r < Number(rounds)) {
		r2++;
	}else if (r == Number(rounds)){
		r2 = Number(rounds);
	}else {
		r2--;
	}
} else {
    alert("Többet vagy kevesebbet vittetek el mint összesen lehet!")
		for (var i = 0; i < Number(players); i++){
			game["round"+r].point.pop();
			game["round"+r].hand.pop();
		}
    f = 1;
		return handd();
  }
  
  
	r++;
	f = 1;
	btn.disabled = false;
	btn2.disabled = true;
	if ( r > Number(rounds)*2){
	btn.disabled = true;
	btn2.disabled = true;
	btn2.disabled = true;
	btn3.disabled = false;
}
}

function backb() {
	if ( btn.disabled == true && btn2.disabled == false){
		for (var i = 0; i < Number(players); i++){
			game["round"+r].tipp.pop();
		}
		return tipp();
	}else if (btn2.disabled == true && btn.disabled == false){
		r--;
		if ( r < Number(rounds)) {
			r2--;
		}else if (r == Number(rounds)){
			r2 = Number(rounds);
		}else {
			r2++;
		}
		for (var i = 0; i < Number(players); i++){
			game["round"+r].point.pop();
			game["round"+r].hand.pop();
		}
		return handd();
	}else if (btn3.disabled == false){
		r--;
		if ( r < Number(rounds)) {
			r2--;
		}else if (r == Number(rounds)){
			r2 = Number(rounds);
		}else {
			r2++;
		}
		for (var i = 0; i < Number(players); i++){
			game["round"+r].point.pop();
			game["round"+r].hand.pop();
		}
		return handd();
	}
}

function newgame() {
	location.reload();
}

}