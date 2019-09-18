var score = 1; // Create a variable to store the score in

postToPage(score);

createButton('Button +', btnPress);
createButton('Button -', btnPressOther);
changeTitle('Clicker Game');

setInterval(btnPress, 1000);

function btnPress() {
  score = score + 5;
  postToPage(score);
}
function btnPressOther() {
  score--;
  postToPage(score);
}
