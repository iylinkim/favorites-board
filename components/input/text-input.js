import { BaseComponent } from "./../component.js";
export class TextSectionInput extends BaseComponent {
    constructor() {
        super(`
    <div>
        <div class="form_container">
            <label for="title">Title</label>
            <input type="text" id="title">
        </div>
        <div class="form_container">
            <label for="title">Comment</label>
            <input type="text" id="comment">
        </div>
    </div> 
        `);
    }
    get title() {
        const element = this.element.querySelector("#title");
        return element.value;
    }
    get comment() {
        const element = this.element.querySelector("#comment");
        return element.value;
    }
}
