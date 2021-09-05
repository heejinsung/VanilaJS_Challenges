const images = [
  "0.jpeg",
  "1.jpeg",
  "2.jpeg"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");



bgImage.src = `img/${chosenImage}`;
//console.log(bgImage);
// <img src = "img/2.jpeg">
// javascript에서 HTML element를 생성

document.body.prepend(bgImage);
// appendChild()는 body에 html을 추가
// append사용해서 제일 마지막에  들어감.
// prepend 사용하면 이미지가 가장 위에 들어감!

