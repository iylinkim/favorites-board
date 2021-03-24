import { Composable } from "./../page.js";
import { BaseComponent, Component } from "./../../component.js";
declare type onCloseListener = () => void;
declare type onSubmitListener = () => void;
export interface FileData {
    readonly file: string;
}
export interface SearchData {
    readonly search: string;
}
export interface SelectData {
    readonly category: string;
}
export interface UrlData {
    readonly url: string;
}
export declare class InputDialog extends BaseComponent<HTMLElement> implements Composable {
    closeListener?: onCloseListener;
    submitListener?: onSubmitListener;
    constructor(title: string);
    get title(): string;
    get comment(): string;
    setOnCloseListener(listener: onCloseListener): void;
    setOnSubmitListener(listener: onSubmitListener): void;
    addChild(child: Component): void;
}
export {};
