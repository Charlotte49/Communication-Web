class Circle1 extends Shape1 {
    constructor(radius, x = 0, y = 0) {
        super(x, y);
        this.radius = radius;
    }
    getRadius1() { return this.radius; }
    draw1(context) {
        context.beginPath();
        context.arc(this.getCenter1().getX(), this.getCenter1().getY(), this.radius, 0, 2 * Math.PI);
        context.stroke();
    }
}
//# sourceMappingURL=Circle1.js.map