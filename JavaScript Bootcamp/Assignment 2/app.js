const colors = ["red", "blue", "green", "yellow", "orange", "black"];
const sizes = [
  { height: 100, width: 100 },
  { height: 200, width: 200 },
  { height: 150, width: 150 },
  { height: 250, width: 250 },
];

const div = document.querySelector(".object");
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const button4 = document.querySelector("#button4");

button1.addEventListener("click", () => {
  div.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
});

button2.addEventListener("click", () => {
  console.log("helo");
  const randSize = sizes[Math.floor(Math.random() * sizes.length)];
  div.style.height = `${randSize.height}px`;
  div.style.width = `${randSize.width}px`;
  div.querySelector("img").style.height = `${randSize.height}px`;
  div.querySelector("img").style.width = `${randSize.width}px`;
});

button3.addEventListener("click", () => {
  div.innerHTML = `<img src="./cat.jpeg" alt="Cat Image">`;
  div.querySelector("img").style.height = `${div.clientHeight}px`;
  div.querySelector("img").style.width = `${div.clientWidth}px`;
});
button4.addEventListener("click", () => {
  div.innerHTML = "";
});
