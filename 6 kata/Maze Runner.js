// You will be given a 2D array of the maze and an array of directions. Your task is to follow the directions given.
// If you reach the end point before all your moves have gone, you should return Finish. If you hit any walls or go outside the maze border, you should return Dead.
// If you find yourself still in the maze after using all the moves, you should return Lost.

// https://www.codewars.com/kata/58663693b359c4a6560001d6/javascript

function mazeRunner(maze, directions) {
  let position = [];
  maze.forEach(function(curr, index) {
    if (curr.indexOf(2) !== -1) {
      position.push(index, curr.indexOf(2))
    }
  });

  for (let i = 0; i < directions.length; i++) {
    if (directions[i] === 'E') {
      position[1]++
    } else if (directions[i] === 'W') {
      position[1]--
    } else if (directions[i] === 'N') {
      position[0]--
    } else if (directions[i] === 'S') {
      position[0]++
    }
    console.log(position)
    if (position[0] === maze.length || position[0] < 0) {
      return 'Dead'
    }
    if (maze[position[0]][position[1]] === undefined) {
      return 'Dead'
    }
    if (maze[position[0]][position[1]] === 1) {
      return 'Dead'
    } else if (maze[position[0]][position[1]] === 3) {
      return 'Finish'
    }
  }
 return 'Lost'
}
