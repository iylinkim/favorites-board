import { SearchSectionInput } from './components/input/search-input.js';
import { SelectSectionInput } from "./components/input/select-input.js";
import { UrlSectionInput } from "./components/input/url-input.js";
import {
  InputDialog,
  FileData,
  SearchData,
  SelectData,
  UrlData,
} from "./components/page/dialog/dialog.js";
import { NoteComponent } from "./components/page/item/note.js";
import { ImageComponent } from "./components/page/item/image.js";
import { Component } from "./components/component.js";
import { PlaceComponent } from "./components/page/item/place.js";
import { VideoComponent } from "./components/page/item/video.js";
import {
  Composable,
  PageComponent,
  PageItemComponent,
} from "./components/page/page.js";
import { FileSectionInput } from "./components/input/file-input.js";

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

    this.bindElementToDialog<SearchSectionInput>(
      "#new_place",
      SearchSectionInput,
      (input: SearchSectionInput, title: string, comment: string) =>
        new PlaceComponent(title, comment, input.search)
    );

    this.bindElementToDialog<UrlSectionInput>(
      "#new_video",
      UrlSectionInput,
      (input: UrlSectionInput, title: string, comment: string) =>
        new VideoComponent(title, comment, input.url)
    );

    this.bindElementToDialog<FileSectionInput>(
      "#new_image",
      FileSectionInput,
      (input: FileSectionInput, title: string, comment: string) => {
        console.log(input);
        return new ImageComponent(title, comment, input.file);
      }
    );

    this.bindElementToDialog<SelectSectionInput>(
      "#new_note",
      SelectSectionInput,
      (input: SelectSectionInput, title: string, comment: string) =>
        new NoteComponent(title, comment, input.category)
    );
  }

  private bindElementToDialog<
    T extends (FileData | SearchData | SelectData | UrlData) & Component
  >(
    selector: string,
    InputComponent: InputComponentConstructor<T>,
    makeSection: (input: T, title: string, comment: string) => Component //전달된 T타입을 가진 input으로 Component를 만드는 콜백함수
  ) {
    const element = document.querySelector(selector)! as HTMLButtonElement;
    element.addEventListener("click", () => {
      const dialog = new InputDialog();
      const input = new InputComponent();

      dialog.addChild(input);
      dialog.attachTo(this.dialogRoot);

      dialog.setOnCloseListener(() => {
        dialog.removeFrom(this.dialogRoot); //close버튼 누르면 document.body에서 dialog 제거
      });
      dialog.setOnSubmitListener(() => {
        const image = makeSection(input, dialog.title, dialog.comment);
        this.page.addChild(image);
        dialog.removeFrom(this.dialogRoot); //submit후 dialog 창 없애주어야 함
      });
    });
  }
}

new App(document.querySelector(".document")! as HTMLElement, document.body);
