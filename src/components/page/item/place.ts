import { BaseComponent } from "../../component.js";
export class PlaceComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, info: string) {
    super(`
        <section class="item place">
            <div class="holder place_holder"><canvas class="map"></canvas></div>
            <div class="text place_info">
                <span class="category">Place</span>
                <h3 class="title">Place Title</h3>
                <p class="place_address">
                  <span class="pin"><i class="fas fa-map-marker-alt"></i></span>place address
                </p>
                <div class="info">place info area</div>
            </div>
        </section>
        `);

    // const categoryElement = this.element.querySelector(".category")! as HTMLElement;
    // console.log(categoryElement)
    // categoryElement.textContent = category;

    const titleElement = this.element.querySelector(
      ".title"
    )! as HTMLHeadingElement;
    titleElement.textContent = title;

    const infoElement = this.element.querySelector(".info")! as HTMLElement;
    infoElement.textContent = info;
  }
}
