
const sectionIText=document.querySelectorAll(".section-i-text p")
const sectionITextDiv=document.querySelector(".section-i-text");
const sectionILayer=document.querySelector(".text-layer");
const imgI=document.querySelector(".img-i");
const imgII=document.querySelector(".img-ii");
const imgDiv=document.querySelector(".section-i-img-div");
const logo=document.querySelector("#logo");
const sectionI=document.querySelector("#section-i");
const typer=document.querySelector(".typeWrite");
const infoLayer=document.querySelector(".section-ii-info-layer");
const info=document.querySelector(".section-ii-info");
const prog=document.querySelector(".section-ii-prog");
const progLayer=document.querySelector(".section-ii-prog-layer");
const progColor=document.querySelectorAll(".bar-color");
const sectionII=document.querySelector("#section-ii");

window.addEventListener("load",()=>{
    
    
    const textTl=gsap.timeline({
    
    defaults:{duration:1,ease:"power2.inout"}
});

window.scrollTo(0,0);
var typed = new Typed('.element', {
  strings: ["Design.", "Develop."],
    loopCount: Infinity,
    loop:true,
    backDelay: 500,
      backSpeed: 100,
  typeSpeed: 200
});
textTl.fromTo(sectionIText[0],{x:"-30%",scale:2,opacity:0},{x:"0%",scale:1,opacity:1});
textTl.fromTo(sectionIText[1],{x:"-30%",scale:2,opacity:0},{x:"0%",scale:1,opacity:1},"-=0.7");
textTl.fromTo(sectionIText[2],{x:"-30%",scale:2,opacity:0},{x:"0%",scale:1,opacity:1},"-=0.7");
textTl.fromTo(sectionIText[3],{x:"-30%",scale:2,opacity:0},{x:"0%",scale:1,opacity:1},"-=0.7");
textTl.fromTo(sectionIText[4],{x:"-30%",scale:2,opacity:0},{x:"0%",scale:1,opacity:1},"-=0.7");
textTl.fromTo(sectionIText[5],{x:"-30%",scale:2,opacity:0},{x:"0%",scale:1,opacity:1},"-=0.7");
textTl.fromTo(sectionIText[6],{x:"-30%",scale:2,opacity:0},{x:"0%",scale:1,opacity:1},"-=0.7");
textTl.fromTo(sectionIText[7],{x:"-30%",scale:2,opacity:0},{x:"0%",scale:1,opacity:1},"-=0.7");
textTl.fromTo(sectionIText[8],{x:"-30%",scale:2,opacity:0},{x:"0%",scale:1,opacity:1},"-=0.7");    
 
});


window.addEventListener("load",()=>{
    
    
    const imgTl=gsap.timeline({
    
    defaults:{duration:1,ease:"power2.inout"}
});

   
imgTl.fromTo(imgI,2,{y:"20%"},{y:"0%"});
imgTl.fromTo(imgII,2,{y:"-20%"},{y:"0%"},"-=2");  
imgTl.fromTo(imgI,2,{rotateX:"0%"},{rotateX:"30%",y:"20%"});
imgTl.fromTo(imgII,2,{rotateX:"0%"},{rotateX:"30%",y:"20%"},"-=2");
imgTl.fromTo(typer,2,{opacity:0,y:"-20%"},{opacity:1,y:"0%"},"-=2");
});




let cursor=document.querySelector(".cursor");
sectionITextDiv.addEventListener("mousemove",moveCursor);
function moveCursor(e)
{
    cursor.style.top=e.pageY +'px';
    cursor.style.left=e.pageX +'px';
}


sectionITextDiv.addEventListener("mouseover",()=>{
    
       const layerTl=gsap.timeline({
    
    defaults:{duration:1,ease:"power0"}
       });
    
    layerTl.to(sectionILayer,2,{y:"0%"});
    
    
    

});

sectionITextDiv.addEventListener("mouseout",()=>{
    
       const layerTl=gsap.timeline({
    
    defaults:{duration:1,ease:"power2"}
       });
    
    layerTl.to(sectionILayer,2,{y:"-100%"});
    cursor.style.left="-100px";

});


//home scroll
let controller;
let scene;
function ScrollAnimation()
{
    
    
    controller=new ScrollMagic.Controller();
    
       const scrollTl=gsap.timeline({
    
    defaults:{duration:1,ease:"power2.inout"}
});
     scrollTl.fromTo(sectionI,2,{scale:1},{scale:0});
    scrollTl.fromTo(sectionIText,{y:"0%"},{y:"-1500%"},"-=1.3");
    scrollTl.fromTo(imgDiv,{y:"0%"},{y:"-100%"},"-=1.3");
     scrollTl.fromTo(logo,{y:"0%"},{y:"-500%"},"-=1.3");
    scrollTl.fromTo(typer,{y:"0%"},{y:"-1000%"},"-=1.3");
     scene=new ScrollMagic.Scene({
         
          triggerElement: sectionI,
        duration:"100%",
            triggerHook: 0
            
         
     })
      
     .setPin(sectionI,{pushFollowers:false})
    .setTween(scrollTl)
      .addTo(controller);
    
}


ScrollAnimation();




//page2



let scene2;

function page2Scroll()
{
    
   controller=new ScrollMagic.Controller();
    
    const page2Tl=gsap.timeline({
        
        
        defaults:{duration:2,ease:"power2.inout"}
    });
    
   
    page2Tl.fromTo(infoLayer,{x:"0%"},{x:"100%"});
     page2Tl.fromTo(info,{opacity:0},{opacity:1},"-=1.7");
     page2Tl.fromTo(progLayer,{x:"0%"},{x:"100%"},"-=2");
       page2Tl.fromTo(progColor[0],{width:"0%"},{width:"400px"},"-=0.3"); 
     page2Tl.fromTo(progColor[1],{width:"0%"},{width:"380px"},"-=1.8");
     page2Tl.fromTo(progColor[2],{width:"0%"},{width:"350px"},"-=1.5");
     page2Tl.fromTo(progColor[3],{width:"0%"},{width:"250px"},"-=1.2");
     page2Tl.fromTo(progColor[4],{width:"0%"},{width:"300px"},"-=0.9");
    
    
    scene2=new ScrollMagic.Scene({
        
         triggerElement: sectionII,
       
            triggerHook: 0.3
    })
     
    .setTween(page2Tl)
    .addTo(controller);
}


page2Scroll();


//page2ScrollAnimation

let scene3;
function ScrollAnimation2()
{
    
    
    controller=new ScrollMagic.Controller();
    
       const scrollIITl=gsap.timeline({
    
    defaults:{duration:1,ease:"power2.inout"}
});
     
    scrollIITl.fromTo(sectionII,2,{scale:1},{scale:0});
    scrollIITl.fromTo(info,{y:"0%"},{y:"-300%"},"-=1.3");
    scrollIITl.fromTo(prog,{y:"0%"},{y:"-300%"},"-=1.3");
     scene3=new ScrollMagic.Scene({
         
          triggerElement: sectionII,
        duration:"100%",
            triggerHook: 0
            
         
     })
      
     .setPin(sectionII,{pushFollowers:false})
    .setTween(scrollIITl)
      .addTo(controller);
    
}


ScrollAnimation2();



//section3
const galleryH2=document.querySelector("#section-iii h2");
const sectionIII=document.querySelector("#section-iii");
const galleryImg=document.querySelectorAll(".gallery-img");
const gallerySvg=document.querySelectorAll(".gallery-svg");

let scene4;
let scene5;
function gallery()
{
    
    controller=new ScrollMagic.Controller();
   const h2Tl=new gsap.timeline({
       
     defaults: {duration:1,ease:"power2.inout"}
       
   });
    
    
   h2Tl.fromTo(galleryH2,{opacity:0,y:"-100%"},{opacity:1,y:"0%"}) ;
    
  
   scene4=new ScrollMagic.Scene({
         
          triggerElement: sectionIII,
            triggerHook: 0.3
            
         
     })
      
     
    .setTween(h2Tl)
      .addTo(controller);  
    
    //next animation
    
    const galleryTl=new gsap.timeline({
       
     defaults: {duration:1,ease:"power2.inout"}
       
   });
    
   
    galleryTl.fromTo(galleryImg[0],{scale:0.5,x:"-100%"},{scale:1,x:"0%"});
       galleryTl.fromTo(galleryImg[1],{scale:0.5,x:"100%"},{scale:1,x:"0%"},"-=1");
    galleryTl.fromTo(sectionIII,2,{scale:1},{scale:0},"+=1");
   
   
    
    scene5=new ScrollMagic.Scene({
        
           triggerElement: sectionIII,
        duration:"100%",
            triggerHook: 0
        
    })
    
    .setPin(sectionIII,{pushFollowers:false})
    .setTween(galleryTl)
      .addTo(controller);
    
    
    
    
}

gallery();

//gallery-ii






const sectionIIII=document.querySelector("#section-iiii");
const galleryImgI=document.querySelectorAll(".gallery-img-i");
const grabSvg=document.querySelectorAll(".grab-svg");

let scene6;

function galleryI()
{
    
    controller=new ScrollMagic.Controller();
   
    
    
    
    const galleryITl=new gsap.timeline({
       
     defaults: {duration:1,ease:"power2.inout"}
       
   });
    
   
    galleryITl.fromTo(galleryImgI[0],{scale:0.5,x:"-100%"},{scale:1,x:"0%"});
       galleryITl.fromTo(galleryImgI[1],{scale:0.5,x:"100%"},{scale:1,x:"0%"},"-=1");
    
    
    scene6=new ScrollMagic.Scene({
        
           triggerElement: sectionIIII,
        duration:"100%",
            triggerHook: 0
        
    })
    
    .setPin(sectionIIII)
    .setTween(galleryITl)
      .addTo(controller);
    
    
    
    
}

galleryI();






window.addEventListener("scroll",()=>{
             
   
 let x= sectionIII.getBoundingClientRect().top;

         if(x<=120)
             {
                 gallerySvg[0].classList.add("drawSvg");
                  gallerySvg[1].classList.add("drawSvg");
             }
    else
        {
           gallerySvg[0].classList.remove("drawSvg"); 
            gallerySvg[1].classList.remove("drawSvg"); 
        }
});

window.addEventListener("scroll",()=>{
             
   
 let x= sectionIIII.getBoundingClientRect().top;

         if(x<=120)
             {
                 grabSvg[0].classList.add("drawSvg-i");
                  grabSvg[1].classList.add("drawSvg-i");
             }
    else
        {
           grabSvg[0].classList.remove("drawSvg-i"); 
            grabSvg[1].classList.remove("drawSvg-i"); 
        }
});






  
const imgHovering=document.querySelectorAll("#section-iii img");
const moveTopLeft=document.querySelector(".move-top-left");
const moveTopRight=document.querySelector(".move-top-right");
const moveBotLeft=document.querySelector(".move-bot-left");
const moveBotRight=document.querySelector(".move-bot-right");
let xValue=0;
let yValue=0;
moveTopLeft.addEventListener("mousemove",(e)=>{
    
    imghoverTl=new gsap.timeline({
        defaults: {duration:0.4,ease:"power2.inout"}
        
    });
   let x=(e.movementX);
   xValue=(moveTopRight.getBoundingClientRect().left-e.clientX)/10;
   if(Math.sign(x)==1)
       {
          xValue=xValue-=0.1;
          
         
       }
       else if(Math.sign(x)==-1)
       {
             xValue=xValue+=0.1;
            
       }
    
   let y=(e.movementY);
  yValue=-(moveBotLeft.getBoundingClientRect().top-e.clientY)/10;
   if(Math.sign(y)==1)
       {
           
         yValue=yValue-=0.1;
        
       }
       else if(Math.sign(y)==-1)
       {
               yValue=yValue+=0.1;
        
       }
            
  imghoverTl.to(imgHovering[0],{rotateY:-xValue+"deg",rotateX:-yValue+"deg",boxShadow:"7px 7px 12px black",scale:0.9});
});

//

moveTopRight.addEventListener("mousemove",(e)=>{
    
    imghoverTl=new gsap.timeline({
        defaults: {duration:0.4,ease:"power2.inout"}
        
    });
   let x=(e.movementX);
   xValue=(moveTopLeft.getBoundingClientRect().right-e.clientX)/10;
   if(Math.sign(x)==1)
       {
          xValue=xValue-=0.1;
         
       }
       else if(Math.sign(x)==-1)
       {
             xValue=xValue+=0.1;
          
           
       }
    
   let y=(e.movementY);
  yValue=-(moveBotRight.getBoundingClientRect().top-e.clientY)/10;
   if(Math.sign(y)==1)
       {
           
         yValue=yValue-=0.1;
           
       }
       else if(Math.sign(y)==-1)
       {
               yValue=yValue+=0.1;
       }
            
  imghoverTl.to(imgHovering[0],{rotateY:-xValue+"deg",rotateX:-yValue+"deg",boxShadow:"7px 7px 12px black",scale:0.9});
  
});
//

moveBotLeft.addEventListener("mousemove",(e)=>{
    
    imghoverTl=new gsap.timeline({
        defaults: {duration:0.4,ease:"power2.inout"}
        
    });
   let x=(e.movementX);
   xValue=(moveBotRight.getBoundingClientRect().left-e.clientX)/10;
   if(Math.sign(x)==1)
       {
          xValue=xValue-=0.1;
        
         
       }
       else if(Math.sign(x)==-1)
       {
             xValue=xValue+=0.1;
            
           
       }
    
     
   let y=(e.movementY);
  yValue=-(moveTopRight.getBoundingClientRect().bottom-e.clientY)/5;
   
    
   if(Math.sign(y)==1)
       {
           
         yValue=yValue-=0.1;
        
       }
       else if(Math.sign(y)==-1)
       {
               yValue=yValue+=0.1;
            
       }
  imghoverTl.to(imgHovering[0],{rotateY:-xValue+"deg",rotateX:yValue+"deg",boxShadow:"7px 7px 12px black",scale:0.9});
  
});

//

moveBotRight.addEventListener("mousemove",(e)=>{
    
    imghoverTl=new gsap.timeline({
        defaults: {duration:0.4,ease:"power2.inout"}
        
    });
   let x=(e.movementX);
   xValue=(moveBotLeft.getBoundingClientRect().right-e.clientX)/10;
   if(Math.sign(x)==1)
       {
          xValue=xValue-=0.1;
        
         
       }
       else if(Math.sign(x)==-1)
       {
             xValue=xValue+=0.1;
          
            
       }
    
    
    let y=(e.movementY);
  yValue=-(moveTopRight.getBoundingClientRect().top-e.clientY)/10;
   if(Math.sign(y)==1)
       {
           
         yValue=yValue-=0.1;
        
       }
       else if(Math.sign(y)==-1)
       {
               yValue=yValue+=0.1;
        
       }
          
  imghoverTl.to(imgHovering[0],{rotateY:-xValue+"deg",rotateX:yValue+"deg",boxShadow:"7px 7px 12px black",scale:0.9});
 
});


const galleryDiv=document.querySelectorAll(".gallery-div");

galleryDiv[0].addEventListener("mouseout",()=>{
    
       const mouseOutTl=gsap.timeline({
    
    defaults:{duration:1,ease:"power2"}
       });
    
    
  mouseOutTl.to(imgHovering[0],{rotateY:0,rotateX:0,boxShadow:"0px 0px 0px black",scale:1});
});




