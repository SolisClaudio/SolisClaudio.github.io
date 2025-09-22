class MiComponente extends HTMLElement{
    constructor(){
        super();
        this.innerHTML= `
        <p>Avatar</p>
        `;
    }
}

customElements.define("team-solis", MiComponente)