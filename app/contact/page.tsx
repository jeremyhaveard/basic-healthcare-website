import type { Metadata } from "next";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <section className="page-intro" aria-labelledby="page-title">
      <p className="eyebrow">Contact</p>
      <h1 id="page-title">Contact options are being prepared.</h1>
      <p className="lead">This foundation does not include a form, appointment request, phone number, or patient data collection.</p>
    </section>
  );
}