import { BaseComponent, Component } from "./../component.js";

export interface Composable {
  addChild(child: Component): void;
}

type OnCloseListener = () => void;

type SectionContainerConstructor = {//생성자를 정의하는 type
  new ():SectionContainer; //생성자는 아무것도 받지 않음
}

interface SectionContainer extends Component, Composable {
  setOnCloseListener(listener: OnCloseListener): void;
}

export class PageItemComponent
  extends BaseComponent<HTMLLIElement>
  implements SectionContainer {
  private closeListener?: OnCloseListener;

  constructor() {
    super(`
      <li class="page_item">
        <section class="page_item_body"></section>
        <div class="page_item_controls">
          <button class="close"><i class="fas fa-times"></i></button>
        </div>
      </li>
    `);

    const closeBtn = this.element.querySelector(".close")! as HTMLButtonElement;
    closeBtn.onclick = () => {
      this.closeListener && this.closeListener();
    };
  }
  addChild(child: Component) {
    const container = this.element.querySelector(
      ".page_item_body"
    )! as HTMLElement;
    child.attachTo(container);
  }

  setOnCloseListener(listener: OnCloseListener) {
    this.closeListener = listener;
  }
}

export class PageComponent
  extends BaseComponent<HTMLUListElement>
  implements Composable {
  constructor(private pageItemConstructor:SectionContainerConstructor) {
    super(`<ul class="page"></ul>`);
  }

  addChild(section: Component) {
    const item = new this.pageItemConstructor();
    item.addChild(section);
    item.attachTo(this.element, "beforeend");
    item.setOnCloseListener(() => {
      item.removeFrom(this.element);
    });
  }
}
