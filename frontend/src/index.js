import Canvas from './components/Canvas.js';
import Player from './components/Player.js';
import Enemy from './components/Enemy.js';
import Pellet from './components/Pellet.js';
import PowerUp from './components/PowerUp.js';
import Boundary from './components/Boundary.js';

// Set canvas size
const scoreEl = document.querySelector('#scoreEl');

// Function to set the canvas size
function resizeCanvas() {
    Canvas.setDimensions(window.innerWidth, window.innerHeight);
}

// Call the function to set the canvas size
resizeCanvas();

// Add an event listener to resize the canvas when the window is resized
window.addEventListener('resize', resizeCanvas);

// Define game objects
const pellets = [];
const boundaries = [];
const powerUps = [];
const enemies = [
    new Enemy({
        position: {
            x: Boundary.width * 5 + Boundary.width / 2, //9
            y: Boundary.height * 11 + Boundary.height / 2 //11
        },
        velocity: {
            x: Enemy.speed,
            y: 0
        }
    })
];
const player = new Player({
    position: {
        x: Boundary.width + Boundary.width / 2,
        y: Boundary.height + Boundary.height / 2
    },
    velocity: {
        x: 0,
        y: 0
    }
});

// Define game variables
const keys = {
    ArrowUp: { pressed: false },
    ArrowDown: { pressed: false },
    ArrowLeft: { pressed: false },
    ArrowRight: { pressed: false }
};

let lastKey = '';
let score = 0;

// Map configuration and game initialization
const map = [
    ['1', '-', '-', '-', '-', '-', '-', '-', '-', '-', '2'],
    ['|', ' ', '.', '.', '.', '.', '.', '.', '.', '.', '|'],
    ['|', '.', 'b', '.', '[', '7', ']', '.', 'b', '.', '|'],
    ['|', '.', '.', '.', '.', '_', '.', '.', '.', '.', '|'],
    ['|', '.', '[', ']', '.', '.', '.', '[', ']', '.', '|'],
    ['|', '.', '.', '.', '.', '^', '.', '.', '.', '.', '|'],
    ['|', '.', 'b', '.', '[', '+', ']', '.', 'b', '.', '|'],
    ['|', '.', '.', '.', '.', '_', '.', '.', '.', '.', '|'],
    ['|', '.', '[', ']', '.', '.', '.', '[', ']', '.', '|'],
    ['|', '.', '.', '.', '.', '^', '.', '.', '.', '.', '|'],
    ['|', '.', 'b', '.', '[', '5', ']', '.', 'b', '.', '|'],
    ['|', '.', '.', '.', '.', '.', '.', '.', '.', 'p', '|'],
    ['4', '-', '-', '-', '-', '-', '-', '-', '-', '-', '3']
];

const images = {
    pipeHorizontal: './assets/pipeHorizontal.png',
    pipeVertical: './assets/pipeVertical.png',
    pipeCorner1: './assets/pipeCorner1.png',
    pipeCorner2: './assets/pipeCorner2.png',
    pipeCorner3: './assets/pipeCorner3.png',
    pipeCorner4: './assets/pipeCorner4.png',
    block: './assets/block.png',
    capLeft: './assets/capLeft.png',
    capRight: './assets/capRight.png',
    capBottom: './assets/capBottom.png',
    capTop: './assets/capTop.png',
    pipeCross: './assets/pipeCross.png',
    pipeConnectorTop: './assets/pipeConnectorTop.png',
    pipeConnectorRight: './assets/pipeConnectorRight.png',
    pipeConnectorBottom: './assets/pipeConnectorBottom.png',
    pipeConnectorLeft: './assets/pipeConnectorLeft.png'
};

// function createImage(src) {
//     const image = new Image();
//     image.src = src;
//     return image;
// }

map.forEach((row, i) => {
    row.forEach((element, j) => {
        switch (element) {
            case '-':
                boundaries.push(
                    new Boundary({
                        position: {
                            x: Boundary.width * j,
                            y: Boundary.height * i
                        },
                        imageSrc: images.pipeHorizontal
                    })
                );
                break;
            case '|':
                boundaries.push(
                    new Boundary({
                        position: {
                            x: Boundary.width * j,
                            y: Boundary.height * i
                        },
                        imageSrc: images.pipeVertical
                    })
                );
                break;
            case '1':
                boundaries.push(
                    new Boundary({
                        position: {
                            x: Boundary.width * j,
                            y: Boundary.height * i
                        },
                        imageSrc: images.pipeCorner1
                    })
                );
                break;
            case '2':
                boundaries.push(
                    new Boundary({
                        position: {
                            x: Boundary.width * j,
                            y: Boundary.height * i
                        },
                        imageSrc: images.pipeCorner2
                    })
                );
                break;
            case '3':
                boundaries.push(
                    new Boundary({
                        position: {
                            x: Boundary.width * j,
                            y: Boundary.height * i
                        },
                        imageSrc: images.pipeCorner3
                    })
                );
                break;
            case '4':
                boundaries.push(
                    new Boundary({
                        position: {
                            x: Boundary.width * j,
                            y: Boundary.height * i
                        },
                        imageSrc: images.pipeCorner4
                    })
                );
                break;
            case 'b':
                boundaries.push(
                    new Boundary({
                        position: {
                            x: Boundary.width * j,
                            y: Boundary.height * i
                        },
                        imageSrc: images.block
                    })
                );
                break;
            case '[':
                boundaries.push(
                    new Boundary({
                        position: {
                            x: Boundary.width * j,
                            y: Boundary.height * i
                        },
                        imageSrc: images.capLeft
                    })
                );
                break;
            case ']':
                boundaries.push(
                    new Boundary({
                        position: {
                            x: Boundary.width * j,
                            y: Boundary.height * i
                        },
                        imageSrc: images.capRight
                    })
                );
                break;
            case '_':
                boundaries.push(
                    new Boundary({
                        position: {
                            x: Boundary.width * j,
                            y: Boundary.height * i
                        },
                        imageSrc: images.capBottom
                    })
                );
                break;
            case '^':
                boundaries.push(
                    new Boundary({
                        position: {
                            x: Boundary.width * j,
                            y: Boundary.height * i
                        },
                        imageSrc: images.capTop
                    })
                );
                break;
            case '+':
                boundaries.push(
                    new Boundary({
                        position: {
                            x: Boundary.width * j,
                            y: Boundary.height * i
                        },
                        imageSrc: images.pipeCross
                    })
                );
                break;
            case '5':
                boundaries.push(
                    new Boundary({
                        position: {
                            x: Boundary.width * j,
                            y: Boundary.height * i
                        },
                        imageSrc: images.pipeConnectorTop
                    })
                );
                break;
            case '6':
                boundaries.push(
                    new Boundary({
                        position: {
                            x: Boundary.width * j,
                            y: Boundary.height * i
                        },
                        imageSrc: images.pipeConnectorRight
                    })
                );
                break;
            case '7':
                boundaries.push(
                    new Boundary({
                        position: {
                            x: Boundary.width * j,
                            y: Boundary.height * i
                        },
                        imageSrc: images.pipeConnectorBottom
                    })
                );
                break;
            case '8':
                boundaries.push(
                    new Boundary({
                        position: {
                            x: Boundary.width * j,
                            y: Boundary.height * i
                        },
                        imageSrc: images.pipeConnectorLeft
                    })
                );
                break;
            case '.':
                pellets.push(
                    new Pellet({
                        position: {
                            x: Boundary.width * j + Boundary.width / 2,
                            y: Boundary.height * i + Boundary.height / 2
                        }
                    })
                );
                break;
            case 'p':
                powerUps.push(
                    new PowerUp({
                        position: {
                            x: Boundary.width * j + Boundary.width / 2,
                            y: Boundary.height * i + Boundary.height / 2
                        }
                    })
                );
                break;
        }
    });
});

let animationId;

function circleCollidesWithRectangle({
    circle,
    rectangle
}) {
    const padding = Boundary.width / 2 - circle.radius - 1;
    return (
        circle.position.y - circle.radius + circle.velocity.y <= rectangle.position.y + rectangle.height + padding
        && circle.position.x + circle.radius + circle.velocity.x >= rectangle.position.x - padding
        && circle.position.y + circle.radius + circle.velocity.y >= rectangle.position.y - padding
        && circle.position.x - circle.radius + circle.velocity.x <= rectangle.position.x + rectangle.width + padding
    )
}

function animate() {
    const ctx = Canvas.ctx;
    const canvas = Canvas.canvas;

    animationId = requestAnimationFrame(animate);
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Handle player movement
    if (keys.ArrowUp.pressed && lastKey === 'ArrowUp') {
        for (let i=0; i < boundaries.length; i++) {
            const boundary = boundaries[i];

            if (
                circleCollidesWithRectangle({
                    circle: {
                        ...player,
                        velocity: {
                            x: 0,
                            y: -player.speed
                        }},
                    rectangle: boundary
                })
            ) {
                player.velocity.y = 0
                break
            } else {
                player.velocity.y = -player.speed
            }
        }

    } else if (keys.ArrowDown.pressed && lastKey === 'ArrowDown') {
        for (let i=0; i < boundaries.length; i++) {
            const boundary = boundaries[i];

            if (
                circleCollidesWithRectangle({
                    circle: {
                        ...player,
                        velocity: {
                            x: 0,
                            y: player.speed
                        }},
                    rectangle: boundary
                })
            ) {
                player.velocity.y = 0
                break
            } else {
                player.velocity.y = player.speed
            }
        }
    } else if (keys.ArrowLeft.pressed && lastKey === 'ArrowLeft') {
        for (let i=0; i < boundaries.length; i++) {
            const boundary = boundaries[i];

            if (
                circleCollidesWithRectangle({
                    circle: {
                        ...player,
                        velocity: {
                            x: -player.speed,
                            y: 0
                        }},
                    rectangle: boundary
                })
            ) {
                player.velocity.x = 0
                break
            } else {
                player.velocity.x = -player.speed
            }
        }
    } else if (keys.ArrowRight.pressed && lastKey === 'ArrowRight') {
        for (let i=0; i < boundaries.length; i++) {
            const boundary = boundaries[i];

            if (
                circleCollidesWithRectangle({
                    circle: {
                        ...player,
                        velocity: {
                            x: player.speed,
                            y: 0
                        }},
                    rectangle: boundary
                })
            ) {
                player.velocity.x = 0
                break
            } else {
                player.velocity.x = player.speed
            }
        }
    }

    // Detect collision between player and enemy
    for (let i = enemies.length - 1; 0 <= i; i--) {
        const enemy = enemies[i];
        // When player collides with enemy
        if (Math.hypot(
            player.position.x - enemy.position.x,
            player.position.y - enemy.position.y
        ) < player.radius + enemy.radius) {
            if (enemy.vulnerable) {
                console.log('Enemy is vulnerable:');
                enemies.splice(i, 1);
                score += 50;
                scoreEl.innerHTML = score;
            } else if (player.invincible) {
                console.log('Player is invincible:');
            } else {
                cancelAnimationFrame(animationId);
                alert('Game Over');
                // document.location.reload();
            }
        }
    }

    // Win condition
    if (pellets.length === 0) {
        cancelAnimationFrame(animationId);
        alert('You win!');
        // document.location.reload();
    }

    // Draw pellets & check for collision
    for (let i = pellets.length - 1; 0 <= i; i--) {
        const pellet = pellets[i];
        pellet.draw();

        if (Math.hypot(
            player.position.x - pellet.position.x,
            player.position.y - pellet.position.y
        ) < player.radius + pellet.radius) {
            pellets.splice(pellets.indexOf(pellet), 1);
            score += 10;
            scoreEl.innerHTML = score;
        }
    }
    

    // Draw boundaries
    boundaries.forEach((boundary) => {
        boundary.draw();

        if (
            circleCollidesWithRectangle
            ({
                circle: player,
                rectangle: boundary
            })
        ) {
            player.velocity.x = 0;
            player.velocity.y = 0;
        }
    })

        // Draw powerUps & check for collision
        for (let i = powerUps.length - 1; 0 <= i; i--) {
            const powerUp = powerUps[i];
            powerUp.draw();
    
            // When player collides with powerUp
            if (Math.hypot(
                player.position.x - powerUp.position.x,
                player.position.y - powerUp.position.y
            ) < player.radius + powerUp.radius) {
                powerUps.splice(i, 1);
                score += 10;
                scoreEl.innerHTML = score;
    
                // Create different powerUps and randomly select one
                const randomPowerUp = Math.floor(Math.random() * 4);
                
                for (let i = enemies.length - 1; 0 <= i; i--) {
                    const enemy = enemies[i];
                    if (randomPowerUp === 0) {
                        // console.log('P0: Increase player speed during 5 seconds');
                        // Increase player speed during 5 seconds with a chrono
                        const chrono = 5;
                        player.speed += 2;
                        setTimeout(() => {
                            player.speed -= 2;
                        }, chrono * 1000);
                    } else if (randomPowerUp === 1) {
                        // console.log('P1: Create another enemy during 10 seconds');
                        // Create another enemy during 10 seconds
                        const chrono = 10;
                        enemies.push(
                            new Enemy({
                                position: {
                                    x: Boundary.width * 5 + Boundary.width / 2,
                                    y: Boundary.height + Boundary.height / 2
                                },
                                velocity: {
                                    x: Enemy.speed,
                                    y: 0
                                }
                            })
                        );
                        setTimeout(() => {
                            enemies.pop();
                        }, chrono * 1000);
                    } else if (randomPowerUp === 2) {
                        // console.log('P2: Make the player invincible during 5 seconds');
                        // Make the player invincible during 5 seconds and the enemy can't kill/collide him
                        const chrono = 5;
                        player.invincible = true;
                        setTimeout(() => {
                            player.invincible = false;
                        }, chrono * 1000);
                    } else if (randomPowerUp === 3) {
                        // console.log('P3: Make the enemy vulnerable during 5 seconds');
                        // Make the enemy become killable during 5 seconds
                        const chrono = 5;
                        enemy.vulnerable = true;
                        setTimeout(() => {
                            enemy.vulnerable = false;
                        }, chrono * 1000);
                    }
                }
            }
        }

    player.update()

    enemies.forEach((enemy) => {
        enemy.update()

        const collisions = []

        boundaries.forEach(boundary => {
            if (
                !collisions.includes("right") &&
                circleCollidesWithRectangle({
                    circle: {
                        ...enemy,
                        velocity: {
                            x: enemy.speed,
                            y: 0
                        }
                    },
                    rectangle: boundary
                })
            ) {
                collisions.push("right")
            }

            if (
                !collisions.includes("left") &&
                circleCollidesWithRectangle({
                    circle: {
                        ...enemy,
                        velocity: {
                            x: -enemy.speed,
                            y: 0
                        }
                    },
                    rectangle: boundary
                })
            ) {
                collisions.push("left")
            }

            if (
                !collisions.includes("up") &&
                circleCollidesWithRectangle({
                    circle: {
                        ...enemy,
                        velocity: {
                            x: 0,
                            y: -enemy.speed
                        }
                    },
                    rectangle: boundary
                })
            ) {
                collisions.push("up")
            }

            if (
                !collisions.includes("down") &&
                circleCollidesWithRectangle({
                    circle: {
                        ...enemy,
                        velocity: {
                            x: 0,
                            y: enemy.speed
                        }
                    },
                    rectangle: boundary
                })
            ) {
                collisions.push("down")
            }
        })

        if (collisions.length > enemy.prevCollisions.length) {
            enemy.prevCollisions = collisions
        }

        if (JSON.stringify(collisions) !== JSON.stringify(enemy.prevCollisions)) {

            // Catch the current deplacement of the enemy
            if (enemy.velocity.x > 0) {
                enemy.prevCollisions.push("right")
            } else if (enemy.velocity.x < 0) {
                enemy.prevCollisions.push("left")
            } else if (enemy.velocity.y > 0) {
                enemy.prevCollisions.push("down")
            } else if (enemy.velocity.y < 0) {
                enemy.prevCollisions.push("up")
            }

            const pathways = enemy.prevCollisions.filter(
                collision => {
                    return !collisions.includes(collision)
                }
            )

            const direction = pathways[
                Math.floor(
                    Math.random() * pathways.length
                )
            ]

            switch (direction) {
                case "right":
                    enemy.velocity.x = enemy.speed
                    enemy.velocity.y = 0
                    break
                case "left":
                    enemy.velocity.x = -enemy.speed
                    enemy.velocity.y = 0
                    break
                case "up":
                    enemy.velocity.x = 0
                    enemy.velocity.y = -enemy.speed
                    break
                case "down":
                    enemy.velocity.x = 0
                    enemy.velocity.y = enemy.speed
                    break
            }
            enemy.prevCollisions = []
        }
    })
        
}

animate();

// Draw player
player.draw();

window.addEventListener('keydown', ({ key }) => {
    switch (key) {
        case 'ArrowUp':
            keys.ArrowUp.pressed = true;
            lastKey = 'ArrowUp';
            break;
        case 'ArrowLeft':
            keys.ArrowLeft.pressed = true;
            lastKey = 'ArrowLeft';
            break;
        case 'ArrowDown':
            keys.ArrowDown.pressed = true;
            lastKey = 'ArrowDown';
            break;
        case 'ArrowRight':
            keys.ArrowRight.pressed = true;
            lastKey = 'ArrowRight';
            break;
    }
});

window.addEventListener('keyup', ({ key }) => {
    switch (key) {
        case 'ArrowUp':
            keys.ArrowUp.pressed = false;
            break;
        case 'ArrowLeft':
            keys.ArrowLeft.pressed = false;
            break;
        case 'ArrowDown':
            keys.ArrowDown.pressed = false;
            break;
        case 'ArrowRight':
            keys.ArrowRight.pressed = false;
            break;
    }
});
