class Rectangle1 extends Shape1 {
    constructor(width, height, x = 0, y = 0) {
        super(x, y);
        this.width = width;
        this.height = height;
    }
    draw1(context) {
        context.beginPath();
        context.rect(this.getCenter1().getX(), this.getCenter1().getY(), this.width, this.height);
        context.stroke();
    }
}
//# sourceMappingURL=Rectangle1.js.map