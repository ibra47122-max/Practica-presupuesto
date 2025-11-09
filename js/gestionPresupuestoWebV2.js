import {
    mostrarPresupuesto,
    actualizarPresupuesto,
    CrearGasto,
    listarGastos,
    anyadirGasto,
    borrarGasto,
    calcularTotalGastos,
    calcularBalance,
    filtrarGastos,
    agruparGastos
} from '../js/gestionPresupuesto.js';  

class GastoItem extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" }); //Crea el shadow DOM
    }
  
    set gasto(valor) {
      this._gasto = valor;
      this.render();
    }
  
    get gasto() {
      return this._gasto;
    }
  
    render() {
      const template = document.getElementById("plantilla-gasto");
      const clone = template.content.cloneNode(true);
  
      // Se guardan los datos de del gasto en el text content
      clone.getElementById("descripcion").textContent = this._gasto.descripcion;
      clone.getElementById("valor").textContent = this._gasto.valor;
      clone.getElementById("fecha").textContent = this._gasto.fecha;
      clone.getElementById("etiquetas").textContent = this._gasto.etiquetas;
  
      const btnEditar = clone.getElementById("btn-editar");
      const btnBorrar = clone.getElementById("btn-borrar");
      const form = clone.getElementById("form-edicion");
      const btnCancelar = clone.getElementById("btn-cancelar");
  
      // Cuando se hace click en editar se altera la clase visible para mostrar el formulario
      btnEditar.addEventListener("click", () => {
        form.classList.toggle("visible");
      });
  
      // Cuando se hace click para borrar sale la alerta para confirar
      btnBorrar.addEventListener("click", () => {
        if (confirm("¿Seguro que quieres borrar este gasto?")) {
          this.remove();
          borrarGasto(this._gasto)
        }
      });
  
      console.log(listarGastos())
  
      // Cancela el formulario de edicion del gasto
      btnCancelar.addEventListener("click", () => {
        form.classList.remove("visible");
      });
  
      // Se guarda la edicion del gasto
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        this._gasto.descripcion = form.querySelector("#input-descripcion").value;
        this._gasto.valor = parseFloat(form.querySelector("#input-valor").value);
        this._gasto.fecha = form.querySelector("#input-fecha").value;
        this._gasto.etiquetas = form.querySelector("#input-etiquetas").value.split(",");
        this.render();
      });
  
      this.shadowRoot.innerHTML = "";
      this.shadowRoot.appendChild(clone);
    }
  }
  