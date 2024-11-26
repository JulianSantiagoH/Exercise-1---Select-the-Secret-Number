// Clase CuentaBancaria:

// Crea una clase CuentaBancaria con:
// Propiedades: titular (nombre de la persona) y saldo.
// Métodos:
// depositar(cantidad): suma una cantidad al saldo.
// retirar(cantidad): resta una cantidad del saldo si hay fondos suficientes.
// Muestra un error si intentas retirar más de lo disponible.
// Prueba: Crea una cuenta, realiza depósitos y retiros, y muestra el saldo final.

class CuentaBancaria {
    constructor(titular, saldo) {
        this.titular = titular;
        this.saldo = saldo;
    }
    depositarCantidad(cantidad) {
        return this.saldo += cantidad
    }
    retirarCantidad(cantidad) {
        if (cantidad > this.saldo) {
            alert('Error, no cuenta con la cantidad que desea sacar');
        } else if (cantidad <= this.saldo) {
            alert(`La cantidad que saco fue ${cantidad}`)
            return this.saldo -= cantidad
        } else {
            alert('ingrese una cantidad valida')
        }
    }
}

const cuentaJulian = new CuentaBancaria('Julian', 0);

let contador = false;

while (!contador) {
    const menuCuenta = prompt(`
        =====Bienvenido ${cuentaJulian.titular}=====

        Que accion desea realizar

        1.Depositar
        2.Retirar
        3.Saldo
        4.Exit
    `)

    if (menuCuenta == '1') {
        const cantidadSeleccionada = parseInt(prompt('Ingrese la cantidad de dinero'));

        if (!isNaN (cantidadSeleccionada) && cantidadSeleccionada > 0){
            cuentaJulian.depositarCantidad(cantidadSeleccionada)
            alert(`Haz depositado ${cantidadSeleccionada} a tu cuenta`)
        } else{
            alert('Porfavor selecciona un numero valido')
        }
        
    }else if (menuCuenta == '2'){
        const cantidadSeleccionada = parseInt(prompt('Ingrese la cantidad de dinero'));
        if (!isNaN (cantidadSeleccionada) && cantidadSeleccionada > 0){
            cuentaJulian.retirarCantidad(cantidadSeleccionada)
        } else{
            alert('Porfavor selecciona un numero valido')
        }
    } else if (menuCuenta == '3'){
        alert (`Saldo total : ${cuentaJulian.saldo}`)
    } else if (menuCuenta == '4'){
        alert('Gracias Vuelva pronto')
        contador = true;
    } else{
        alert('Porfavor selecciona una opcion valida')
    }

}



// Herencia: Empleado y Gerente:

// Define una clase base Empleado con:
// Propiedades: nombre, salario.
// Método: mostrarDetalles (imprime nombre y salario).
// Crea una subclase Gerente que extienda de Empleado:
// Agrega la propiedad departamento.
// Modifica el método mostrarDetalles para incluir el departamento.
// Prueba: Crea instancias de ambas clases y llama al método mostrarDetalles.

class Empleado{
    constructor(nombre,salario){
        this.nombre = nombre;
        this.salario = salario;
    };

    mostrarDetalles(){
        return alert(`Su nombre es ${this.nombre} y su salario es ${this.salario}`)
    };

}


class Gerente extends Empleado{
    constructor(nombre,salario,departamento){
        super(nombre, salario);
        this.departamento = departamento;
    }

    mostrarDetalles(){
        return alert(`Su nombre es ${this.nombre}, su salario es de ${this.salario} y pertenece al departamento ${this.departamento}`)
    }
    
}

const empleado= new Empleado("Julian", 3000000);

const gerente = new Gerente("Camilo",10000000,"Antioquia");

empleado.mostrarDetalles();
gerente.mostrarDetalles();