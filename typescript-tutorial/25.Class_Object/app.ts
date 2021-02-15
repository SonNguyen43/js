class Point{
    x: number;
    y: number;

    drawPoint() {
        console.log('x: ' + this.x + ' y: ' + this.y);     
    }

    getDistance(anotherPoint: Point) {}
}

let point = new Point()
point.x = 1;
point.y = 2;
point.drawPoint();