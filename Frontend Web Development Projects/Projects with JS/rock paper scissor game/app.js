// let choices = document.getElementsByClassName("choice");
// let display = document.getElementById("msg");
// let userscore = document.getElementById("user");
// let compscore = document.getElementById("comp");
// let show=document.getElementById("showchoice")
// choices = Array.from(choices);

// let getcomputerchoice = () => {
//   let arr = [rock, paper, scissors];
//   let compchoice = arr[Math.floor(Math.random() * 3)].id;
//   console.log(compchoice);
//   return compchoice;
// };

// choices.forEach((choice) => {
//   choice.addEventListener("click", (e) => {
//     userchoice = e.target.parentElement.id;
//     compchoice = getcomputerchoice();
//     show.innerHTML="Computer chose "+compchoice;
//     if (userchoice == compchoice) {
//       // console.log("draw")
//       display.innerHTML = "Draw... Play again";
//       display.style.backgroundColor = "#081b31";
//     } else if (userchoice == "paper" && compchoice == "rock") {
//       // console.log("user wins");
//       display.innerHTML = "User wins! Play again";
//       display.style.backgroundColor = "green";
//       userscore.innerText++;
//     } else if (userchoice == "paper" && compchoice == "scissors") {
//       // console.log("comp wins");
//       display.innerHTML = "Comp wins. Play again";
//       display.style.backgroundColor = "red";
//       compscore.innerText++;
//     } else if (userchoice == "rock" && compchoice == "paper") {
//       // console.log("comp wins");
//       display.innerHTML = "Comp wins. Play again";
//       display.style.backgroundColor = "red";
//       compscore.innerText++;
//     } else if (userchoice == "rock" && compchoice == "scissors") {
//       // console.log("user wins");
//       display.innerHTML = "User wins! Play again";
//       display.style.backgroundColor = "green";
//       userscore.innerText++;
//     } else if (userchoice == "scissors" && compchoice == "paper") {
//       // console.log("user wins");
//       display.innerHTML = "User wins! Play again";
//       display.style.backgroundColor = "green";
//       userscore.innerText++;
//     } else if (userchoice == "scissors" && compchoice == "rock") {
//       // console.log("comp wins");
//       display.innerHTML = "Comp wins. Play again";
//       display.style.backgroundColor = "red";
//       compscore.innerText++;
//     }
//   });
// });
// display.addEventListener("click", (e) => {
//   userscore.innerText = 0;
//   compscore.innerText = 0;
//   display.innerHTML = "Play your move!";
//   display.style.backgroundColor = "#081b31";
// });

let result = document.querySelector("#msg");
let showchoice = document.querySelector("#showchoice");
let userscore = document.querySelector("#user");
let compscore = document.querySelector("#comp");
let userchoice = document.querySelectorAll(".choice");

let user;

userchoice.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    user = choice.getAttribute("id");
    console.log("userchoice = " + user);

    let compchoicearr = [rock, paper, scissors];
    let comp = compchoicearr[Math.floor(Math.random() * 3)].getAttribute("id");
    console.log("compchoice = " + comp);

    if (user === comp) {
      draw();
    } else if (user == "rock") {
      if (comp == "paper") {
        compwins();
      } else if (comp == "scissors") {
        userwins();
      }
    } else if (user == "paper") {
      if (comp == "scissors") {
        compwins();
      } else if (comp == "rock") {
        userwins();
      }
    } else {
      if (comp == "rock") {
        compwins();
      } else if (comp == "paper") {
        userwins();
      }
    }
    showchoicefun = () => {
      showchoice.innerHTML = `User chose ${user} <br> Computer chose ${comp}`;
    };
    showchoicefun();
  });
});

userwins = () => {
  let score = parseInt(userscore.innerHTML);
  score++;
  userscore.innerHTML = score;
  result.innerHTML = `User Wins`;
  result.style.backgroundColor = "green";
};

compwins = () => {
  let score = parseInt(compscore.innerHTML);
  score++;
  compscore.innerHTML = score;
  result.innerHTML = `Comp Wins`;
  result.style.backgroundColor = "red";
};

function draw(){
  result.innerHTML="Draw";
}
