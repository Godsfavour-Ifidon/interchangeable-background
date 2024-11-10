const btns = document.querySelectorAll(".btn");
const body = document.querySelector("body");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    color = btn.value;
    changeBackground();
  });
});

function changeBackground() {
  body.className = "";
  switch (color) {
    case "red":
      body.className = "red";
      break;

    case "yellow":
      body.className = "yellow";
      break;

    case "blue":
      body.className = "blue";
      break;

    case "teal":
      body.className = "teal";
      break;

    case "green":
      body.className = "green";
      break;

    case "purple":
      body.className = "purple";
      break;
  }
}
