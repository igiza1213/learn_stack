const title = document.querySelector(".hello h1");

title.addEventListener("click", function () {
  title.style.color = "red";
  title.innerHTML = "clicked";
});
