var shape = "yup";
function cross(){
    if(shape == "yup"){
        document.getElementById("cross").innerHTML = "chosen";
        shape = "cross"
        document.getElementById("cho").innerHTML = "your chosen shape is cross";
    }
    else{
        document.getElementById("cross").innerHTML = "chosen";
        document.getElementById("circle").innerHTML = "cicle";
        shape = "cross"
        document.getElementById("cho").innerHTML = "your chosen shape is cross";
    }
}
function circle(){
    if(shape=="yup"){
        document.getElementById("circle").innerHTML = "chosen";
        shape =  "circle"
        document.getElementById("cho").innerHTML = "your chosen shape is circle";
    }
    else{
        document.getElementById("circle").innerHTML = "chosen";
        document.getElementById("cross").innerHTML = "cross";
        shape  = "circle"
        document.getElementById("cho").innerHTML = "your chosen shape is circle";
    }
}
function fun(){  
    document.getElementById("mygame").reset();  
  }
var user;
function show(id){
    if(shape =="cross"){
        document.getElementById(id).innerHTML = "X";
        user = "cross";
    }
    else if(shape == "circle"){
        document.getElementById(id).innerHTML="O";
        user = "circle";
    }
    pattern();
    play_computer();
}

function run(){
    document.getElementById("demo").innerHTML = Math.floor(Math.random() * 10);
}

function pattern(){
    var A, B, C, D, E, F, G, H, I;
    A = document.getElementById("a").innerHTML;
    B = document.getElementById("b").innerHTML;
    C = document.getElementById("c").innerHTML;
    D = document.getElementById("d").innerHTML;
    E = document.getElementById("e").innerHTML;
    F = document.getElementById("f").innerHTML;
    G = document.getElementById("g").innerHTML;
    H = document.getElementById("h").innerHTML;
    I = document.getElementById("i").innerHTML;

   if((A=="X"&&B=="X"&&C=="X")||(D=="X"&&E=="X"&&F=="X")||(G=="X"&&H=="X"&&I=="X")||(A=="X"&&D=="X"&&G=="X")||(B=="X"&&E=="X"&&H=="X")||(C=="X"&&F=="X"&&I=="X")||(A=="X"&&E=="X"&&I=="X")){
        alert("Player-X Won the game");
        document.getElementById("mygame").reset();
    }
    if((A=="O"&&B=="O"&&C=="O")||(D=="O"&&E=="O"&&F=="O")||(G=="O"&&H=="O"&&I=="O")||(A=="O"&&D=="O"&&G=="O")||(B=="O"&&E=="O"&&H=="O")||(C=="O"&&F=="O"&&I=="O")||(A=="O"&&E=="O"&&I=="O")){
        alert("Playere-O Won the game");
        document.getElementById("mygame").reset();
    }
}

function computer(){
    var ai = [];
    var n;
    var put;
    ai[1] = "a";
    ai[2] = "b";
    ai[3] = "c";
    ai[4] = "d";
    ai[5] = "e";
    ai[6] = "f";
    ai[7] = "g";
    ai[8] = "h";
    ai[9] = "i";
    n = Math.floor(Math.random()*10);
    put = ai[n];
    return put;
}

function play_computer(){
    z = computer();
    if(user == "cross"){
        while(document.getElementById(z)=="X"){
          z = computer();
        }
        if(document.getElementById(z) != "X"){
            document.getElementById(z).innerHTML = "O";
        }
    }
    if(user == "circle"){
        while(document.getElementById(z)=="O"){
            z = computer();
        }
        if(document.getElementById(z) != "O"){
            document.getElementById(z).innerHTML = "X";
        }
    }
    
}