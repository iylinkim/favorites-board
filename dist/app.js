import { PageComponent } from "./components/page.js";
export class App {
    constructor(appRoot) {
        this.page = new PageComponent();
        this.page.attachTo(appRoot);
    }
}
new App(document.querySelector(".document"));
