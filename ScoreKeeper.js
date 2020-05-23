var p1button=document.querySelector("#player1");
var p2button=document.querySelector("#player2");
var resetbutton=document.getElementById("reset");
var numinput=document.querySelector("input");
var winningscoredisplay=document.querySelector("p span")
var span1=document.querySelector("#sp1");
var span2=document.querySelector("#sp2");

var p1score=0;
var p2score=0;
var gameover=false;
var winningscore=5;




p1button.addEventListener("click",function(){
    if(!gameover)
    {
     p1score++;
    }
    if(p1score===winningscore)
    {
        span1.classList.add("winner");
        span1.textContent=p1score;
        gameover=true;
    }
    span1.textContent=p1score;
});
p2button.addEventListener("click",function(){
    if(!gameover)
    {
     p2score++;
    }
    if(p2score===winningscore)
    {
        span2.classList.add("winner");
        span2.textContent=p2score;
        gameover=true;
    }
    span2.textContent=p2score;
});

resetbutton.addEventListener("click",function(){
  
reset();

});
function reset()
{
    p1score=0;
    p2score=0;
    span1.textContent=0;
    span2.textContent=0;
    span1.classList.remove("winner");
    span2.classList.remove("winner");
    gameover=false;
    
}

numinput.addEventListener("change",function()
{
winningscoredisplay.textContent=numinput.value;
winningscore=Number(numinput.value);
reset();
});