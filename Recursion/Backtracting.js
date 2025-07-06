// Phone Keypad Combination

/* 
const Get_Combination = (digits, index, map, result, current) => {

    if (index === digits.length) {
        result.push(current.join(''));
        return;
    }

    let digit = digits[index];
    
    let idx_letter = map[Number(digit)];
   

    for (let str of idx_letter) {
        current.push(str);
        Get_Combination(digits, index + 1, map, result,current);
        current.pop();  // Backtracking step
    }
}


const PhoneCombination = (digits) => {

    if (digits.length === 0) return [];

    const map = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];



    const result = [];
    const current = [];

    Get_Combination(digits, 0, map, result, current);

    return result;

}

console.log(PhoneCombination('678'));

*/


// Rat in Maze path


const Solve_Maze = (maze, x, y, visited, path, result, dir, dx, dy) => {
    const n = maze.length;

    if (x === n - 1 && y === n - 1) {
        result.push(path);
        return;
    }

    for (let i = 0; i < 4; i++) {
        const newX = x + dx[i];
        const newY = y + dy[i];
        const move = dir[i];

        if ( newX >= 0 && newY >= 0 &&
             newX < n && newY < n &&
             maze[newX][newY] === 1 &&
             !visited[newX][newY] ) 
        {
            visited[x][y] = true;
            Solve_Maze(maze, newX, newY, visited, path + move,result, dir, dx, dy);
            visited[x][y] = false;
        }
    }
}

const Rat_In_Maze = (maze) => {
    const n = maze.length;
    let result = [];

    if (maze[0][0] === 0) return [];

    const visited = Array.from({ length: n }, () => Array(n).fill(false));

    const dir = ['D', 'L', 'R', 'U'];
    const dx = [1, 0, 0, -1];
    const dy = [0, -1, 1, 0];

    Solve_Maze(maze, 0, 0, visited, '', result, dir, dx, dy);

    return result;
}

const Maze = [ [1,0,0,0],[1,1,0,1],[1,1,0,0],[0,1,1,1] ];

console.log(Rat_In_Maze(Maze));