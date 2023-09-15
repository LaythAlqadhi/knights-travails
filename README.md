# Knight Moves

This repository features a JavaScript implementation of a function `knightMoves` that calculates the shortest possible way for a knight to move from one square to another on a chessboard, outputting all the squares the knight will stop on along the way.

This section details the key functionality of the knight moves path finder:

- `knightMoves(start, end)`: This function takes two parameters, `start` and `end`, representing the starting and ending positions for the knight. It employs a BFS algorithm to explore all possible moves while ensuring the knight stays within the chessboard bounds.

   - It returns an array representing the shortest path from `start` to `end` if a valid path exists.
   - If no valid path is found, it returns `null`.

## Usage

You can use this knight moves path finder as follows:

```javascript
const start = [0, 0];
const end = [3, 3];
const result = knightMoves(start, end);

if (result) {
  console.log(`You made it in ${result.length - 1} moves! Here's your path:`);
  for (const position of result) {
    console.log(position);
  }
} else {
  console.log("No valid path found.");
}
```

Replace `start` and `end` with your desired knight positions to find the shortest path between them.

## Example

For instance, running `knightMoves([3,3],[4,3])` would produce the following output:

```
You made it in 3 moves! Here's your path:
[3, 3]
[1, 2]
[2, 4]
[4, 3]
```

This code provides an efficient solution for finding the shortest path for a knight's movement on a chessboard.
