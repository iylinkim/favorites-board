import { InputDialog } from "./components/page/dialog/dialog.js";
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

export class App {
  private readonly page: Component & Composable;
  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent(PageItemComponent);
    this.page.attachTo(appRoot);

    const place = new PlaceComponent(
      "place",
      "Vintage Market",
      "My favorite place"
    );
    this.page.addChild(place);

    const video = new VideoComponent(
      "video",
      "Jazz Music",
      "My favorite music",
      "https://youtu.be/6ueuHf3dX5k"
    );
    this.page.addChild(video);

    const image = new ImageComponent(
      "image",
      "Travel picture",
      "My favorite image",
      "https://picsum.photos/500/300"
    );
    this.page.addChild(image);

    const note = new NoteComponent("note", "Things to do", "do assignments");
    this.page.addChild(note);

    const placeBtn = document.querySelector("#new_place")! as HTMLButtonElement;
    placeBtn?.addEventListener("click", () => {
      const dialog = new InputDialog();

      dialog.setOnCloseListener(() => {
        dialog.removeFrom(document.body);
      });

      dialog.setOnSubmitListener(() => {
        dialog.removeFrom(document.body);
      });

      dialog.attachTo(document.body);
    });
  }
}

new App(document.querySelector(".document")! as HTMLElement);
