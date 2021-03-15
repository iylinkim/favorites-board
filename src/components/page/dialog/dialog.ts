import { Composable } from "./../page.js";
import { BaseComponent, Component } from "./../../component.js";

type onCloseListener = () => void;
type onSubmitListener = () => void;

export class InputDialog
  extends BaseComponent<HTMLElement>
  implements Composable {
  closeListener?: onCloseListener;
  submitListener?: onSubmitListener;

  constructor() {
    super(`
        <section class="dialog">
            <div id="dialog_body">
                <p class="comment_title">Comment</p>
                <input type="text" class="comment_input"/>
                <button class="close"><i class="fas fa-times"></i></button>
                <button class="dialog_submit">ADD</button>
            </div>
        </section>
        `);

    const closeBtn = this.element.querySelector(".close")! as HTMLButtonElement;
    closeBtn.onclick = () => {
        this.closeListener && this.closeListener();
    }

    const submitBtn = this.element.querySelector(".dialog_submit")! as HTMLButtonElement;
    submitBtn.onclick = () => {
        this.submitListener && this.submitListener();
    }
  }

  setOnCloseListener(listener: onCloseListener) {
    this.closeListener = listener;
  }

  setOnSubmitListener(listener: onSubmitListener) {
    this.submitListener = listener;
  }

  addChild(child: Component) {
    const body = this.element.querySelector(".dialog_body")! as HTMLElement;
    child.attachTo(body);
  }
}
