const USER = "Елена";

const PASS = "2407";

function login(){

let user=document.getElementById("username").value;

let pass=document.getElementById("password").value;

if(user===USER && pass===PASS){

document.getElementById("login").style.display="none";

document.getElementById("card").style.display="block";

document.getElementById("music").play();

}else{

document.getElementById("error").innerHTML="Неверный логин или пароль";

}

}

function logout(){

document.getElementById("card").style.display="none";

document.getElementById("login").style.display="block";

let music=document.getElementById("music");

music.pause();

music.currentTime=0;

}

setInterval(()=>{

const heart=document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="fixed";

heart.style.left=Math.random()*100+"vw";

heart.style.top="100vh";

heart.style.fontSize=(20+Math.random()*35)+"px";

heart.style.transition="6s linear";

heart.style.pointerEvents="none";

document.body.appendChild(heart);

setTimeout(()=>{

heart.style.transform="translateY(-120vh)";

heart.style.opacity="0";

},50);

setTimeout(()=>{

heart.remove();

},6000);

},300);
