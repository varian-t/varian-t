
  const button = document.getElementById("gameButton");
  const scoreEl = document.getElementById("score");
  let score = 0;

  function moveButton() {
    const area = document.querySelector(".game-area");
    const maxX = area.clientWidth - button.offsetWidth;
    const maxY = area.clientHeight - button.offsetHeight;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    button.style.left = x + "px";
    button.style.top = y + "px";
  }

  button.addEventListener("click", () => {
    score++;
    scoreEl.textContent = score;
    moveButton();
  });

  // Initial position
  moveButton();

