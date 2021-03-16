import { UrlSectionInput } from './components/input/url-input.js';
import {
  InputDialog,
  FileData,
  SearchData,
  SelectData,
  UrlData
} from "./components/page/dialog/dialog.js";
import { NoteComponent } from "./components/page/item/note.js";
import { ImageComponent } from "./components/page/item/image.js";
import { Component } from "./components/component.js";
// import { PlaceComponent } from "./components/page/item/place.js";
import { VideoComponent } from "./components/page/item/video.js";
import {
  Composable,
  PageComponent,
  PageItemComponent,
} from "./components/page/page.js";

type InputComponentConstructor<
  T = (FileData | SearchData | SelectData | UrlData) & Component
> = {
  new (): T; //T타입을 새로 생성함
};

export class App {
  private readonly page: Component & Composable;
  constructor(appRoot: HTMLElement, private dialogRoot: HTMLElement) {
    this.page = new PageComponent(PageItemComponent);
    this.page.attachTo(appRoot);

    // const place = new PlaceComponent(
    //   "place",
    //   "Vintage Market",
    //   "My favorite place"
    // );
    // this.page.addChild(place);

    const image = new ImageComponent(
      "image",
      "Travel picture",
      "My favorite image",
      "https://picsum.photos/500/300"
    );
    this.page.addChild(image);

    const note = new NoteComponent("note", "Things to do", "do assignments");
    this.page.addChild(note);

    // this.bindElementToDialog<TextSectionInput>(
    //   "#new_place",
    //   TextSectionInput,
    //   (input: TextSectionInput) =>
    //     new PlaceComponent(input.title, input.comment)
    // );

    this.bindElementToDialog<UrlSectionInput>(
      "#new_video",
      UrlSectionInput,
      (input: UrlSectionInput, title:string, comment:string) =>
        new VideoComponent(title, comment, input.url)
    );
  }

  private bindElementToDialog<
    T extends (FileData | SearchData | SelectData | UrlData) & Component
  >(
    selector: string,
    InputComponent: InputComponentConstructor<T>,
    makeSection: (input: T, title:string, comment:string) => Component //전달된 T타입을 가진 input으로 Component를 만드는 콜백함수
  ) {
    const element = document.querySelector(selector)! as HTMLButtonElement;
    element.addEventListener("click", () => {
      const dialog = new InputDialog();
      const input = new InputComponent();

      dialog.addChild(input);
      dialog.attachTo(this.dialogRoot);
      // console.log(dialog.title, dialog.comment)

      dialog.setOnCloseListener(() => {
        dialog.removeFrom(this.dialogRoot); //close버튼 누르면 document.body에서 dialog 제거
      });
      dialog.setOnSubmitListener(() => {
        const image = makeSection(input, dialog.title, dialog.comment);
        console.log(image)
        this.page.addChild(image);
        dialog.removeFrom(this.dialogRoot); //submit후 dialog 창 없애주어야 함
      });
    });
  }
}

new App(document.querySelector(".document")! as HTMLElement, document.body);
