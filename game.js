var score = 0; 

var title = new Title('Home Simulator'); 
var hometype = 'None';
let home = new Text('Home = ' + hometype);
let heading = new HTMLElement('h3', "Wilton's Money");
var button = new Button('Money +', btnPress);         
var upgradebutton = new Button('Upgrade Home');
upgradebutton.hide()
var scr = new Text(score);                     

setInterval(btnPress, 1000);   

function btnPress() {
  score++;         
  scr.edit(score); 
}
function upgradehome(){
if (score > 50) {
  upgradebutton.show();
}
}