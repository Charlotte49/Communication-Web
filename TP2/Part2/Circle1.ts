
class Circle1 extends Shape1
{
    private radius: number;

    constructor(radius: number, x=0, y=0)
    {
        super(x,y);
        this.radius=radius;
    }

    getRadius1() : number
    {return this.radius;}

    draw1(context: CanvasRenderingContext2D) : void 
    {
        context.beginPath();
        context.arc(this.getCenter1().getX(), this.getCenter1().getY(),this.radius, 0, 2 * Math.PI);
        context.stroke();
    }

}