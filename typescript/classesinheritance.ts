class Vehicle{
    name:string;
    constructor(name:string)
    {
        this.name = name;
    }

    getName():string
    {
        return this.name;
    }
}

class Car extends Vehicle
{
    model : string;
    constructor(model:string,name:string)
    {
        super(name);
        this.model = model;
    }

    getNameModel():string
    {
        return this.model+this.name;
    }
}

class Truck extends Vehicle{
    constructor(name:string)
    {
        super(name);
    }
}

var mycar = new Car("Sports Model......","BMW");
console.log(mycar.getNameModel());

var truck = new Truck("tata truck");
console.log(truck.getName());


interface Paint
{
    drawPaint():void;
}

interface Paint2D
{
    draw2DImage():void;
}


class Circle implements Paint,Paint2D
{
    draw2DImage(): void {
        console.log("painting 2Dimage");
    }
    drawPaint(): void {
        console.log("painting image");
    }
}

var cir = new Circle();
cir.draw2DImage();
cir.drawPaint();