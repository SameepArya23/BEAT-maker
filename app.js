window.addEventListener("load", () => {
  const sounds = document.querySelectorAll(".sound");
  const pads = document.querySelectorAll(".pads div");
  const visual = document.querySelector(".visual");
  const color = [
    "#60d394",
    "#d36060",
    "#c060d3",
    "#d3d160",
    "#606bd3",
    "#60c2d3",
  ];

  pads.forEach((pad, index) => {
    pad.addEventListener("click", function () {
      sounds[index].currentTime = 0;
      sounds[index].play();
      jumpBall(index);
    });
  });

  window.addEventListener("keydown", checkKeyPress, false);
  function checkKeyPress(key) {
    if (key.keyCode == "65") {
      sounds[0].currentTime = 0;
      sounds[0].play();
      jumpBall(0);
    }
    if (key.keyCode == "083") {
      sounds[1].currentTime = 0;
      sounds[1].play();
      jumpBall(1);
    }
    if (key.keyCode == "068") {
      sounds[2].currentTime = 0;
      sounds[2].play();
      jumpBall(2);
    }
    if (key.keyCode == "070") {
      sounds[3].currentTime = 0;
      sounds[3].play();
      jumpBall(3);
    }
    if (key.keyCode == "071") {
      sounds[4].currentTime = 0;
      sounds[4].play();
      jumpBall(4);
    }
    if (key.keyCode == "072") {
      sounds[5].currentTime = 0;
      sounds[5].play();
      jumpBall(5);
    }
  }

  const jumpBall = (index) => {
    const bubble = document.createElement("div");
    visual.appendChild(bubble);
    bubble.style.backgroundColor = color[index];
    bubble.style.animation = "jump 1s ease";
    bubble.addEventListener("animationend", function () {
      visual.removeChild(this);
    });
  };
});
