/// <reference types="vite/client" />

import { DetailedHTMLProps } from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "title-component": DetailedHTMLProps<
        HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}
