const c = document.querySelector('.cover');
const select = document.querySelector('select');
const game = document.querySelector('.game');
var img = document.querySelectorAll('img');
var btn = document.getElementById('throw');
var compRoll;
var compshow = document.querySelector('comp-state');

//all of this are just variables that I will use in the game
//don't worry I won't hurt any of them.
var usr;
var cmptr;
var won ;

var usrPoint;
var compPoint;
var tries;


window.addEventListener('load', start);

function start() {

usrPoint = 0;
compPoint = 0;
tries = 0;
}
window.addEventListener('resize', () => {
    if (window.innerHeight > window.innerWidth) {
        c.style.display = "grid";
        game.style.display = "none";
    } else {
        c.style.display = "none";
        game.style.display = "";
    }
});

btn.addEventListener('click', thrown);
select.addEventListener('click', check);
//img.addEventListeners('click', thrown);



function thrown() {
   tries += 1;
   document.querySelector('.tries').innerText ='rolls: '+ tries;
    check()
    compute();
    win()
    declare();
    //restart()
}

function check() {
    var ro = "rock";
    var pa = "paper";
    var sc = "scissors";
   var val = select.value;
   var pic = document.getElementById('user');
   var st = document.querySelector('.state');
   var i = 'img/';
   var pn = '.png';


   if (val === ro){
    usr = 1;
      pic.src = i+"br"+pn;
      st.innerText = "rock";
   }

   if (val === pa){
     usr = 2;
     pic.src = i+"bp"+pn;
     st.innerText = "paper";
   }

   if (val === sc){
         usr = 3;
         pic.src = i+"bs"+pn;
         st.innerText = "scissors";

    }
}

function compute(){
  var pic = document.querySelector('#compImg')
   var st = document.querySelector('.comp-state');
   compRoll = Math.round(Math.random()*5+1);
   var i = 'img/';
   var pn = '.png';

   if (compRoll === 1){
      cmptr = 1;
        pic.src = i+"br"+pn;
        st.innerText = "rock";
   }

   if (compRoll === 2){
    cmptr = 2;
        pic.src = i+"bp"+pn;
        st.innerText = "paper"
   }

   if (compRoll === 3){
       cmptr = 3;
        pic.src = i+"bs"+pn;
        st.innerText = "scissors";
   }
   if (compRoll === 4){
       cmptr = 1;
        pic.src = i+"br"+pn;
        st.innerText = "rock"
   }

   if (compRoll === 5){
       cmptr = 2;
        pic.src = i+"bp"+pn;
        st.innerText = "paper"
   }

   if (compRoll === 6){
         cmptr = 3;
        pic.src = i+"bs"+pn;
        st.innerText = "scissors";
   }
}

function win() {
var us = usr;
var cm = cmptr;

if (us - cm === 1){
  won = true;
}

if (us - cm === -1){
  won = false;
}
if (us - cm > 1){
  won = false;
}
if (us - cm < -1){
  won = true;
}
if (us === cm){
  won = "draw";
}
}

function declare(msg) {
  msg = document.querySelector('.winningMessage');

   if (won){
      usrPoint += 1;
   }

    if (!won) {
      compPoint += 1;
   }
   if (won === 'draw'){
      usrPoint -= 1;
   }

 document.querySelector('.usert').innerText = "user: "+ usrPoint;
 document.querySelector('.compt').innerText = "comp: "+ compPoint;

 if (usrPoint > 3) {
   msg.innerText = ('you won');
    document.getElementById('user').style.boxShadow = "3px 3px 9px #33CC33";
   alert()
 }
 if (compPoint > 3) {
  msg.innerText = 'you lost';
  document.querySelector('#compImg').style.boxShadow = "3px 3px 9px #33CC33";
   alert()
 }
}


function alert() {
  btn.removeEventListener('click', thrown);
  var btnR = document.createElement('button');
  game.appendChild(btnR);
  btnR.innerText = "restart";
  btnR.addEventListener('click', () => {
    restart();
    btnR.parentNode.removeChild(btnR);
  })
}
function restart() {
   start();
   document.querySelector('.tries').innerText ='rolls: 0';
   document.querySelector('.usert').innerText = "user: 0";
   document.querySelector('.compt').innerText = "comp: 0";
   document.querySelector('.winningMessage').innerText = '';
 document.getElementById('user').style.boxShadow = "3px 3px 9px #000";
   document.getElementById('compImg').style.boxShadow = "3px 3px 9px #000";
   btn.addEventListener('click', thrown);
}

//hope I gave you a great Idea on what project you can do innerText
//and oh yes, this is not responsive because it never was ment to be
//ok, I tried to but it just looked bad so I decided to make it mobile great rather than on all features;
//there are more than 1000 ways I could have done this but I choose this way, try to see if you can make it better;
//follow me on twitter @bethropolis peace and stay safe!
