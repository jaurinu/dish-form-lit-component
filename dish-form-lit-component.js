import { html, LitElement } from 'lit-element';
import style from './dish-form-lit-component-styles.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-toast/paper-toast.js';

class DishFormLitComponent extends LitElement {
  static get properties() {
    return {
      hello: { type: String },
      image: { type: String },
      name: { type: String },
      energyValue: { type: Number },
      rate: { type: Number },
      price: { type: Number },
      description: { type: String },
      newDish: { type: Object },
      listNewDish: {type: Array}
    };
  }

  static get styles() {
    return style;
  }

  constructor() {
    super();
    this.hello = 'Hello';
    this.newDish = {
      image: this.image,
      name: this.name,
      energyValue: this.energyValue,
      rate: this.rate,
      price: this.price,
      description: this.description
    }
  }
   

  createNewDish() {
    const imageNode = this.shadowRoot.querySelector("#image");
    const nameDishNode = this.shadowRoot.querySelector("#name-dish");
    const energyValueNode = this.shadowRoot.querySelector("#energy-value");
    const rateNode = this.shadowRoot.querySelector("#rate");
    const priceNode = this.shadowRoot.querySelector("#price");
    const descriptionNode = this.shadowRoot.querySelector("#description");

  
          this.newDish = {
          image: imageNode.value,
          name: nameDishNode.value,
          energyValue: energyValueNode.value,
          rate: rateNode.value,
          price: priceNode.value,
          description: descriptionNode.value
          }

          console.log(this.newDish)
 
    imageNode.value = ""
    nameDishNode.value = ""
    energyValueNode.value = ""
    rateNode.value = ""
    priceNode.value = ""
    descriptionNode.value = ""
 
    // this.openToast()
    }
  
   

  render() {
    return html`
        <p>Some static DOM</p>
        <h2>${this.hello} dish-form-lit-component</h2>
        <form>
      <paper-input always-float-label label="Imagen" type="text" id="image" .value=${this.image}></paper-input>
      <paper-input always-float-label label="Nombre del platillo" type="text" id="name-dish"></paper-input>
      <paper-input always-float-label label="Calorías" type="number" id="energy-value">
          <div slot="suffix">cal</div>
      </paper-input>
      <paper-input always-float-label label="Valoración" type="number" id="rate"></paper-input>
      <paper-input always-float-label label="Precio" type="number" id="price">
          <div slot="prefix">$</div>
      </paper-input>
      <paper-input always-float-label label="Descripción" type="text" id="description"></paper-input>      
    </form>
    <div>
      <paper-button raised class="green" id="create" @click=${this.createNewDish}       >Crear</paper-button>
    </div>
    <paper-toast id="toast0" text="Platillo creado"></paper-toast>
      `;
    }
}

window.customElements.define("dish-form-lit-component", DishFormLitComponent);
