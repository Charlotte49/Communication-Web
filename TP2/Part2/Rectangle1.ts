class Rectangle1 extends Shape1
{
    private width: number;
    private height: number;

    constructor(width:number, height:number, x=0, y=0)
    {
        super(x,y);
        this.width=width;
        this.height=height;
    }

    

    draw1(context: CanvasRenderingContext2D) : void 
    {
        context.beginPath();
        context.rect(this.getCenter1().getX(), this.getCenter1().getY(), this.width, this.height);
        context.stroke();
    }

}