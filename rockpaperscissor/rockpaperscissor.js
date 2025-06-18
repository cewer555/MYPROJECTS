let count=0;
let randomnum=0;
let sysmove='';
let r=255;
let b=255;
let g=255;
let score=JSON.parse(localStorage.getItem('score'));
if (score==null){
score={
win:0,lose:0,draw:0
};

}

let autoplayy=document.querySelector(".atbut");
autoplayy.addEventListener("click",()=>{
    autoplay();
    

});

document.querySelector(".w").innerHTML=score.win;
document.querySelector(".l").innerHTML=score.lose;
document.querySelector(".d").innerHTML=score.draw;

function autoplay(){
    setInterval(function(){
        func(systemmove())
    },1000);
}
function systemmove(){
    randomnum = Math.random();

if(randomnum>=0 && randomnum<=0.25)
{
    document.getElementById("image").src="rock.jpg";
    sysmove='rock';
    return sysmove;

}
else if(randomnum>0.25 && randomnum<=0.50)
{
    document.getElementById("image").src="paper.jpg";
    sysmove='paper';
    return sysmove;
}
else if(randomnum>0.5 && randomnum<=0.75)
{
    document.getElementById("image").src="scissor.jpg";
    sysmove='scissor';
    return sysmove;
}

    
    


}
function func(mymove)
{

// randomnum = Math.random();

// if(randomnum>=0 && randomnum<=0.25)
// {
//     document.getElementById("image").src="rock.jpg";
//     sysmove='rock';

// }
// else if(randomnum>0.25 && randomnum<=0.50)
// {
//     document.getElementById("image").src="paper.jpg";
//     sysmove='paper';
// }
// else if(randomnum>0.5 && randomnum<=0.75)
// {
//     document.getElementById("image").src="scissor.jpg";
//     sysmove='scissor';
// }
if (mymove==sysmove){
    score.draw=score.draw+1;
    document.querySelector('.d').innerHTML=score.draw;
    
    
}
sysmove=systemmove();

if (mymove=='rock'){
if(sysmove=='paper'){
    score.lose=score.lose+1;
    document.querySelector('.l').innerHTML=score.lose;


}
else if(sysmove=='scissor'){
    score.win=score.win+1;
    document.querySelector('.w').innerHTML=score.win;

    
    }
}
else if (mymove=='paper'){
if(sysmove=='scissor'){
    score.lose=score.lose+1;
    document.querySelector('.l').innerHTML=score.lose;
}
else if (sysmove=='rock'){
    score.win=score.win+1;
    document.querySelector('.w').innerHTML=score.win;

    
    }
}   
if (mymove=='scissor'){
if(sysmove=='rock'){
    score.lose=score.lose+1;
    document.querySelector('.l').innerHTML=score.lose;

}
else if(sysmove=='paper'){
    score.win=score.win+1;
    document.querySelector('.w').innerHTML=score.win;
   
    
    }
}

localStorage.setItem('score',JSON.stringify(score));
console.log(score);

}

