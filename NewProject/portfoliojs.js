let i=0;
let opac=0
document.querySelector(".main").style.opacity=0.0;
document.querySelector(".bod").style.background=`linear-gradient(${0}deg)`;

setInterval(()=>{
    while(opac<1.0){
document.querySelector(".main").style.opacity=opac;
opac=opac+0.001;
    }
},1000);
setInterval(()=>{
    document.querySelector(".bod").style.background=`linear-gradient(${i}deg,red,cyan)`;



    i=(i+5)%360;
}
,150);
let n1="MOHAMMED";
let n2="SAMEER"
let k=0;
let l=0;
new Promise((resolve)=>{
setInterval(async()=>{
if(k<n1.length){
document.querySelector(".name").innerText=document.querySelector(".name").innerText+n1[k]+"|";
document.querySelector(".name").innerText=document.querySelector(".name").innerText.replace("|","");
k++;
}
else{
    resolve();
}
},400);
}).then(()=>{
setInterval(()=>{
if(l<n2.length){
document.querySelector(".name2").innerText=document.querySelector(".name2").innerText+n2[l];
l++;
}
},400);
})

let html=document.querySelector(".t1");
html.addEventListener('click',()=>{
    document.querySelector(".main").style.background="yellow";
})
document.querySelector(".t2").addEventListener('click',()=>{
    document.querySelector(".main").style.background="black";
    
})
document.querySelector(".t3").addEventListener('click',()=>{
    document.querySelector(".main").style.background="green";
    
})


document.querySelector(".profile_div").addEventListener("mouseenter",()=>{
    document.querySelector(".profile_div").classList.add("profile_two");
    setTimeout(()=>{
    document.querySelector(".profile_div h1").innerText="Full Stack Developer";

    },350);
})

document.querySelector(".profile_div").addEventListener("mouseleave",()=>{
    document.querySelector(".profile_div").classList.remove("profile_two");
    document.querySelector(".profile_div h1").innerText="";

})