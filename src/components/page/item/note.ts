import { BaseComponent } from "./../../component.js";
export class NoteComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, info: string, note_category:string) {
    super(`
        <section class="item note">
            <div class="text note_info">
                <span class="item_category"></span>
                <h3 class="title"></h3>
                <div class="info"></div>
                <span class="note_category"></span>
            </div>
        </section>
        `);

    // const categoryElement = this.element.querySelector(
    //   ".category"
    // )! as HTMLElement;
    // categoryElement.textContent = category;

    const titleElement = this.element.querySelector(
      ".title"
    )! as HTMLHeadingElement;
    titleElement.textContent = title;

    const infoElement = this.element.querySelector(".info")! as HTMLElement;
    infoElement.textContent = info;

    const noteCategoryElement = this.element.querySelector(".note_category")! as HTMLElement;
    noteCategoryElement.textContent = note_category;
  }
}
