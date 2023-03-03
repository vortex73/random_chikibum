function getComputerChoice(a) {
  return a[Math.floor(Math.random()*a.length)];
}
function play(playerselection,compselection) {
  a = playerselection.toLowerCase();
  b = compselection.toLowerCase();
  console.log(playerselection);
    if (a == "rock"){
      if (b == "paper") {
        alert("You Won!");
      }else{
        alert("You lost");
      }
    }
    if (a == "paper"){
      if (b == "scissor") {
        alert("You Won!");
      }else{
        alert("You lost");
      }
    }
    if (a == "scissor"){
      if (b == "rock") {
        alert("You Won!");
      }else{
        alert("You lost");
      }
    }
  
}
s = document.querySelectorAll('button');  // since we need to apply to all the buttons same properties
s.forEach((y)=>{
y.style.cssText='background-color:black;color:white;width:10vw;height:10vw;border-radius:15px;';
y.addEventListener('click',function(){
  play(y.id,getComputerChoice(['rock','paper','scissor']));
}
)
})

