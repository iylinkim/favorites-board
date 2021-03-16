import { BaseComponent } from "./../component.js";
export class FileSectionInput extends BaseComponent<HTMLElement> {
  constructor() {
    super(`
        <div class="form_container">
            <label for="title">File</label>
            <input type="file" id="file">
        </div>
        `);
  }

  get file(): string {
    const element = this.element.querySelector("#file")! as HTMLInputElement;
    return element.value;
  }
}
