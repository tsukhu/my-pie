/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MyPie {
        "data": string;
        "height": number;
        "width": number;
    }
}
declare global {
    interface HTMLMyPieElement extends Components.MyPie, HTMLStencilElement {
    }
    var HTMLMyPieElement: {
        prototype: HTMLMyPieElement;
        new (): HTMLMyPieElement;
    };
    interface HTMLElementTagNameMap {
        "my-pie": HTMLMyPieElement;
    }
}
declare namespace LocalJSX {
    interface MyPie {
        "data"?: string;
        "height"?: number;
        "width"?: number;
    }
    interface IntrinsicElements {
        "my-pie": MyPie;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-pie": LocalJSX.MyPie & JSXBase.HTMLAttributes<HTMLMyPieElement>;
        }
    }
}
