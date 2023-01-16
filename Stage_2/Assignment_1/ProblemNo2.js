/*
2. Repeat the same example in Question No.1 and make the Shape class Abstract and then 
implement its methods in Derived classes Circle and Rectangle. This time keep the method 
show() as abstract. And you would notice if an abstract method is not implemented in derived 
class then you get a compile time error.

*/


class Shape{
    constructor() {
        if (this.constructor == Shape) {
          throw new Error("Abstract Class can not be instantiated");
            }
        }
    show() {
            throw new Error(" Added (Show) abstract Method has no implementation");
        }
    
}

class Circle extends Shape {
    show(){
        console.log("Show method of Drived Class Circle");

    }

}

class Rectangle extends Shape {
    show(){
        console.log("Show method of Drived Class Rectangle");

    }
    
}

// let shape = new Shape();          // Object For Shape Class   that generate an error
// shape.show();


// let circle = new Circle();        // Object For Circle Class
// circle.show();



// let rectangle = new Rectangle();   // Object For Rectangle Class
// rectangle.show();


