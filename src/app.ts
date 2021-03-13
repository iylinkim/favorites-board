import { PlaceComponent } from "./components/page/item/place.js";
import { PageComponent } from "./components/page/page.js";
export class App {
  private readonly page: PageComponent;
  private readonly place: PlaceComponent;
  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent();
    this.page.attachTo(appRoot);

    this.place = new PlaceComponent(
      "place",
      "Vintage Market",
      "My favorite place"
    );
    this.place.attachTo(appRoot, "afterend");
  }
}

new App(document.querySelector(".document")! as HTMLElement);
