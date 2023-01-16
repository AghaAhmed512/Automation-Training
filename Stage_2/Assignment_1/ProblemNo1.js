/*1 - Write a program to implement polymorphism using inheritance. Consider the example of Shape as base class 
with method show(). And then a child class Circle and Rectangle which inherits the base class Shape and overrides 
its method show(). Add one more Method with the name of getInfo(). This method would display the class name in which
it is implemented. Do not override this method. When you will call the method getInfo() with child object 
it would still show the name of the base class, which implies that method has been 
directly inherited and was not overridden.
*/


class Shape{

    show(){
        console.log("Show method of Base Class Shape");

    }
    getInfo(){
        console.log("getInfo method of Base Class Shape");
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

// let shape = new Shape();          // Object For Shape Class
// shape.show();
// shape.getInfo();                  //Base class method

// let circle = new Circle();        // Object For Circle Class
// // circle.show();
// circle.getInfo();                 //Base class method

// let rectangle = new Rectangle();   // Object For Rectangle Class
// rectangle.show();
// rectangle.getInfo();                //Base class method


