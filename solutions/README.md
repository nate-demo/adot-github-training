# Reference snippets

Use these only after trying the lab yourself.

## Lab 1

Add this under `<!-- Lab 1: Add Game Rules -->` in `index.html`:

```html
<p class="game-explanation">
  <strong class="important">How to play:</strong>
  Use your <strong>arrow keys</strong> to move the tiles. When two tiles with
  the same number touch, they <strong>merge into one!</strong>
</p>
```

## Lab 3

In `src/application.ts`, change the grid size back to `4` (the number
only, keeping the options object):

```ts
const manager = new GameManager(4, {
```

## Lab 7

In `src/local_storage_manager.ts`, add:

```ts
LocalStorageManager.storage.setItem("bestScore", score.toString());
```
