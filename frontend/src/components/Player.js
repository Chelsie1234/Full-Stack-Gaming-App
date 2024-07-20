import Canvas from "./Canvas";

export default class Player {
    static speed = 2;
    constructor({ position, velocity }) {
        this.position = position;
        this.velocity = velocity;
        this.radius = 15;
        this.speed = 2;
        this.invincible = false;
    }

    draw() {
        const ctx = Canvas.ctx;
        ctx.beginPath();
        ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.invincible ? "green" : "yellow";
        ctx.fill();
        ctx.closePath();
    }

    update() {
        this.draw();
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
    }
}
