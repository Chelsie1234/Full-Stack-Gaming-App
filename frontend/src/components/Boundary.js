import Canvas from "./Canvas";

// Create a Boundary class to draw boundaries
export default class Boundary {
    static width = 40;
    static height = 40;

    constructor({ position, imageSrc }) {
        this.position = position;
        this.width = 40;
        this.height = 40;
        this.imageSrc = imageSrc;
        this.image = new Image();
        this.image.src = imageSrc;
        this.imageLoaded = false;

        // Wait for the image to load
        this.image.onload = () => {
            this.imageLoaded = true;
        };

        // Handle image loading error
        this.image.onerror = () => {
            console.error(`Failed to load image: ${imageSrc}`);
        };
    }

    // Draw the boundary
    draw() {
        const ctx = Canvas.ctx;
        if (this.imageLoaded) {
            ctx.drawImage(
                this.image,
                this.position.x,
                this.position.y,
                this.width,
                this.height
            );
        }
    }
}