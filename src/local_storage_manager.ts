export class LocalStorageManager {
  static storage: Storage = window.localStorage;

  getBestScore(): number {
    return Number(LocalStorageManager.storage.getItem("bestScore") ?? "0");
  }

  saveBestScore(score: number): void {
    if (score <= this.getBestScore()) {
      return;
    }

    // Lab 7: Update Best Score
  }
}
