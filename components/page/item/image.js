import { BaseComponent } from "./../../component.js";
export class ImageComponent extends BaseComponent {
    constructor(title, info, src) {
        super(`
        <section class="item place">
            <div class="holder place_holder"><img class="image"/></div>
            <div class="text image_info">
                <h3 class="title">Image Title</h3>
                <div class="info">Image info area</div>
            </div>
        </section>
        `);
        const titleElement = this.element.querySelector(".title");
        titleElement.textContent = title;
        const infoElement = this.element.querySelector(".info");
        infoElement.textContent = info;
        const imageElement = this.element.querySelector(".image");
        imageElement.src = src;
    }
}
//# sourceMappingURL=image.js.map