import { html, css, LitElement } from 'lit';
import { generalStyles } from './_module-styles';

export class TaskApp extends LitElement {

  static get styles(){
    return [ generalStyles ];
  }

  static get properties(){
    return {
      descripcionTarea: {type: String},
      listaTareas : { type: Array}
    };
  }

  constructor(){
    super();
    this.descripcionTarea = ' ';
    this.listaTareas= [];
    this.timers = [];
  }

  render() {
    var listaTareasArr = [];
    this.listaTareas.forEach((tareas, index)=>{
      listaTareasArr.push(html`
      <input type="checkbox" class="item" id='cb_${this.descripcionTarea}' @change=${(event) => this.setTimer(event,index)}>
      <label class="label" id="label">${tareas}</label>
      <button @click=${() => this.editTask(index)}>Editar</button>
      <button @click=${() => this.removeTask(index)}>Delete</button>
      <br>`);

        try {
          if(index === this.listaTareas.length -1){
            this.timers[index] = {
              timeout1: setTimeout(()=>{
                console.log('1');
                this.colors(index, '#9AD576');
              },2000),
              timeout2: setTimeout(()=>{
                this.colors(index, '#F6FF99');
              },5000),
              timeout3: setTimeout(()=>{
                this.colors(index, '#F97171');
              },8000)
            };
          }
        } catch (error) {
          alert('Opps ha ocurrido un error!!!')
        }
      
    });
console.log(this.timers);

    return html`
    <div class="main-container">
      <h1 class="title">Task App</h1>
      
      <description-task class="input-text" id="inputText" value=${this.descripcionTarea} @keydown="${this.inputKeyDown}"></description-task>
      
      <div id="taskContainer">
        ${listaTareasArr}
      </div>
        <div class="btn-container">
      <button class="btn-delete" @click=${this.removeCheckBox}>Borrar tareas</button></div>

        </div>
      
    `;
  }


  inputKeyDown(e) {
    if (e.key === 'Enter') {
      this.descripcionTarea = e.target.value.trim(); //  trim() para eliminar espacios en blanco al inicio y al final
  
      if (this.descripcionTarea === '') {
        alert('Debes agregar una tarea.');
        return; // Detiene la ejecución si no se ingresó ninguna tarea
      }
  
      this.listaTareas.push(this.descripcionTarea);
      this.resetTexto(e);
    }
  }
  

  resetTexto(e){
    this.descripcionTarea = '';
    e.target.value = '';
  }
  setTimer(event, index) {
    
    const labels = this.shadowRoot.querySelectorAll('.item + label');
    const checkbox = event.target;

    if (!checkbox.checked) {
      labels[index].style.textDecoration = 'none';
    } else {
        labels[index].style.color = 'black';
        labels[index].style.textDecoration = 'line-through';
        labels[index].style.background = 'none';
        clearTimeout(this.timers[index].timeout1);
        clearTimeout(this.timers[index].timeout2);
        clearTimeout(this.timers[index].timeout3);
      
    }
  }
  colors(index, color) {
    try {
      const label = this.shadowRoot.querySelectorAll('.item + label');
    label[index].style.background = color;
    } catch (error) {
    }
    
}
  removeCheckBox(){
    this.listaTareas = [];
  }

  removeTask(index) {
    this.listaTareas.splice(index, 1); // Elimina el elemento en la posición 'index' de 'listaTareas'
    this.requestUpdate(); // Actualiza la vista para reflejar el cambio
  }


  editTask(index) {
    const descriptionTask = this.shadowRoot.querySelector('.input-text');
    descriptionTask.value = this.listaTareas[index]; // Asigna el valor del ítem seleccionado al campo de entrada

    const confirmEdit = (e) => {
      if (e.key === 'Enter') {
        this.listaTareas[index] = descriptionTask.value; // Actualiza el valor del ítem en la lista
        this.listaTareas = this.listaTareas.filter((tarea) => tarea.trim() !== '');
        this.requestUpdate(); // Actualiza la vista para reflejar el cambio
        descriptionTask.removeEventListener('keydown', confirmEdit); // Quita el event listener cuando se confirma la edición
      }
    };
    descriptionTask.addEventListener('keydown', confirmEdit); // Escucha el evento de teclado para confirmar la edición al presionar Enter
  }

  /**
  editTask(index) {
    const descriptionTask = this.shadowRoot.querySelector('.input-text');
    descriptionTask.value = this.listaTareas[index]; // Asigna el valor del ítem seleccionado al campo de entrada
  
    const confirmEdit = () => {
      this.listaTareas[index] = descriptionTask.value; // Actualiza el valor del ítem en la lista
      this.listaTareas = this.listaTareas.filter((tarea) => tarea.trim() !== '');
      this.requestUpdate(); // Actualiza la vista para reflejar el cambio
      descriptionTask.removeEventListener('blur', confirmEdit); // Quita el event listener cuando se confirma la edición
    };
  descriptionTask.addEventListener('blur', confirmEdit); // Escucha el evento de pérdida de foco para confirmar la edición
  }**/
}