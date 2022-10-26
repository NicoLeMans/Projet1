//index//
const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu");

burger.addEventListener("click", () => {
  menu.classList.toggle("menu");
});

const btn = document.querySelector("button");
const text = document.querySelector(".text");

btn.addEventListener("click", () => {
  text.classList.toggle("visible");
});

//TT//
const btn2 =document.querySelector("button");
const texte = document.querySelector(".texte");

btn2.addEventListener("click",() => {
  texte.classList.toggle("open");
});