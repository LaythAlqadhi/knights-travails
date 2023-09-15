class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(item) {
    this.items.push(item);
  }

  dequeue() {
    if (!this.isEmpty()) {
      return this.items.shift();
    }
    return null;
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

function knightMoves(start, end) {
  const moves = [
    [-2, -1],
    [-2, 1],
    [-1, -2],
    [-1, 2],
    [1, -2],
    [1, 2],
    [2, -1],
    [2, 1]
  ];

  const queue = new Queue();
  queue.enqueue([start]);
  const visited = new Set();

  while (!queue.isEmpty()) {
    const path = queue.dequeue();
    const currentPosition = path[path.length - 1];

    if (currentPosition[0] === end[0] && currentPosition[1] === end[1]) {
      return path;
    }

    for (const move of moves) {
      const newX = currentPosition[0] + move[0];
      const newY = currentPosition[1] + move[1];
      const newPosition = [newX, newY];

      if (
        newX >= 0 && newX < 8 &&
        newY >= 0 && newY < 8 &&
        !visited.has(newPosition)
      ) {
        visited.add(newPosition);
        const newPath = [...path, newPosition];
        queue.enqueue(newPath);
      }
    }
  }

  return null;
}

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
