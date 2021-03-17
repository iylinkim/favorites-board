import { BaseComponent } from "./../component.js";
export class SearchSectionInput extends BaseComponent<HTMLElement> {
  constructor() {
    super(`
        <div class="form_container">
            <label for="title">Search</label>
            <input type="text" id="search">
            <i class="fas fa-search"></i>
            <canvas></canvas>
        </div>
        `);
  }

  get search(): string {
    const element = this.element.querySelector("#search")! as HTMLInputElement;
    return element.value;
  }
}
