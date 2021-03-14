import { PlaceComponent } from "./components/page/item/place.js";
import { PageComponent, PageItemComponent } from "./components/page/page.js";
export class App {
    constructor(appRoot) {
        this.page = new PageComponent(PageItemComponent);
        this.page.attachTo(appRoot);
        const place = new PlaceComponent("place", "Vintage Market", "My favorite place");
        this.page.addChild(place);
    }
}
new App(document.querySelector(".document"));
