var Vehicle = /** @class */ (function () {
    function Vehicle(name) {
        this.name = name;
    }
    Vehicle.prototype.getName = function () {
        return this.name;
    };
    return Vehicle;
}());
var mycar = new Car("Sports Model......", "BMW");
console.log(mycar.getNameModel());
var truck = new Truck("tata truck");
console.log(truck.getName());
var Circle = /** @class */ (function () {
    function Circle() {
    }
    Circle.prototype.draw2DImage = function () {
        console.log("painting 2Dimage");
    };
    Circle.prototype.drawPaint = function () {
        console.log("painting image");
    };
    return Circle;
}());
var cir = new Circle();
cir.draw2DImage();
cir.drawPaint();
