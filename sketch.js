unction setup() {
  createCanvas(500, 500);
    background("red");

}
function draw() {
  
  stroke("white");
  fill("black");

  //console.log(mouseIsPressed)

  if (mouseIsPressed) {
    rect(mouseX, mouseY, 20, 35);
  }
}
