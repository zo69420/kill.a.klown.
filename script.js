const button = document.getElementById("glitchButton");

button.addEventListener("click", () => {

  document.body.style.background = "white";

  setTimeout(() => {

    document.body.style.background = "black";

  }, 150);

})
