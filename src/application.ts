import { GameManager } from "./game_manager.ts";
import { LocalStorageManager } from "./local_storage_manager.ts";

const board = document.querySelector<HTMLElement>("#game-board");
const score = document.querySelector<HTMLElement>("#score");
const bestScore = document.querySelector<HTMLElement>("#best-score");
const newGame = document.querySelector<HTMLButtonElement>("#new-game");

if (!board || !score || !bestScore || !newGame) {
  throw new Error("The game page is missing required elements.");
}

const storage = new LocalStorageManager();

// Lab 3: Grid Size
const manager = new GameManager(4, {
  onChange: (state) => {
    score.textContent = state.score.toString();
    bestScore.textContent = storage.getBestScore().toString();

    board.innerHTML = "";
    board.style.setProperty("--grid-size", state.size.toString());

    for (const cell of state.cells) {
      const tile = document.createElement("div");
      tile.className = `tile tile-${cell.value}`;
      tile.textContent = cell.value === 0 ? "" : cell.value.toString();
      board.append(tile);
    }
  },
  onScore: (nextScore) => storage.saveBestScore(nextScore),
});

newGame.addEventListener("click", () => manager.reset());
window.addEventListener("keydown", (event) => {
  if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(event.key)) {
    event.preventDefault();
    manager.move(event.key.replace("Arrow", "").toLowerCase());
  }
});

manager.reset();
