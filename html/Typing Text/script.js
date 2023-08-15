let target = document.querySelector("#dynamic");

function randomString() {
  let stringArr = [
    "Learn to HTML",
    "Learn to CSS",
    "Learn to JAVASCRIPT",
    "Learn to REACT.JS",
    "Learn to NODE.JS",
  ];
  let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
  let selectStringArr = selectString.split("");

  return selectStringArr;
}

function resetTyping() {
  target.textContent = "";
  dynamic(randomString());
}

function dynamic(randomArr) {
  if (randomArr.length > 0) {
    target.textContent += randomArr.shift();
    setTimeout(function () {
      dynamic(randomArr);
    }, 80);
  } else {
    setTimeout(resetTyping, 3000);
  }
}

dynamic(randomString());

function blink() {
  target.classList.toggle("active");
}
setInterval(blink, 500);
