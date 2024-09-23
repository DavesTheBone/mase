const mazeElement = document.getElementById("maze");
const messageElement = document.getElementById("message");

const maze = [
    [0, 1, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 1, 1, 1, 1, 1, 0, 1, 0, 1],
    [0, 0, 0, 1, 0, 0, 0, 1, 0, 1],
    [1, 1, 0, 1, 0, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 1, 1, 1],
    [1, 1, 1, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 1, 1, 1, 1, 1],
    [0, 1, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 0, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
];

let playerPosition = { x: 0, y: 0 };

// 迷路を描画する関数
function drawMaze() {
    mazeElement.innerHTML = '';
    for (let y = 0; y < maze.length; y++) {
        for (let x = 0; x < maze[y].length; x++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            if (maze[y][x] === 1) {
                cell.classList.add('wall');
            }
            if (x === playerPosition.x && y === playerPosition.y) {
                cell.classList.add('player');
            }
            mazeElement.appendChild(cell);
        }
    }
}

// プレイヤーの動きを処理する関数
function movePlayer(dx, dy) {
    const newX = playerPosition.x + dx;
    const newY = playerPosition.y + dy;
    
    if (newX >= 0 && newX < maze[0].length && newY >= 0 && newY < maze.length && maze[newY][newX] === 0) {
        playerPosition.x = newX;
        playerPosition.y = newY;
        drawMaze();
        
        // ゴールに到達したかチェック
        if (playerPosition.x === maze[0].length - 1 && playerPosition.y === maze.length - 1) {
            messageElement.textContent = "ゴール！おめでとう！";
        } else {
            messageElement.textContent = "";
        }
    }
}

// 初期描画
drawMaze();

// キー操作でプレイヤーを動かす
document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'ArrowUp':
            movePlayer(0, -1);
            break;
        case 'ArrowDown':
            movePlayer(0, 1);
            break;
        case 'ArrowLeft':
            movePlayer(-1, 0);
            break;
        case 'ArrowRight':
            movePlayer(1, 0);
            break;
    }
});
