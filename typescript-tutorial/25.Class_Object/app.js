var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.drawPoint = function () {
        console.log('x: ' + this.x + ' y: ' + this.y);
    };
    Point.prototype.getDistance = function (anotherPoint) { };
    return Point;
}());
var point = new Point();
point.x = 1;
point.y = 2;
point.drawPoint();
