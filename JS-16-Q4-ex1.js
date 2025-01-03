// ? Qustion-4:Write a code that changes the background color of the stars when we click on them.
// hint: watch help.mp4
//! answer

const stars=document.querySelectorAll(".fa-star");

stars.forEach((ele)=>{


    ele.addEventListener("click",(event)=>{
     
        if(ele.style.color==="yellow"){

            ele.style.color=" #e6e6e6";

        }else{

            ele.style.color="yellow";
        }

  
        });

});
