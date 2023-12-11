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
      <button class="btn-edit"  @click=${() => this.editTask(index)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
</svg></button>
      <button class="btn-detele" @click=${() => this.removeTask(index)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
  <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
</svg></button>
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
      <h1 class="title">Mis Tareas</h1>
      
      <description-task class="input-text" id="inputText" value=${this.descripcionTarea} @keydown="${this.inputKeyDown}"></description-task>
      <div class="tareas">
  <div id="taskContainer">
        ${listaTareasArr}
      </div>
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