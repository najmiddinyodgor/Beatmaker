"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const popup = document.querySelector('.popup'), 
    pads = document.querySelectorAll(".pads__wrap"),
    sounds = document.querySelectorAll(".pads__sound"),
    bubbleWrap = document.querySelector(".bubble-wrap"),
    keyCodes = [49, 50, 51, 52, 53, 54];

  fillColor(pads);

  setInterval(() => {
    popup.classList.add("popup_hide");
  }, 5000)

  pads.forEach((pad, i) => {
    pad.addEventListener("click", () => {
      drawBubble(pad);
      playSound(sounds[i]);
    });
  });

  document.addEventListener("keypress", function(evt) {
    keyCodes.forEach((key, i) => {
      if (evt.keyCode == key) {
        playSound(sounds[i]);
        drawBubble(pads[i]);
      }
    });
  });

  function drawBubble(n) {
    let bubble = document.createElement("div");
    bubbleWrap.appendChild(bubble);
    bubble.classList.add("bubble");
    bubble.style.backgroundColor = n.getAttribute("data-color");
    bubble.addEventListener("animationend", () => {
      bubbleWrap.removeChild(bubble);
    });
  }

  function playSound(sound) {
    sound.currentTime = 0;
    sound.play();
  }

  function fillColor(arr) {
    arr.forEach((elem) => {
      elem.style.backgroundColor = elem.getAttribute("data-color");
    });
  }
});
