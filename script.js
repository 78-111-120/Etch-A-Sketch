

var squares = "";
const container = document.getElementById("container");

document.getElementById("grid-btn2").onclick = function() {
 var gridSize = document.getElementById("grid-btn1").value;
  gridCreate(gridSize)
  console.log(gridSize)
}



function gridCreate(size) {
  squares = "";

for (let i = 0; i < size ** 2 ; i++) {
  squares += "<div class='square' onmouseover='colorChange(this)'></div>";
}
  gridRender(size);
};

function colorChange(ele) {
  ele.style.backgroundColor = "black";
};

function gridRender(n) {
  container.innerHTML = squares;
  container.style["grid-template-columns"] = `repeat(${n},1fr)`
}



