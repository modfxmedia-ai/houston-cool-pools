// Custom element registered by the Review Stream (embedmyreviews) pixel script.
declare namespace JSX {
  interface IntrinsicElements {
    "emr-simple-carousel": React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    > & {
      "widget-id"?: string;
    };
  }
}
