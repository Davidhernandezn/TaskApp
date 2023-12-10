import { LitElement, css, html } from 'lit';
import { TaskApp } from "./TaskApp";
import { DescriptionTaskComponent } from "./DescriptionTaskComponent";
import { Header } from './header'; 
import { generalStyles } from './_module-styles';

class SharedStyles extends LitElement {
  static get styles(){
    return [generalStyles];
  }
}

window.customElements.define('shared-styles', SharedStyles);
window.customElements.define('header-component', Header);
window.customElements.define('task-app', TaskApp);
window.customElements.define('description-task', DescriptionTaskComponent);
