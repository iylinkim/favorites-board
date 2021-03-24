import { BaseComponent } from "./../component.js";
export class FileSectionInput extends BaseComponent {
    constructor() {
        super(`
        <div class="form_container">
            <label for="title">File</label>
            <input type="file" accept="image/*" id="file"/>
        </div>
        `);
        this.file_result = "";
        const element = this.element.querySelector("#file");
        element.onchange = () => {
            const files = element.files;
            const reader = new FileReader();
            reader.onloadend = (finishedEvent) => {
                const fileReader = finishedEvent.currentTarget;
                this.file_result = fileReader.result;
            };
            reader.readAsDataURL(files[0]);
        };
    }
    get file() {
        return this.file_result;
    }
}
