//有个小院-兴趣编程
const testimonials = [
  {
    name: "有个小院",
    photoUrl:
      "logo2.jpg",
    text: "欢迎来到我的小院",
  },
  {
    name: "小院里的霍大侠",
    photoUrl:
      "logo.png",
    text: "每天学习一点点，让你不再枯燥，不再孤单",
  }
];
const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const usernameEl = document.querySelector(".username");
let idx = 0;
updateTestimonial();
function updateTestimonial() {
  const { name, photoUrl, text } = testimonials[idx];
  imgEl.src = photoUrl;
  textEl.innerText = text;
  usernameEl.innerText = name;
  idx++;
  if (idx === testimonials.length) {
    idx = 0;
  }
  setTimeout(() => {
    updateTestimonial();
  }, 3000);
}