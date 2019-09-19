var score = 1; // Create a variable to store the score in
                 
let button = new Button('BOOM!'); 
button.hide()

postToPage(score);
createButton('Button +', btnPress);
createButton('Button -', btnPressOther);

setInterval(scoreIncrease, 1000);
setInterval(btnPress, 1000);

function btnPress() {
  score = score + 5;
  postToPage(score);
}
function btnPressOther() {
  score--;
  postToPage(score);                 
}
function button2() {
  score = 0;
  
}
function scoreIncrease() {
  score++;                       

  if(score > 10) {
    button.show();               
  }
}