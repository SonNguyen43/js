var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.drawPoint = function () {
        console.log("x: " + this.x + " y: " + this.y);
    };
    Point.prototype.getDistance = function (anotherPoint) { };
    return Point;
}());
var point1 = new Point();
var point2 = new Point(1, 2);
point2.drawPoint();
