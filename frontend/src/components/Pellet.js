import Canvas from "./Canvas";

// Create a Pellet class
export default class Pellet {
    constructor({ position }) {
        this.position = position;
        this.radius = 3;
    }

    // Draw the pellet
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
        ctx.fillStyle = "white";
        ctx.fill();
        ctx.closePath();
    }
}