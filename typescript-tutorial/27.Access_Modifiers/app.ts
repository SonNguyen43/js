class Point{
    private x: number;
    private y: number;

    constructor(x?: number, y?: number){
        this.x = x;
        this.y = y;
    }

    drawPoint() {
        console.log(`x: ${this.x} y: ${this.y}`);     
    }
}
let point = new Point(1, 2);
point.drawPoint();