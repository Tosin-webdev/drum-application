// Select the DOM Elmeent
const keys = document.querySelectorAll(".key");

// add event listener to the window
window.addEventListener("keydown", function (e) {
  const key = document.querySelector(`.key[data-key = "${e.keyCode}"]`);
  const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);

  if (!audio) return; // stops the function from running all together
  audio.currentTime = 0;
  audio.play();

  key.classList.add("playing");
  keys.forEach(function (key) {
    key.addEventListener("transitionend", function (e) {
      if (e.propertyName !== "transform") return;
      key.classList.remove("playing");
      console.log(e);
    });
  });
});
