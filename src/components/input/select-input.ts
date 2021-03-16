import { BaseComponent } from "./../component.js";
export class SelectSectionInput extends BaseComponent<HTMLElement> {
  constructor() {
    super(`
        <div class="form_container">
            <label for="title">Search</label>
            <select id="select">
                <option value="daily">daily</option>
                <option value="important">important</option>
                <option value="todo">todo</option>
            </select>
        </div>
        `);
  }

  get category(): string {
    const element = this.element.querySelector("#select")! as HTMLSelectElement;
    return element.value;
  }
}
