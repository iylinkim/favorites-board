import { BaseComponent } from "./../component.js";
export class SelectSectionInput extends BaseComponent {
    constructor() {
        super(`
        <div class="form_container">
            <label for="title">Category</label>
            <select id="select">
                <option value="daily">daily</option>
                <option value="important">important</option>
                <option value="todo">todo</option>
            </select>
        </div>
        `);
    }
    get category() {
        const element = this.element.querySelector("#select");
        return element.value;
    }
}
//# sourceMappingURL=select-input.js.map