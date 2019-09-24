var score = 0; 

var title = new Title('Home Simulator'); 
var hometype = 'None';
let home = new Text('Home = ' + hometype);
let heading = new HTMLElement('h3', "Wilton's Money");
var button = new Button('Money +', btnPress);         
var upgradebutton = new Button('Upgrade Home', upgradepress);
upgradebutton.hide()
var duckbutton = new Button('Buy A Duck')
duckbutton.hide()
var scr = new Text(score);                     

setInterval(btnPress, 1000);   

function btnPress() {
  score++;         
  scr.edit(score); 
  buyduck();
  buyhome();
 
}
function buyhome(){
if (score > 49) {
  upgradebutton.show();
} else{
  upgradebutton.hide();
}
}
function buyduck(){
if (score > 99) {
  duckbutton.show();
} else{
  duckbutton.hide();
}
}
function upgradepress(){
  home.edit('Home = Apartment')

 }