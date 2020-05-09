class Point1{    
    private x: number;
    private y: number;

    constructor(x: number, y: number)
    {
        this.x=x;
        this.y=y;
    }

    getX() : number {return this.x;}
    getY() : number {return this.y;}

    setX(x) : void {this.x=x;}
    setY(y) : void {this.y=y;}

}