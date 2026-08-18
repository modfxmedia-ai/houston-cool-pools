import * as React from "react";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "emr-simple-carousel": React.HTMLAttributes<HTMLElement> & {
        "widget-id"?: string;
      };
    }
  }
}
