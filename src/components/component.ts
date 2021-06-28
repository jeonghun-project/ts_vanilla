export interface Component {
  attachTo(parent: HTMLElement, position?: InsertPosition): void;
}

// Encapsulate the HTML element creation

export class BaseComponent<T extends HTMLElement> implements Component {
  protected readonly element: T;

  constructor(HTMLString: string) {
    const template = document.createElement("template");
    template.innerHTML = HTMLString;
    this.element = template.content.firstElementChild! as T;
  }

  attachTo(parent: HTMLElement, position: InsertPosition = "afterbegin") {
    parent.insertAdjacentElement(position, this.element);
  }
}
