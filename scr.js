function getComputerChoice(a) {
  return a[Math.floor(Math.random()*a.length)];
}
let u_score = 0;
let c_score = 0;
function play(playerselection,compselection) {
  a = playerselection.toLowerCase();
  b = compselection.toLowerCase();
  firstclk=true;
  console.log(u_score,c_score);
    if (a == "rock"){
      if (b == "paper") {
        u_score+=1;
      }else{
        c_score+=1;
      }
    }
    if (a == "paper"){
      if (b == "scissor") {
        u_score+=1;
      }else{
        c_score+=1;
      }
    }
    if (a == "scissor"){
      if (b == "rock") {
        u_score+=1;
      }else{
        c_score+=1;
      }
    }
  
}
firstclk = false;

s = document.querySelectorAll('button');  // since we need to apply to all the buttons same properties
s.forEach((y)=>{


y.style.cssText='background-color:black;color:white;width:10vw;height:10vw;border-radius:15px;';
y.addEventListener('click',function(){
  play(y.id,getComputerChoice(['rock','paper','scissor']));
  b = document.querySelector('#hello');
  c = document.querySelector('body');
  ref = document.querySelector('#rock');
  if (firstclk) {
    //console.log(b)
    c.removeChild(b);
    const neww = document.createElement('div');
    neww.setAttribute('id','hello');
    neww.innerHTML = `Current User Score: ${u_score} <br> Current Computer Score: ${c_score}` ;

    c.insertBefore(neww,ref);
}

})})


