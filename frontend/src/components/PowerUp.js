import Canvas from "./Canvas";

// Create a PowerUp class
export default class PowerUp {
    constructor({ position }) {
        this.position = position;
        this.radius = 8;
    }

    // Draw the powerup
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
        ctx.fillStyle = "purple";
        ctx.fill();
        ctx.closePath();
    }
}