
document.querySelector(".btn").addEventListener("click", gameLogic);

function gameLogic() {

  var com = Math.floor((Math.random() * 3) + 1);
  var opt = prompt("Select\n( 1 ) for Rock\n( 2 ) for Paper\n( 3 ) for Scissor");

  if(opt == com) {
    document.querySelector("h2").innerHTML = "Draw";
  } else {
      if(com == 1 && opt == 2) {
        document.querySelector("h2").innerHTML = "You Won";
        document.querySelector(".opt2").setAttribute("src","images/stones.png");
        document.querySelector(".opt1").setAttribute("src","images/papers.png");
      } else if(com == 2 && opt == 3) {
        document.querySelector("h2").innerHTML = "You Won";
        document.querySelector(".opt2").setAttribute("src","images/papers.png");
        document.querySelector(".opt1").setAttribute("src","images/scissors.png");
      } else if(com == 3 && opt == 1) {
        document.querySelector("h2").innerHTML = "You Won";
        document.querySelector(".opt2").setAttribute("src","images/scissors.png");
        document.querySelector(".opt1").setAttribute("src","images/stones.png");
      } else if(com == 2 && opt == 1) {
        document.querySelector("h2").innerHTML = "GohAN Won";
        document.querySelector(".opt2").setAttribute("src","images/papers.png");
        document.querySelector(".opt1").setAttribute("src","images/stones.png");
      } else if(com == 3 && opt == 2) {
        document.querySelector("h2").innerHTML = "GohAN Won";
        document.querySelector(".opt2").setAttribute("src","images/scissors.png");
        document.querySelector(".opt1").setAttribute("src","images/papers.png");
      } else if(com == 1 && opt == 3) {
        document.querySelector("h2").innerHTML = "GohAN Won";
        document.querySelector(".opt2").setAttribute("src","images/stones.png");
        document.querySelector(".opt1").setAttribute("src","images/scissors.png");
      }   
  }

  // if(opt == 1) {
  //   document.querySelector(".opt1").setAttribute("src","images/stones.png");
  // } else if(opt == 2) {
  //   document.querySelector(".opt1").setAttribute("src","images/papers.png");
  // } else if(opt == 3) {
  //   document.querySelector(".opt1").setAttribute("src","images/scissors.png");
  // }

  // if(com == 1) {
  //   document.querySelector(".opt2").setAttribute("src","images/stones.png");
  // } else if(com == 2) {
  //   document.querySelector(".opt2").setAttribute("src","images/papers.png");
  // } else if(com == 3) {
  //   document.querySelector(".opt2").setAttribute("src","images/scissors.png");
  // }

}
