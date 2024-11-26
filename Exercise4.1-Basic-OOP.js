// Create a Person class:

// Define a Person class with properties name and age.
// Add a greet method that returns a message like: "Hello, my name is John and I am 30 years old."
// Create instances of the class and test the method.


class person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    salute(){
        console.log(`Hello, my name is ${this.name}, i am ${this.age} years old`);
    }
}


const person1= new person('Pedro', 21)

person1.salute();



// Crear una clase Rectángulo:

// Define una clase con las propiedades ancho y alto.
// Incluye un método calcularArea que devuelva el área del rectángulo.
// Incluye un método calcularPerimetro.
// Prueba: Crea un rectángulo con ancho 5 y alto 10, calcula su área y perímetro.



class Rectangulo{
    constructor(ancho,alto){
        this.ancho = ancho;
        this.alto = alto;
    }

    calcularPerimetro(){
        return console.log(2*(this.alto + this.ancho))
    }

    calcularArea(){
        return console.log(this.alto * this.ancho)
    }
}


const rectangulo1= new Rectangulo (5,10);

rectangulo1.calcularPerimetro();
rectangulo1.calcularArea();