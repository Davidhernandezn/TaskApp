import { html, css, LitElement } from 'lit';
import { generalStyles } from './_module-styles';
export class Header extends LitElement{
  
  static get styles(){
    return [ generalStyles ];
  }
  
  static get properties(){
    return {
    fechaActual : {type: String}
    };
  }

  constructor(){
    super();
    this.descripcionTarea = ' ';
    this.listaTareas= [];
    this.timers = [];
    this.fechaActual = '';
  }

  connectedCallback() {
    super.connectedCallback();
    //la función getFechas() se llamará automáticamente tan pronto como el componente esté conectado al DOM. 
    this.getFechas(); // Llama a la función al cargar el componente
  }

render(){
    return html`
    <div class="header">
    <h2>¡Hola! Bienvenido  TaskApp</h2> <span>${this.fechaActual}</span>
    </div>
    `;
}

getFechas(){
let meses = new Array ("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre");
let diasSemana = new Array("Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado");
let f = new Date();
this.fechaActual = (diasSemana[f.getDay()] + ", " + f.getDate() + " de " + meses[f.getMonth()] + " de " + f.getFullYear());
}
}