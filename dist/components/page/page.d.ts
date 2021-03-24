import { BaseComponent, Component } from "./../component.js";
export interface Composable {
    addChild(child: Component): void;
}
declare type OnCloseListener = () => void;
declare type DragState = "start" | "stop" | "enter" | "leave";
declare type OnDragStateListener<T extends Component> = (target: T, state: DragState) => void;
interface SectionContainer extends Component, Composable {
    setOnCloseListener(listener: OnCloseListener): void;
    setOnDragStateListener(listener: OnDragStateListener<SectionContainer>): void;
    muteChildren(state: "mute" | "unmute"): void;
    getBoundingRect(): DOMRect;
    onDropped(): void;
}
declare type SectionContainerConstructor = {
    new (): SectionContainer;
};
export declare class PageItemComponent extends BaseComponent<HTMLElement> implements SectionContainer {
    private closeListener?;
    private dragStateListener?;
    constructor();
    onDragStart(_: DragEvent): void;
    onDragEnd(_: DragEvent): void;
    onDragEnter(_: DragEvent): void;
    onDragLeave(_: DragEvent): void;
    onDropped(): void;
    notifyDragObservers(state: DragState): void;
    addChild(child: Component): void;
    setOnCloseListener(listener: OnCloseListener): void;
    setOnDragStateListener(listener: OnDragStateListener<PageItemComponent>): void;
    muteChildren(state: "mute" | "unmute"): void;
    getBoundingRect(): DOMRect;
}
export declare class PageComponent extends BaseComponent<HTMLUListElement> implements Composable {
    private pageItemConstructor;
    private children;
    private dragTarget?;
    private dropTarget?;
    constructor(pageItemConstructor: SectionContainerConstructor);
    onDragOver(event: DragEvent): void;
    onDrop(event: DragEvent): void;
    addChild(section: Component): void;
    private updateSections;
}
export {};
