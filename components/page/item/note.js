import { BaseComponent } from "./../../component.js";
export class NoteComponent extends BaseComponent {
    constructor(title, info, note_category) {
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
        const titleElement = this.element.querySelector(".title");
        titleElement.textContent = title;
        const infoElement = this.element.querySelector(".info");
        infoElement.textContent = info;
        const noteCategoryElement = this.element.querySelector(".note_category");
        noteCategoryElement.classList.add(note_category);
        noteCategoryElement.textContent = note_category;
    }
}
