class Point{
    constructor(private _x?: number, private _y?: number){
    }

    drawPoint() {
        console.log(`x: ${this._x} y: ${this._y}`);     
    }

    get x() {
        return this._x
    }

    set x(value) {
        this._x = value
    }
}
let point = new Point(1, 2);
let x = point.x;
point.x = 10;
point.drawPoint();