import { describe, expect, it } from "vitest";
import { GameManager } from "../src/game_manager.ts";

describe("GameManager", () => {
  it("creates a 4x4 board by default for the workshop app", () => {
    const manager = new GameManager(4);

    manager.reset();

    expect(manager.getState().cells).toHaveLength(16);
  });

  it("starts with the configured number of tiles", () => {
    const original = GameManager.startTiles;
    GameManager.startTiles = 3;

    const manager = new GameManager(4);
    manager.reset();

    const occupiedCells = manager
      .getState()
      .cells.filter((cell) => cell.value !== 0);
    expect(occupiedCells).toHaveLength(3);

    GameManager.startTiles = original;
  });
});
