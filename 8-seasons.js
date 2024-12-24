/*
? Look at seasons.png , design something similar to it.
? By clicking on each circle, the page background and text should change 
todo1: The background should be similar to the background of clicked circle
((#FFADE6, #F169E8), (#90F8A7, #4DAF5D), (#CDFFD8, #94B9FF), (#FFDE59, #FF914D))
hint: use linear-gradient style for creating a background with two colors
todo2:  The text should be the name of the clicked circle season

*/

const body=document.querySelector("body");
const spring=document.querySelector(".spring");
const summer=document.querySelector(".summer");
const winter=document.querySelector(".winter");
const  fall=document.querySelector(".fall");
const seasons=document.querySelectorAll(".seasons img")
const text=document.querySelector("h2");

 seasons.forEach(function(ele) {
    
   ele.addEventListener("click",(e)=>{

        body.style.background=window.getComputedStyle(e.target).background;
    
        if(ele.classList.contains("spring")){
        text.textContent=   "spring";
        }else if(ele.classList.contains("fall")){
            text.textContent= "fall";

        }else if(ele.classList.contains("summer")){
            text.textContent=   "summer";
            
        }else if(ele.classList.contains("winter")){

            text.textContent=  "winter";
        }

        });
        
});



