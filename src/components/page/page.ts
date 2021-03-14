import { BaseComponent, Component } from "./../component.js";

export interface Composable {
  addChild(child: Component): void;
}

export class PageItemComponent extends BaseComponent<HTMLLIElement> implements Composable{
  constructor() {
    super(`
      <li class="page_item">
        <section class="page_item_body"></section>
        <div class="page_item_controls">
          <button class="close">❌</button>
        </div>
      </li>
    `);
  }
  addChild(child: Component) {
    const container = this.element.querySelector(
      ".page_item_body"
    )! as HTMLElement;
    child.attachTo(container);
  }
}

export class PageComponent extends BaseComponent<HTMLUListElement> implements Composable{
  constructor() {
    super(`<ul class="page"></ul>`);
  }

  addChild(section: Component) {
    const item = new PageItemComponent();
    item.addChild(section);
    item.attachTo(this.element, "beforeend");
  }
}
