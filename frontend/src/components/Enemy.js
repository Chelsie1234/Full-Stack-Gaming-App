import Canvas from "./Canvas";

// Create an Enemy class
export default class Enemy {
    static speed = 1.5;
    constructor({ position, velocity, color = 'red' }) {
        this.position = position;
        this.velocity = velocity;
        this.radius = 15;
        this.color = color;
        this.prevCollisions = [];
        this.speed = 1.5;
        this.vulnerable = false;
    }

    // Draw the enemy
    draw() {
        const ctx = Canvas.ctx;
        ctx.beginPath();
        ctx.arc(
            this.position.x,
            this.position.y,
            this.radius,
            0,
            Math.PI * 2
        );
        ctx.fillStyle = this.vulnerable ? "blue" : this.color;
        ctx.fill();
        ctx.closePath();
    }

    update() {
        this.draw();
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
    }
}