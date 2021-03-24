export interface Component {
    attachTo(parent: HTMLElement, position?: InsertPosition): void;
    removeFrom(parent: HTMLElement): void;
    attach(component: Component, position?: InsertPosition): void;
}
export declare class BaseComponent<T extends HTMLElement> implements Component {
    protected readonly element: T;
    constructor(htmlString: string);
    attachTo(parent: HTMLElement, position?: InsertPosition): void;
    removeFrom(parent: HTMLElement): void;
    attach(component: Component, position?: InsertPosition): void;
}
