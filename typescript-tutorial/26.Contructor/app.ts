class Point{
    x: number;
    y: number;

    constructor(x?: number, y?: number){
        this.x = x;
        this.y = y;
    }

    drawPoint() {
        console.log(`x: ${this.x} y: ${this.y}`);     
    }

    getDistance(anotherPoint: Point) {}
}

let point1 = new Point();

let point2 = new Point(1, 2);
point2.drawPoint();