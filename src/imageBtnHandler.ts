type ImageElement = {
  title: string | null;
  description: string | null;
  imageUrl: string | null;
};

export default class imageItem {
  title: string;
  description: string;
  imageUrl: string;

  constructor(title: string, description: string, imageUrl: string) {
    this.title = title;
    this.description = description;
    this.imageUrl = imageUrl;
  }

  delete() {}

  edit() {}

  add(list: HTMLElement) {
    const ItemContainer = document.createElement("div");
    const titleContainer = document.createElement("div");
    const descriptionContainer = document.createElement("div");
    const imageContainer = document.createElement("image");
    if (!this.title || !this.description || !this.imageUrl) {
      throw new Error("메세지를 입력하세요");
    }
    titleContainer.textContent = this.title;
    descriptionContainer.textContent = this.description;
    imageContainer.setAttribute("src", this.imageUrl);

    ItemContainer.className = "itemli";
    imageContainer.className = "itemimage";
    descriptionContainer.className = "itemdes";
    titleContainer.className = "itemtitle";

    ItemContainer.append(imageContainer, titleContainer, descriptionContainer);

    list.append(ItemContainer);
  }
}
