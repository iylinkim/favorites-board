import { BaseComponent } from "./../../component.js";
export class VideoComponent extends BaseComponent {
    constructor(title, info, url) {
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
        const iframe = this.element.querySelector(".video_iframe");
        iframe.src = this.convertToEmbeddedURL(url);
        const titleElement = this.element.querySelector(".title");
        titleElement.textContent = title;
        const infoElement = this.element.querySelector(".info");
        infoElement.textContent = info;
    }
    convertToEmbeddedURL(url) {
        const regExp = /^(?:https?:\/\/)?(?:www\.)?(?:(?:youtube.com\/(?:(?:watch\?v=)|(?:embed\/))([a-zA-Z0-9-]{11}))|(?:youtu.be\/([a-zA-Z0-9-]{11})))/;
        const match = url.match(regExp);
        const videoId = match ? match[1] || match[2] : undefined;
        if (videoId) {
            return `https://www.youtube.com/embed/${videoId}`;
        }
        return url;
    }
}
//# sourceMappingURL=video.js.map