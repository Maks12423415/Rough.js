let roughSvg = rough.svg(document.getElementById("svg"));

const svg = document.getElementById("svg");

var globalY = 50;
var globalX = 300;

const test = roughSvg.ellipse(globalX + 150, globalY, 300, 100, {
  fill: "rgb(255, 0, 200, 0.2)",
  fillStyle: "solid",
});
test.addEventListener("click", () => {
  console.log("click");
});
svg.appendChild(test);

const line = roughSvg.line(
  globalX + 150,
  globalY + 50,
  globalX + 150,
  globalY + 50 + 30
);
svg.appendChild(line);

globalY = globalY + 80;

// const test2 = roughSvg.circle(800, 400, 300, {
//   fill: "red",
//   fillStyle: "zigzag-line",
// });
// svg.appendChild(test2);

const button = document.querySelector("#button");
button.addEventListener("click", () => {
  console.log("add");
  dodaj(100, globalY);
});

function dodaj(x, y) {
  const test = roughSvg.rectangle(globalX, globalY, 300, 100, {
    fill: "rgb(255, 0, 200, 0.2)",
    fillStyle: "solid",
  });
  test.addEventListener("click", () => {
    console.log("click");
  });
  svg.appendChild(test);
  const line = roughSvg.line(
    globalX + 150,
    globalY + 100,
    globalX + 150,
    globalY + 100 + 30
  );
  svg.appendChild(line);
  globalY = globalY + 130;
}

const button1 = document.querySelector("#button1");
button1.addEventListener("click", () => {
  romb(globalX, globalY);
});

function romb(x, y) {
  a = 100 / Math.sqrt(2);
  d = 100;
  x = globalX + 150 - a / 2;
  y = globalY + (d / 2 - a / 2);

  const test = roughSvg.rectangle(x, y, a, a, {
    fill: "rgb(255, 0, 200, 0.2)",
    fillStyle: "solid",
  });

  test.setAttribute("transform", `rotate(45, ${x + a / 2}, ${y + a / 2})`);
  test.addEventListener("click", () => {
    console.log("click");
  });
  test.addClassName = "";
  svg.appendChild(test);
  const line = roughSvg.line(
    globalX + 150,
    globalY + 100,
    globalX + 150,
    globalY + 100 + 30
  );
  svg.appendChild(line);
  globalY = globalY + 130;
}

const button2 = document.querySelector("#button2");
button2.addEventListener("click", () => {
  stop(globalX, globalY);
});

function stop() {
  const test = roughSvg.ellipse(globalX + 150, globalY + 50, 300, 100, {
    fill: "rgb(255, 0, 200, 0.2)",
    fillStyle: "solid",
  });

  svg.appendChild(test);
  globalY = globalY + 130;
}

const button3 = document.querySelector("#button3");
button3.addEventListener("click", () => {
  START(globalX, globalY);
});

function START() {
  const test = roughSvg.ellipse(globalX + 150, globalY + 50, 300, 100, {
    fill: "rgb(255, 0, 200, 0.2)",
    fillStyle: "solid",
  });

  svg.appendChild(test);
  const line = roughSvg.line(
    globalX + 150,
    globalY + 100,
    globalX + 150,
    globalY + 100 + 30
  );
  svg.appendChild(line);
  globalY = globalY + 130;
}
