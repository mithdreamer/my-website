const startButton =
  document.getElementById("start-game-btn");

const canvas =
  document.getElementById("tetris");

const context =
  canvas.getContext("2d");

/* SCALE */

context.scale(30, 30);

/* ARENA */

function createMatrix(w, h) {

  const matrix = [];

  while (h--) {

    matrix.push(new Array(w).fill(0));

  }

  return matrix;

}

const arena = createMatrix(10, 20);

/* PIECES */

function createPiece(type) {

  if (type === "T") {

    return [
      [0,1,0],
      [1,1,1],
      [0,0,0],
    ];

  }

  if (type === "O") {

    return [
      [2,2],
      [2,2],
    ];

  }

}

/* COLORS */

const colors = [
  null,
  "#3b82f6",
  "#facc15",
];

/* PLAYER */

const player = {
  pos: { x: 0, y: 0 },

  matrix: null,
};

/* COLLISION */

function collide(arena, player) {

  const [m, o] = [
    player.matrix,
    player.pos,
  ];

  for (let y = 0; y < m.length; ++y) {

    for (let x = 0; x < m[y].length; ++x) {

      if (
        m[y][x] !== 0 &&
        (
          arena[y + o.y] &&
          arena[y + o.y][x + o.x]
        ) !== 0
      ) {

        return true;

      }

    }

  }

  return false;

}

/* MERGE */

function merge(arena, player) {

  player.matrix.forEach((row, y) => {

    row.forEach((value, x) => {

      if (value !== 0) {

        arena[y + player.pos.y][x + player.pos.x] =
          value;

      }

    });

  });

}

/* DRAW MATRIX */

function drawMatrix(matrix, offset) {

  matrix.forEach((row, y) => {

    row.forEach((value, x) => {

      if (value !== 0) {

        context.fillStyle =
          colors[value];

        context.fillRect(
          x + offset.x,
          y + offset.y,
          1,
          1
        );

      }

    });

  });

}

/* DRAW */

function draw() {

  context.fillStyle = "#000";

  context.fillRect(
    0,
    0,
    canvas.width,
    canvas.height
  );

  drawMatrix(arena, { x: 0, y: 0 });

  drawMatrix(player.matrix, player.pos);

}

/* PLAYER RESET */

function playerReset() {

  const pieces = "TO";

  const piece =
    pieces[
      pieces.length * Math.random() | 0
    ];

  player.matrix =
    createPiece(piece);

  player.pos.y = 0;

  player.pos.x =
    (arena[0].length / 2 | 0) -
    (player.matrix[0].length / 2 | 0);

}

/* MOVE */

function playerMove(dir) {

  player.pos.x += dir;

  if (collide(arena, player)) {

    player.pos.x -= dir;

  }

}

/* DROP */

function playerDrop() {

  player.pos.y++;

  if (collide(arena, player)) {

    player.pos.y--;

    merge(arena, player);

    playerReset();

  }

  dropCounter = 0;

}

/* UPDATE */

let dropCounter = 0;

let dropInterval = 700;

let lastTime = 0;

function update(time = 0) {

  const deltaTime =
    time - lastTime;

  lastTime = time;

  dropCounter += deltaTime;

  if (dropCounter > dropInterval) {

    playerDrop();

  }

  draw();

  requestAnimationFrame(update);

}

/* CONTROLS */

document.addEventListener("keydown", event => {

  if (event.key === "ArrowLeft") {

    playerMove(-1);

  }

  else if (event.key === "ArrowRight") {

    playerMove(1);

  }

  else if (event.key === "ArrowDown") {

    playerDrop();

  }

});

/* START */

startButton.addEventListener("click", () => {

  canvas.classList.remove("hidden");

  playerReset();

  update();

});