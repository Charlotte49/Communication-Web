abstract class Shape1{
    private center: Point1;
    constructor(x: number, y: number)
    {
        this.center = new Point1(x,y);
    }

    setCenter1(center: Point1) : void 
    {this.center=center;}

    getCenter1() : Point1 
    {return this.center;}

    abstract draw1(context: CanvasRenderingContext2D) : void;
}