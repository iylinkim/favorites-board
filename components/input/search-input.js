import { BaseComponent } from "./../component.js";
export class SearchSectionInput extends BaseComponent {
    constructor() {
        super(`
        <div class="form_container">
            <label for="title">Search</label>
            <input type="text" id="search"/>
            <i class="fas fa-search"></i>
            <canvas></canvas>
        </div>
        `);
    }
    get search() {
        const element = this.element.querySelector("#search");
        return element.value;
    }
}
//# sourceMappingURL=search-input.js.map