import { BaseComponent } from "./../../component.js";
export class ImageComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, info: string, src: string) {
    super(`
        <section class="item place">
            <div class="holder place_holder"><img class="image"/></div>
            <div class="text image_info">
                <h3 class="title">Image Title</h3>
                <div class="info">Image info area</div>
            </div>
        </section>
        `);

    const titleElement = this.element.querySelector(
      ".title"
    )! as HTMLHeadingElement;
    titleElement.textContent = title;

    const infoElement = this.element.querySelector(".info")! as HTMLElement;
    infoElement.textContent = info;

    const imageElement = this.element.querySelector(
      ".image"
    )! as HTMLImageElement;
    imageElement.src = src;
  }
}
