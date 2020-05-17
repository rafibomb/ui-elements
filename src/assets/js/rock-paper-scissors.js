(function () {
  const rpsGame = document.getElementById('rpsGame');

  if (rpsGame) {
    const score = document.getElementById('score');
    const choices = document.querySelectorAll('.rps-choice');
    const modal = document.getElementById('resultModal');
    const restart = document.getElementById('restart');
    const result = document.querySelector('.modal-window');
    const scoreboard = {
      player: 0,
      computer: 0,
    };

    function playGame(e) {
      restart.style.display = 'inline-block';
      const playerChoice = e.target.id;
      const computerChoice = getComputerChoice();
      const winner = getWinner(playerChoice, computerChoice);
      showWinner(winner, computerChoice);
    }

    function getComputerChoice() {
      const rand = Math.random();

      if (rand < 0.34) {
        return 'rock';
      } else if (rand <= 0.67) {
        return 'paper';
      } else {
        return 'scissors';
      }
    }

    function getWinner(p, c) {
      if (p === c) {
        return 'draw';
      } else if (p === 'rock') {
        if (c === 'paper') {
          return 'computer';
        } else {
          return 'player';
        }
      } else if (p === 'paper') {
        if (c === 'scissors') {
          return 'computer';
        } else {
          return 'player';
        }
      } else if (p === 'scissors') {
        if (c === 'rock') {
          return 'computer';
        } else {
          return 'player';
        }
      }
    }

    function showWinner(winner, playerChoice, computerChoice) {
      if (winner === 'player') {
        scoreboard.player++;
        result.innerHTML = `
          <h1 class="text-win">You Win!!!</h1>
          <!-- <img height="100" width="100" src="{{root}}assets/img/icons/${computerChoice}-icon.svg" alt="${computerChoice} choice icon">
          <p>Computer chose <strong>${
            computerChoice.charAt(0).toUppercase() + computerChoice.slice(1)
          }</strong></p> -->
        `;
      } else if (winner === 'computer') {
        scoreboard.computer++;
        result.innerHTML = `
          <h1 class="text-lose">You Lose</h1>
          <!-- <img height="100" width="100" src="{{root}}assets/img/icons/${computerChoice}-icon.svg" alt="${computerChoice} choice icon">
          <p>Computer chose <strong>${
            computerChoice.charAt(0).toUppercase() + computerChoice.slice(1)
          }</strong></p> -->
        `;
      } else {
        result.innerHTML = `
          <h1>It's a draw</h1>
          <!--
          <img height="100" width="100" src="{{root}}assets/img/icons/${computerChoice}-icon.svg" alt="${computerChoice} choice icon">
          <p>Computer chose <strong>${
            computerChoice.charAt(0).toUppercase() + computerChoice.slice(1)
          }</strong></p> -->
        `;
      }
      score.innerHTML = `
        <p>Player: ${scoreboard.player}</p>
        <p>Computer: ${scoreboard.computer}</p>
      `;

      modal.style.display = 'block';
    }

    function restartGame() {
      scoreboard.player = 0;
      scoreboard.computer = 0;
      score.innerHTML = `
        <p>Player: 0</p>
        <p>Computer: 0d</p>
      `;
    }

    function clearModal(e) {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    }

    // Event listeners
    choices.forEach((choice) => choice.addEventListener('click', playGame));
    window.addEventListener('click', clearModal);
    restart.addEventListener('click', restartGame);
  }
})();
