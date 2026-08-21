import type { Metadata } from "next";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <section className="page-intro" aria-labelledby="page-title">
      <p className="eyebrow">About</p>
      <h1 id="page-title">Information will be shared here.</h1>
      <p className="lead">This placeholder route is ready for reviewed organizational content.</p>
    </section>
  );
}