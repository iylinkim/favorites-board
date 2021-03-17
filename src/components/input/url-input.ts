import { BaseComponent } from "./../component.js";
export class UrlSectionInput extends BaseComponent<HTMLElement> {
  constructor() {
    super(`
        <div class="form_container">
            <label for="title">Url</label>
            <input type="text" id="url" required/>
        </div>
        `);
  }

  get url(): string {
    const element = this.element.querySelector("#url")! as HTMLInputElement;
    return element.value;
  }
}
