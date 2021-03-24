import { SelectSectionInput } from "./components/input/select-input.js";
import { UrlSectionInput } from "./components/input/url-input.js";
import { InputDialog, } from "./components/page/dialog/dialog.js";
import { NoteComponent } from "./components/page/item/note.js";
import { ImageComponent } from "./components/page/item/image.js";
import { VideoComponent } from "./components/page/item/video.js";
import { PageComponent, PageItemComponent, } from "./components/page/page.js";
import { FileSectionInput } from "./components/input/file-input.js";
export class App {
    constructor(appRoot, dialogRoot) {
        this.dialogRoot = dialogRoot;
        this.page = new PageComponent(PageItemComponent);
        this.page.attachTo(appRoot);
        this.bindElementToDialog("#new_video", UrlSectionInput, (input, title, comment) => new VideoComponent(title, comment, input.url));
        this.bindElementToDialog("#new_image", FileSectionInput, (input, title, comment) => {
            return new ImageComponent(title, comment, input.file);
        });
        this.bindElementToDialog("#new_note", SelectSectionInput, (input, title, comment) => new NoteComponent(title, comment, input.category));
    }
    bindElementToDialog(selector, InputComponent, makeSection) {
        const element = document.querySelector(selector);
        element.addEventListener("click", (e) => {
            const target = e.currentTarget;
            const dialog = new InputDialog(target.innerText);
            const input = new InputComponent();
            dialog.addChild(input);
            dialog.attachTo(this.dialogRoot);
            dialog.setOnCloseListener(() => {
                dialog.removeFrom(this.dialogRoot);
            });
            dialog.setOnSubmitListener(() => {
                if (dialog.title === "" || dialog.comment === "") {
                    alert("Please enter contents!");
                }
                else {
                    const image = makeSection(input, dialog.title, dialog.comment);
                    this.page.addChild(image);
                    dialog.removeFrom(this.dialogRoot);
                }
            });
        });
    }
}
new App(document.querySelector(".document"), document.body);
