"use client";

import { motion } from "motion/react";
import { InfoHero } from "./InfoHero";

const ease = [0.22, 1, 0.36, 1] as const;

type Review = { name: string; body: string; featured?: boolean };

const REVIEWS: Review[] = [
  {
    name: "Craig B.",
    body: "HIGHLY RECOMMEND! We had a fantastic experience with Houston Cool Pools. Very transparent company, they worked with us every step along the way, giving us exact amounts for all possible things pool-related. They always keep safety in mind and will not cut corners just to get the construction done faster. We now have an absolutely stunning pool now, thanks to them!",
  },
  {
    name: "Pamela C.",
    body: "We bought a home with a very old pool in the back yard. We have had 2 pools prior to this and thought we could handle it. But after 3 months of working on it, sweeping it daily, adding chemicals, etc., we barely made a dent in the murky water. Don was able to clean it up in 2 weeks. Amazing. Good communication with the office, and I highly recommend this company.",
  },
  {
    name: "Nancy M.",
    body: "Houston Cool Pools is a wonderful company to do business with. They are honest and true to their words. Mike and his crew did an awesome job with our pool and we've been very happy!",
  },
  {
    name: "Andrea S.",
    body: "Houston Cool Pools remodeled my swimming pool and added a spa and waterfall. They did a fantastic job - couldn't be any happier. Everything came out as planned. We love the job they did in our backyard. We have our own paradise in our backyard thanks to Matt and his crews. Matt was awesome to work with. I will recommend Houston Cool Pools to everybody that I know. Thank you!",
  },
  {
    name: "Margaret M.",
    featured: true,
    body: "We looked at 3 companies to build a pool in our backyard. John, at Houston Cool Pools, along with Mike, Veronica and staff far exceeded our expectations. One other company was good, and the other company spent little time at our home and then took too long to get back to us. John spent almost 2 hours at our home on his 1st visit; and he helped us realize we could have much larger pool than we thought possible. He took all kinds of measurements then went and designed a beautiful workable pool/hot tub, which met our families needs and desires. No other company took the time to consider all the challenges our yard had, like the placement of underground power lines etc. Their answer was: just build a smaller pool. John then, also, added fun features to our pool/hot tub, like bubblers, fire bowls and a table which is in the pool, (where I personally love to sit and read); plus a beautiful deck around the pool. It was a rainy winter/spring when our pool was built, but they got the job done; and as the pictures show - it turned out stunning! What is, also, almost most important, since having the pool installed, Houston Cool Pools has continued to provide excellent customer service and help with any types of issues we have had with the pool, hot tub and fire bowls.",
  },
  {
    name: "Osmund W.",
    featured: true,
    body: "Houston Cool Pools is an excellent company for anyone looking to construct a pool. I will not hesitate to recommend this company. They are honest and will go above and beyond to keep their customers happy. The owner Mike Lopez is exceptional - he is professional, polite, knowledgeable, he makes suggestions, ultimately it's your decision but I can gladly say every suggestion he made turned out awesome. I shopped 5 other contractors; not only was his price one of the best for what you get but his finished product is beautiful. Hey Mike, great job to you and your team - we love our pool, you worked with me and my family every step of the process. It took my family three years to make a decision on the project but you gave us time and never pushed us about anything. Thanks Mike Lopez and Houston Cool Pools.",
  },
  {
    name: "B.D.L.",
    body: "Great experience! Mike and his team were always accessible to answer questions and provide feedback regarding the progress of our project. Personable, responsive and committed to good quality work.",
  },
  {
    name: "Paul T.",
    body: "Great experience! Mike and his team were always accessible to answer questions and provide feedback regarding the progress of our project. Personable, responsive and committed to good quality work.",
  },
  {
    name: "Eric H.",
    body: "Great experience! Mike and his team were always accessible to answer questions and provide feedback regarding the progress of our project. Personable, responsive and committed to good quality work.",
  },
  {
    name: "Nick F.",
    body: "Great experience! Mike and his team were always accessible to answer questions and provide feedback regarding the progress of our project. Personable, responsive and committed to good quality work.",
  },
  {
    name: "Dave S.",
    body: "Houston Cool Pools helped us design our perfect pool and had it installed in a month, as promised! We love our new pool!!!",
  },
  {
    name: "Jeffrey Scheldt",
    body: "True to their word, patient, great follow through, really polite and knowledgeable staff, very competitive pricing. I don't know of anything else that Mike and everyone could have done to do a better job. So pleased!",
  },
  {
    name: "Tom B.",
    body: "We are very happy with our pool! It was completed in a timely manner, and the installation crew worked tirelessly to complete the work.",
  },
  {
    name: "Johnny G.",
    body: "I am extremely pleased with my pool installation experience! Mike and his team were proficient and professional. I felt that I received a fair price and did not feel pressured at any time. My pool is great and our family enjoys it!",
  },
  {
    name: "Henry N.",
    body: "I am very satisfied with them. They are very honest and a trustworthy Company. Any problems that arose, they took care of.",
  },
];

function getInitials(name: string) {
  return name
    .split(/\s+/)
    .map((p) => p[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function Stars() {
  return (
    <div className="flex items-center gap-0.5 text-[var(--color-gold)]">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
          <path d="M12 2l2.9 6.9 7.6.6-5.8 5 1.8 7.5L12 17.8 5.5 22l1.8-7.5-5.8-5 7.6-.6L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export function TestimonialsClient() {
  return (
    <>
      <InfoHero
        eyebrow="Customer Stories"
        title="Reviews & Testimonials"
        subtitle="Every 5-star review below comes from a real Houston Cool Pools customer. We build our reputation one pool at a time."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Pool Information", href: "/pool-information" },
          { label: "Customer Reviews" },
        ]}
        backgroundImage="/images/gallery/hd/family-1.jpg"
        backgroundAlt="Houston family enjoying their Houston Cool Pools backyard"
      />

      <section className="bg-[#f7f6f2] py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          {/* Rating summary */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease }}
            className="mx-auto mb-14 flex max-w-2xl flex-col items-center gap-4 rounded-3xl border border-slate-200/80 bg-white p-8 text-center shadow-[0_10px_40px_-28px_rgba(0,27,36,0.2)]"
          >
            <div className="flex items-baseline gap-2">
              <span className="font-display text-5xl font-extrabold text-[var(--color-navy-deep)]">
                5.0
              </span>
              <span className="text-[13px] font-semibold text-slate-500">/ 5</span>
            </div>
            <Stars />
            <p className="text-[14px] text-slate-600">
              Based on <strong className="text-[var(--color-navy-deep)]">{REVIEWS.length}</strong> verified reviews.
              We&rsquo;re also A+ rated with the BBB and an Angie&rsquo;s List Super Service Award winner.
            </p>
          </motion.div>

          {/* Live Google reviews carousel (Review Stream / embedmyreviews widget) */}
          <div className="mx-auto mb-14 max-w-4xl">
            <emr-simple-carousel widget-id="17b1c110-208f-4b60-a962-7cd6ae91b4da" />
          </div>

          {/* Masonry-ish column layout for varying review lengths */}
          <div className="columns-1 gap-6 md:columns-2 lg:columns-3">
            {REVIEWS.map((r, i) => (
              <motion.article
                key={`${r.name}-${i}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: (i % 6) * 0.04, ease }}
                className={`mb-6 inline-block w-full break-inside-avoid rounded-3xl border border-slate-200/80 bg-white p-6 shadow-[0_10px_40px_-28px_rgba(0,27,36,0.2)] transition hover:-translate-y-0.5 hover:border-[var(--color-pool)]/40 md:p-7 ${
                  r.featured ? "ring-1 ring-[var(--color-gold)]/40" : ""
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-[var(--color-navy-deep)] to-[var(--color-pool-deep)] font-display text-[13.5px] font-bold text-white shadow-md">
                      {getInitials(r.name)}
                    </span>
                    <div>
                      <p className="font-display text-[15.5px] font-bold text-[var(--color-navy-deep)]">
                        {r.name}
                      </p>
                      <p className="text-[10.5px] font-bold uppercase tracking-[0.18em] text-slate-400">
                        Verified customer
                      </p>
                    </div>
                  </div>
                  <Stars />
                </div>

                {r.featured && (
                  <span className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-[var(--color-gold)]/15 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--color-pool-deep)]">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-3 w-3">
                      <path d="M12 2l2.9 6.9 7.6.6-5.8 5 1.8 7.5L12 17.8 5.5 22l1.8-7.5-5.8-5 7.6-.6L12 2z" />
                    </svg>
                    Featured review
                  </span>
                )}

                <p className="mt-4 text-[14.5px] leading-relaxed text-slate-600">
                  &ldquo;{r.body}&rdquo;
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
