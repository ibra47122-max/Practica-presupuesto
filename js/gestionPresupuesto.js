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

function CrearGasto(descripcion, valor, fecha, ...etiquetas) {
    this.descripcion = descripcion
    this.etiquetas = [...etiquetas]
    if (valor >= 0) {
        this.valor = valor
    } else {
        this.valor = 0
    }

    if (fecha === undefined || new Date(fecha.toString()) === "Invalid Date" || typeof fecha !== 'string') {
        console.log("No se ha pasado fecha")
        this.fecha = new Date()
    } else {
        this.fecha = new Date(fecha).getTime()
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

CrearGasto.prototype.mostrarGastoCompleto = function() {
    const fechaFormateada = new Date(this.fecha).toLocaleString()
    
    let resultado = `Gasto correspondiente a ${this.descripcion} con valor ${this.valor} €.`
    resultado += `\nFecha: ${fechaFormateada}`
    resultado += `\nEtiquetas:`
    
    this.etiquetas.forEach(etiqueta => {
        resultado += `\n- ${etiqueta}`
    })
    resultado += `\n` 
    
    return resultado
}

function listarGastos() {
    return gastos
}

function anyadirGasto(CrearGasto) {

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
