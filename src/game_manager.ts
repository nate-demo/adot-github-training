export type Direction = "up" | "down" | "left" | "right";

export interface GameState {
  size: number;
  score: number;
  cells: Array<{ value: number }>;
}

interface GameManagerOptions {
  onChange?: (state: GameState) => void;
  onScore?: (score: number) => void;
}

export class GameManager {
  static startTiles: number = 2;

  private grid: number[][];
  private score = 0;

  constructor(
    private readonly size: number,
    private readonly options: GameManagerOptions = {},
  ) {
    this.grid = this.emptyGrid();
  }

  reset(): void {
    this.score = 0;
    this.grid = this.emptyGrid();

    for (let index = 0; index < GameManager.startTiles; index += 1) {
      this.addRandomTile();
    }

    this.emit();
  }

  move(direction: Direction | string): boolean {
    if (!this.isDirection(direction)) {
      return false;
    }

    const before = this.serialize();
    const rows = this.toRows(direction);
    const mergedRows = rows.map((row) => this.mergeRow(row));

    this.grid = this.fromRows(direction, mergedRows);

    if (this.serialize() === before) {
      return false;
    }

    this.addRandomTile();
    this.options.onScore?.(this.score);
    this.emit();
    return true;
  }

  getState(): GameState {
    return {
      size: this.size,
      score: this.score,
      cells: this.grid.flat().map((value) => ({ value })),
    };
  }

  private mergeRow(row: number[]): number[] {
    const compacted = row.filter((value) => value !== 0);
    const merged: number[] = [];

    for (let index = 0; index < compacted.length; index += 1) {
      if (compacted[index] === compacted[index + 1]) {
        const value = compacted[index] * 2;
        merged.push(value);
        this.score += value;
        index += 1;
      } else {
        merged.push(compacted[index]);
      }
    }

    while (merged.length < this.size) {
      merged.push(0);
    }

    return merged;
  }

  private addRandomTile(): void {
    const emptyCells: Array<{ row: number; column: number }> = [];

    for (let row = 0; row < this.size; row += 1) {
      for (let column = 0; column < this.size; column += 1) {
        if (this.grid[row][column] === 0) {
          emptyCells.push({ row, column });
        }
      }
    }

    if (emptyCells.length === 0) {
      return;
    }

    const next = emptyCells[Math.floor(Math.random() * emptyCells.length)];
    const value = Math.random() < 0.9 ? 2 : 4;
    this.grid[next.row][next.column] = value;
  }

  private emptyGrid(): number[][] {
    return Array.from({ length: this.size }, () =>
      Array.from({ length: this.size }, () => 0),
    );
  }

  private toRows(direction: Direction): number[][] {
    if (direction === "left") {
      return this.grid.map((row) => [...row]);
    }

    if (direction === "right") {
      return this.grid.map((row) => [...row].reverse());
    }

    return Array.from({ length: this.size }, (_, column) =>
      Array.from({ length: this.size }, (_, row) =>
        direction === "up"
          ? this.grid[row][column]
          : this.grid[this.size - 1 - row][column],
      ),
    );
  }

  private fromRows(direction: Direction, rows: number[][]): number[][] {
    if (direction === "left") {
      return rows;
    }

    if (direction === "right") {
      return rows.map((row) => [...row].reverse());
    }

    const nextGrid = this.emptyGrid();

    for (let column = 0; column < this.size; column += 1) {
      for (let row = 0; row < this.size; row += 1) {
        if (direction === "up") {
          nextGrid[row][column] = rows[column][row];
        } else {
          nextGrid[this.size - 1 - row][column] = rows[column][row];
        }
      }
    }

    return nextGrid;
  }

  private serialize(): string {
    return JSON.stringify(this.grid);
  }

  private emit(): void {
    this.options.onChange?.(this.getState());
  }

  private isDirection(value: string): value is Direction {
    return ["up", "down", "left", "right"].includes(value);
  }
}
