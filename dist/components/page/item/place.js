import { BaseComponent } from "../../component.js";
export class PlaceComponent extends BaseComponent {
    constructor(category, title, info) {
        super(`
        <section class="place">
            <div class="place_holder"><canvas class="map"></canvas></div>
            <div class="place_info">
                <span class="category">Place</span>
                <h3 class="title">Place Title</h3>
                <p class="place_address"><span class="pin"></span>place address</p>
                <div class="info">place info area</div>
            </div>
        </section>
        `);
        const categoryElement = this.element.querySelector(".category");
        categoryElement.textContent = category;
        const titleElement = this.element.querySelector(".title");
        titleElement.textContent = title;
        const infoElement = this.element.querySelector(".info");
        infoElement.textContent = info;
    }
}
