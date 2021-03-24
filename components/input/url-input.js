import { BaseComponent } from "./../component.js";
export class UrlSectionInput extends BaseComponent {
    constructor() {
        super(`
        <div class="form_container">
            <label for="title">Url</label>
            <input type="text" id="url" required/>
        </div>
        `);
    }
    get url() {
        const element = this.element.querySelector("#url");
        return element.value;
    }
}
//# sourceMappingURL=url-input.js.map