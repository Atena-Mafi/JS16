/*
Look at puzzle.png .
it's true!
You have to design a puzzle.

- By dragging the puzzle pieces, the picture is complete.
- Watching the tutorial below will help you do it.
(https://youtu.be/vJn5_SytV_U?si=bwfi9g4lhf4BVGEl)
*/


const boxes=document.querySelectorAll(".box");
const images=document.querySelectorAll(".pics img");


let draggedPhotoSrc=null;

images.forEach((pic)=>{

pic.addEventListener("dragstart",(e)=>{

draggedPhotoSrc=e.target.src;
})

pic.addEventListener("dragend",(e)=>{

    draggedPhotoSrc=null;
    })
    

})


boxes.forEach((box)=>{
box.addEventListener("dragover",(e)=>{
e.preventDefault();
box.classList.add("hovered");

})

box.addEventListener("dragleave",(e)=>{
    box.classList.remove("hovered");

})

box.addEventListener("drop",(e)=>{
e.preventDefault();
box.classList.remove("hovered");   

if(draggedPhotoSrc){
    box.style.backgroundImage =`url(${draggedPhotoSrc})`;
    box.style.backgroundPosition = "center";
    box.style.backgroundSize = "cover";
    
    }
    

});

box.addEventListener("click",()=>{

    box.style.backgroundImage="";
})


});