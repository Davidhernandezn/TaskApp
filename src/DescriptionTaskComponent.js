import { html, css, LitElement } from 'lit';
import { generalStyles } from './_module-styles';
export class DescriptionTaskComponent extends LitElement{
  
  static get styles(){
    return [ generalStyles ];
  }
  
  static get properties(){
    return {
        value: { type: String}
        
    };
}

render(){
    return html`
    <div>
    <input class="input-text" type="text" .value="${this.value}"
                    @input="${this.inputKeyDown}">
    </div>
    `;
}
inputKeyDown(e){
  this.value = e.target.value;
    this.dispatchEvent(new CustomEvent('keydown',{
        detail: this.target
    }));
}

}