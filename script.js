var array = [
  ["r11", "r12", "r13"],
  ["r21", "r22", "r23"],
  ["r31", "r32", "r33"],
];
const elements=[];
var scoreplayer1=0;
var scoreplayer2=0;
var countboard=0;
const tds = document.getElementsByTagName("td");

var index = 0;
window.onload = function () {
  player1=document.getElementById("player1");
  player2=document.getElementById("player2");
  r11 = document.getElementById("r11");
  r12 = document.getElementById("r12");
  r13 = document.getElementById("r13");
  r21 = document.getElementById("r21");
  r22 = document.getElementById("r22");
  r23 = document.getElementById("r23");
  r31 = document.getElementById("r31");
  r32 = document.getElementById("r32");
  r33 = document.getElementById("r33"); 
 
  player1.innerHTML = "Player X: " + scoreplayer1;
  player2.innerHTML = "Player O: " + scoreplayer2;
  elements.push(r11,r12,r13,r21,r22,r23,r31,r32,r33)
  init();

};

function init(){
  countboard=0
  array = [
    ["r11", "r12", "r13"],
    ["r21", "r22", "r23"],
    ["r31", "r32", "r33"],
  ];
  for (let td of tds) {
    td.innerHTML = "";
  td.addEventListener("click", check);
  } 

}


function check(e) {


  const row = document.getElementById(e.target.id);

  console.log(countboard)
  if (index % 2 === 0) {
    row.innerHTML = `<p class="X">X</p>`;
    row.removeEventListener("click", check);
    array.map((r) => {
      if (r.includes(e.target.id)) {
        r[r.indexOf(e.target.id)] = "X";
      }
    });
  } else {
    row.innerHTML = `<p class="O">O</p>`;
    array.map((r) => {
      if (r.includes(e.target.id)) {
        r[r.indexOf(e.target.id)] = "O";
      }
    });
  }
  if(verif()===true){

   setTimeout(()=>{
    init();
    elements.forEach((e) => {
      e.innerHTML= ""
    }) 
    win.innerHTML=""

  },1000);

  }
  index = index + 1;
  countboard = countboard + 1 ;
}

function verif() {
  const diagonals = [
    [[0, 0], [1, 1], [2, 2]],
    [[0, 2], [1, 1], [2, 0]]
  ];

  const win = document.getElementById("win");
  for (let i = 0; i < 3; i++) {
 
    if (
      (array[i][0] === "X" && array[i][1] === "X" && array[i][2] === "X") ||
      (array[i][0] === "O" && array[i][1] === "O" && array[i][2] === "O")
    ) {
     
      win.innerHTML = `<h1>${array[i][0]} is the winner</h1>`;
      updatescore(array[i][0])
      return true  ;
    }

    
    if (
      (array[0][i] === "X" && array[1][i] === "X" && array[2][i] === "X") ||
      (array[0][i] === "O" && array[1][i] === "O" && array[2][i] === "O")
    ) {
      win.innerHTML = `<h1>${array[0][i]} is the winner</h1>`;
      updatescore(array[i][0])
      return true;
    }  

 
  }
  for (const diagonal of diagonals) {
    const [pos1, pos2, pos3] = diagonal;
    
    if (
      (array[pos1[0]][pos1[1]] === "X" && array[pos2[0]][pos2[1]] === "X" && array[pos3[0]][pos3[1]] === "X") ||
      (array[pos1[0]][pos1[1]] === "O" && array[pos2[0]][pos2[1]] === "O" && array[pos3[0]][pos3[1]] === "O")
    ) {
      win.innerHTML = `<h1>${array[pos1[0]][pos1[1]]} is the winner</h1>`;
      updatescore(array[pos1[0]][pos1[1]])
      return true ;
    }
  }
 
  if (countboard === 8) {
  

    win.innerHTML = "<h1>It's a draw!</h1>";
    return true ;
  }
 return false
}


function updatescore(winner) {
  if (winner === "X") {
    scoreplayer1 += 1;
  } else if(winner === "O") {
    scoreplayer2 += 1;
  }

  player1.innerHTML = "Player X: " + scoreplayer1;
  player2.innerHTML = "Player O: " + scoreplayer2;
}

function reset(){
   scoreplayer1=0;
 scoreplayer2=0;
 countboard=0;
 player1.innerHTML = "Player X: " + scoreplayer1;
 player2.innerHTML = "Player O: " + scoreplayer2;
  init();
}