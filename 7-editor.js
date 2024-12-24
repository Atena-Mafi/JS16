/*
Look at editor.png, you should create a text editor similar to that.

- The first button removes the last letter when clicked.
- The second button deletes the entire text when clicked.
- The third button bolds the text when clicked.
- The fourth button italicizes the text when clicked.
*/

const textarea=document.querySelector("textarea");
const arrow=document.querySelector(".arrow");
const eraser=document.querySelector(".eraser");
const bold=document.querySelector(".bold");
const italic=document.querySelector(".italic");



arrow.addEventListener("click",()=>{
  let texting=textarea.value;
  textarea.value=texting.slice(0,-1);

});


eraser.addEventListener("click",(e)=>{
    textarea.value="";

});

bold.addEventListener("click",(e)=>{
if( textarea.style.fontWeight==="bold"){
 textarea.style.fontWeight="normal"

}else{
    textarea.style.fontWeight="bold";
}
});



italic.addEventListener("click",(e)=>{
    if( textarea.style.fontStyle==="italic"){
     textarea.style.fontStyle="normal"
    
    }else{
        textarea.style.fontStyle="italic";
    }
    });
    
    
