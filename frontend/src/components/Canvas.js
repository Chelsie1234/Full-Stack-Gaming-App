const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

// canvas.width = innerWidth;
// canvas.height = innerHeight;

export default class Canvas {
    static canvas = canvas;
    static ctx = ctx;

    static setDimensions(width, height) {
        this.canvas.width = width;
        this.canvas.height = height;
        this.width = width;
        this.height = height;
    }

    static getDimensions() {
        return { width: this.canvas.width, height: this.canvas.height };
    }

    static clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    // static width = canvas.width;
    // static height = canvas.height;

    // static clear() {
    //     this.ctx.clearRect(0, 0, canvas.width, canvas.height);
    // }

    // static resize(width, height) {
    //     this.canvas.width = width;
    //     this.canvas.height = height;
    //     this.width = width;
    //     this.height = height;
    // }
    
    // static setDimensions(width, height) {
    //     this.resize(width, height);
    // }
    
    // static getDimensions() {
    //     return { width: this.width, height: this.height };
    // }
}
