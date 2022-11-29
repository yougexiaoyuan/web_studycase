//有个校园-兴趣编程
const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
  const btn = question.querySelector(".question-btn");

  btn.addEventListener("click", function () {
    question.classList.toggle("show-text");
  });
});

