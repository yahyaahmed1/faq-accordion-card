let according = document.querySelectorAll(".according");
let question = document.querySelectorAll(".question");
let answer = document.querySelectorAll(".answer");
let arrow = document.querySelectorAll(".arrow");
// console.log(according);


according.forEach(e => {
  e.addEventListener("click", function () {
    for (let i = 0; i < according.length; i++) {
      if (according[i] == e) {
        // console.log(according[i]);
        according[i].classList.toggle("active");
        answer[i].classList.toggle("show");
        arrow[i].classList.toggle("up");
        question[i].classList.toggle("bold");
      } else {
        // console.log('error');
        according[i].classList.remove("active");
        answer[i].classList.remove("show");
        arrow[i].classList.remove("up");
        question[i].classList.remove("bold");
      }
    }
  });
});


// for (let i = 0; i < question.length; i++) {
//   according[i].onclick = function () {
//     according[i].classList.toggle("active");
//     answer[i].classList.toggle("show");
//     arrow[i].classList.toggle("up");
//     question[i].classList.toggle("bold");
//   };
// };
