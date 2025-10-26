// TODO: Variables globales
let presupuesto = 0;
let gastos = []
let idGasto = 0

// TODO: Funciones adicionales
function actualizarPresupuesto(nuevoPresupuesto) {

    if (nuevoPresupuesto > 0) {
        presupuesto = nuevoPresupuesto
        console.log(presupuesto)
        return presupuesto
    } else if (nuevoPresupuesto = 0){
        return 0
    } else if (nuevoPresupuesto < 0) {
        alert("Debes introducir un valor positivo")
        return -1
    } else {
        return -1
    }
}

function mostrarPresupuesto() {
    return `Tu presupuesto actual es de ${presupuesto} €`
}

function CrearGasto(descripcion, valor) {
    this.descripcion = descripcion
    if (valor >= 0) {
        this.valor = valor
    } else {
        this.valor = 0
    }
}

CrearGasto.prototype.mostrarGasto = function() {
    return `Gasto correspondiente a ${this.descripcion} con valor ${this.valor} €`
}

CrearGasto.prototype.actualizarDescripcion = function(nuevaDescripcion) {
    this.descripcion = nuevaDescripcion
    return this.descripcion
}

CrearGasto.prototype.actualizarValor = function(nuevoValor) {
    if (nuevoValor >= 0) {
        this.valor = nuevoValor
    }

    return this.valor
}

function listarGastos() {

}

function anyadirGasto() {

}

function borrarGasto() {

}

function calcularTotalGastos() {

}

function calcularBalance() {
    
}


// Exportación de funciones
export   {
    mostrarPresupuesto,
    actualizarPresupuesto,
    CrearGasto,
    listarGastos,
    anyadirGasto,
    borrarGasto,
    calcularTotalGastos,
    calcularBalance
}
