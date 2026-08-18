import * as React from "react";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "emr-simple-carousel": React.DetailedHTMLProps
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        "widget-id"?: string;
      };
    }
  }
}
