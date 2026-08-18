/** Live Google reviews carousel (Review Stream / GetDandy pixel).
 * The `<emr-simple-carousel>` custom element is registered by the
 * `review-stream-pixel` script in app/layout.tsx (production only). */
export function ReviewsWidget() {
  return (
    <section className="bg-[#f7f6f2] py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-6 text-center md:px-10">
        <p className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.32em] text-[var(--color-pool)]">
          <span className="h-px w-8 bg-[var(--color-pool)]/60" />
          Customer Reviews
          <span className="h-px w-8 bg-[var(--color-pool)]/60" />
        </p>
        <h2 className="font-[family-name:var(--font-display)] mt-4 text-3xl tracking-tight text-[var(--color-navy-deep)] md:text-4xl lg:text-[2.75rem]">
          See what others are saying
        </h2>

        <div className="mx-auto mt-10 max-w-4xl">
          <emr-simple-carousel widget-id="17b1c110-208f-4b60-a962-7cd6ae91b4da" />
        </div>
      </div>
    </section>
  );
}
