import { BaseComponent } from "./../../component.js";
export class InputDialog extends BaseComponent {
    constructor(title) {
        super(`
        <section class="dialog">
            <div id="dialog_body">
            <h4 class="category_title"></h4>
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
        const titleElement = this.element.querySelector(".category_title");
        titleElement.textContent = title;
        const closeBtn = this.element.querySelector(".close");
        closeBtn.onclick = () => {
            this.closeListener && this.closeListener();
        };
        this.element.onclick = (e) => {
            const target = e.target;
            if (target.matches("section.dialog")) {
                this.closeListener && this.closeListener();
            }
        };
        const submitBtn = this.element.querySelector(".dialog_submit");
        submitBtn.onclick = () => {
            this.submitListener && this.submitListener();
        };
    }
    get title() {
        const element = document.querySelector("#title");
        return element.value;
    }
    get comment() {
        const element = document.querySelector("#comment");
        return element.value;
    }
    setOnCloseListener(listener) {
        this.closeListener = listener;
    }
    setOnSubmitListener(listener) {
        this.submitListener = listener;
    }
    addChild(child) {
        const body = this.element.querySelector("#dialog_body");
        child.attachTo(body, "beforeend");
    }
}
