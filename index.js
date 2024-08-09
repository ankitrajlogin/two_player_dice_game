

var randomnumber1 = null; 
var randomnumber2 = null; 

function player1(){
    var n=Math.random();
    n=n*6+1;
    randomnumber1=Math.floor(n);
    var newName="./images/dice"+randomnumber1+".png";
    var imagea=document.querySelector(".img1");
    console.log(randomnumber1) ; 
    imagea.setAttribute("src",newName);

    finalshow()
}


function player2(){
    var m=Math.random();
    m=m*6+1;
    randomnumber2=Math.floor(m);
    var newName2="./images/dice"+randomnumber2+".png";
    var imageb=document.querySelector(".img2");
    imageb.setAttribute("src",newName2);

    finalshow()

}

function finalshow(){

    if(randomnumber1 == null || randomnumber2 == null){
        return ; 
    }
    var h1=document.querySelector("h1");
    
    if(randomnumber1>randomnumber2)
    {
            var s="Player 1 wins!";
            console.log("1 winner") ; 
    }
    else if(randomnumber1<randomnumber2)
    {
        var s="Player 2 wins!";
        console.log("2 winner") ; 
    }
    else{
        var s="Draw!";
        console.log("draw") ; 
    }
            
    h1.innerHTML=s;
    

}




