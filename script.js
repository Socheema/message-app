let message = document.querySelector(".message");
let button = document.querySelector("#submitbtn");
let feedback = document.querySelector(".feedback");
let messageReceived = document.querySelector(".sentMessage");
let deleteBtn = document.querySelector(".delete");
let body = document.querySelector("body");
console.log(body);

button.addEventListener("click", function (e) {
  e.preventDefault();
  let content = message.value;
  if (content === "") {
    feedback.style.display = "block";
    setTimeout(function () {
      feedback.style.display = "none";
    }, 2000);
  } else {
    messageReceived.innerHTML = message.value;
    message.value = "";
    let arrayOfColor = [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
    ];

    button.addEventListener("click", runEvent);
    function runEvent() {
      let hexColor = "#";
      for (let i = 0; i < 6; i++) {
        let container = Math.floor(Math.random() * arrayOfColor.length);
        hexColor += arrayOfColor[container];
        body.style.backgroundColor = hexColor;
      }
    }
  }
});
message.addEventListener("click", function () {
  deleteBtn.style.display = "block";
});

deleteBtn.addEventListener("click", function () {
  message.value = "";
});

message.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    messageReceived.innerHTML = message.value;
    message.value = "";
  }
});

