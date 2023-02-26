function getComputerChoice(a) {
  return a[Math.floor(Math.random()*a.length)];
}
function play(playerselection,compselection) {
  a = playerselection.toLowerCase();
  b = compselection.toLowerCase();
  switch (true){
    case a == "rock":
      if (b == "paper") {
        console.log("You Won!);
      }else{
        console.log("You lost");
      }
    case a == "paper":
      if (b == "scissor") {
        console.log("You Won!");
      }else{
        console.log("You lost");
      }
    case a == "scissor":
      if (b == "rock") {
        console.log("You Won!");
      }else{
        console.log("You lost");
      }
  }
}
console.log(getComputerChoice(['rock','paper','scissor']));

