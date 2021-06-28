import { BaseComponent } from "../../component.js";

export class ImageComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, url: string) {
    // 사용자에게 받는 데이터는 innerHTML에 넣지 말자.
    super(`
    <section class="image">
      <div class="image__holder"><img class="image__thumnail"></div>
      <p class="image__title"></p>
    </section>
    `);

    const imageElement = this.element.querySelector(
      ".image__thumnail"
    )! as HTMLImageElement;
    imageElement.src = url;
    imageElement.alt = title;

    const titleElement = this.element.querySelector(
      ".image__title"
    )! as HTMLParagraphElement;
    titleElement.textContent = title;
  }
}
