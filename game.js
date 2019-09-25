var score = 0; 

var title = new Title('Home Simulator'); 
var hometype = 'None';
let home = new Text('Home = ' + hometype);
let heading = new HTMLElement('h3', "Wilton's Money");
var button = new Button('Money +', btnPress);         
var upgradebutton = new Button('Upgrade To Apartment', upgradepress);
upgradebutton.hide()
var upgradebutton2 = new Button('Upgrade To House', upgradepress2);
upgradebutton2.hide()
var upgradebutton3 = new Button('Upgrade To Mansion', upgradepress3);
upgradebutton3.hide()
var duckbutton = new Button('Buy A Duck')
duckbutton.hide()
var scr = new Text(score);                     

setInterval(btnPress, 1000);   

function btnPress() { //makes score go up
  score++;         
  scr.edit(score); 
  buyduck();
  buyhomea();
  buyhomeb();
  buyhomec();
}
function buyhomea(){    //makes a button that lets you buy an apartment
if (score > 49) {
  upgradebutton.show();

}
}
function buyhomeb(){         //makes a button that lets you buy an house
  if (score > 300) {
    upgradebutton2.show();

  }
  }
  function buyhomec(){            //makes a button that lets you buy an mansion
    if (score > 1000) {
      upgradebutton3.show();
    }
    }

function upgradepress(){
  home.edit('Home = Apartment')
score = score - 50;
 }
 
 function upgradepress2(){
  home.edit('Home = House')
score = score - 300;
 }
 
 function upgradepress3(){
  home.edit('Home = Mansion')
score = score - 1000;
 }
 
 function buyduck(){
  if (score > 99) {
    duckbutton.show();
  } else{
    duckbutton.hide();
  }
  }
 function duckpress(){

 }