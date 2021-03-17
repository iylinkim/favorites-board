import { BaseComponent } from "./../component.js";
export class FileSectionInput extends BaseComponent<HTMLElement> {
  private file_result:string = "";

  constructor() {
    super(`
        <div class="form_container">
            <label for="title">File</label>
            <input type="file" accept="image/*" id="file">
        </div>
        `);
    const element = this.element.querySelector("#file")! as HTMLInputElement;
    element.onchange = () => {
      const files = element.files! as FileList;
      const reader = new FileReader();

      reader.onloadend = (finishedEvent) => {
        const fileReader = finishedEvent.currentTarget! as FileReader;
        this.file_result = fileReader.result! as string;
      };
      reader.readAsDataURL(files[0]! as File);
    };
  }

  get file(): string {
    return this.file_result;
  }
}
