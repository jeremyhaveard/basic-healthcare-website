import type { Metadata } from "next";

export const metadata: Metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <section className="page-intro" aria-labelledby="page-title">
      <p className="eyebrow">Services</p>
      <h1 id="page-title">Service details are pending approval.</h1>
      <p className="lead">No clinical services, availability, or outcomes are represented on this route.</p>
    </section>
  );
}