import { Composable } from "./../page.js";
import { BaseComponent, Component } from "./../../component.js";

type onCloseListener = () => void;
type onSubmitListener = () => void;

export interface FileData{
  readonly file:string;
}
export interface SearchData{
  readonly search:string;
}
export interface SelectData{
  readonly category:string;
}
export interface UrlData{
  readonly url:string;
}

export class InputDialog
  extends BaseComponent<HTMLElement>
  implements Composable {
  closeListener?: onCloseListener;
  submitListener?: onSubmitListener;

/*
    <p class="comment_title">Comment</p>
                <input type="text" class="comment_input"/>
*/

  constructor() {
    super(`
        <section class="dialog">
            <div id="dialog_body">
              <div class="form_container">
                <label for="title">Title</label>
                <input type="text" id="title">
              </div>
              <div class="form_container">
                  <label for="title">Comment</label>
                  <input type="text" id="comment">
              </div>
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

  get title():string{
    const element = document.querySelector("#title")! as HTMLButtonElement;
    return element.value;
  }
  get comment():string{
    const element = document.querySelector("#comment")! as HTMLButtonElement;
    return element.value;
  }

  setOnCloseListener(listener: onCloseListener) {
    this.closeListener = listener;
  }

  setOnSubmitListener(listener: onSubmitListener) {
    this.submitListener = listener;
  }

  addChild(child: Component) {
    const body = this.element.querySelector("#dialog_body")! as HTMLElement;
    child.attachTo(body);
  }
}
