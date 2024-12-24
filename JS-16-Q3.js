// ? Qustion-3:Write a code to close message box when close button clicked :
// hint: watch help.mp4
//! answer

const box=document.querySelector(".ri-close-line");
const message=document.querySelector(".message ");
box.addEventListener("click",(event)=>{
message.style.display="none";

});