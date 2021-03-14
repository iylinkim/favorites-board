import { BaseComponent } from "./../../component.js";
export class NoteComponent extends BaseComponent<HTMLElement> {
  constructor(category: string, title: string, info: string) {
    super(`
        <section class="item note">
            <div class="text note_info">
                <span class="category"></span>
                <h3 class="title"></h3>
                <div class="info"></div>
            </div>
        </section>
        `);

    const categoryElement = this.element.querySelector(
      ".category"
    )! as HTMLElement;
    categoryElement.textContent = category;

    const titleElement = this.element.querySelector(
      ".title"
    )! as HTMLHeadingElement;
    titleElement.textContent = title;

    const infoElement = this.element.querySelector(".info")! as HTMLElement;
    infoElement.textContent = info;
  }
}
