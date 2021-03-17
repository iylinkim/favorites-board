import { BaseComponent } from "./../../component.js";
export class VideoComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, info: string, url:string) {
    super(`
        <section class="item video">
            <div class="holder video_holder">
                <iframe class="video_iframe"></iframe>
            </div>
            <div class="text video_info">
                <h3 class="title">Video Title</h3>
                <div class="info">place info area</div>
            </div>
        </section>
        `);

    const iframe = this.element.querySelector(".video_iframe")! as HTMLIFrameElement;
    iframe.src = this.convertToEmbeddedURL(url);
    console.log(url, this.convertToEmbeddedURL(url));
    // const categoryElement = this.element.querySelector(
    //   ".category"
    // )! as HTMLElement;
    // categoryElement.textContent = category;

    const titleElement = this.element.querySelector(
      ".title"
    )! as HTMLHeadingElement;
    titleElement.textContent = title;

    const infoElement = this.element.querySelector(".info")! as HTMLElement;
    infoElement.textContent = info;
  }

  private convertToEmbeddedURL(url: string): string {
    const regExp = /^(?:https?:\/\/)?(?:www\.)?(?:(?:youtube.com\/(?:(?:watch\?v=)|(?:embed\/))([a-zA-Z0-9-]{11}))|(?:youtu.be\/([a-zA-Z0-9-]{11})))/;
    const match = url.match(regExp);
    const videoId = match ? match[1] || match[2] : undefined;
    if (videoId) {
      return `https://www.youtube.com/embed/${videoId}`;
    }
    return url;
  }
}
