// let input = document.getElementById("inputBox");
// let buttons= document.querySelectorAll(".button");
// let operators=document.querySelectorAll("operator");

// let string="";
// buttons.forEach(button=>{
//     button.addEventListener("click",e=>{
//         if(button.textContent=="=")
//          try{string=eval(string);
//             input.value=string;
//         }
//          catch{
//             input.value="ERROR"
//             string=""
//         }
//         else if(button.textContent=="AC"){
//             string=""
//             input.value=string
//         }
//         else if(button.textContent=="DEL"){
//             string=string.slice(0,-1)
//             input.value=string
//         }
//         else{
//         string=string+button.textContent
//         input.value=string}
//     })
// })

let display = document.querySelector("#inputBox");
let buttons = document.querySelectorAll(".button");

let show = "";

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if(button.textContent=="="){
        show=eval(show);
        display.value=show;
    }
    else if(button.textContent=="AC"){
        show="";
        display.value=show;
    }
    else if(button.textContent=="DEL"){
        show=show.slice(0,-1)
        display.value=show;
    }
    else{
    show=show+button.textContent;
    display.value=show;
  }});
});
