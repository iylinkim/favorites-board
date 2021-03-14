import { Component } from "./components/component.js";
import { PlaceComponent } from "./components/page/item/place.js";
import { Composable, PageComponent, PageItemComponent } from "./components/page/page.js";

export class App {
  private readonly page: Component & Composable;
  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent(PageItemComponent);
    this.page.attachTo(appRoot);

    const place = new PlaceComponent(
      "place",
      "Vintage Market",
      "My favorite place"
    );
    this.page.addChild(place);
  }
}

new App(document.querySelector(".document")! as HTMLElement);
