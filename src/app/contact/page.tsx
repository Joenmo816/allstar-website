import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — All Star Pest Solutions"
};

export default function Contact() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-4">Contact</h1>
      <p className="text-gray-700">Call <a className="text-brandBlue" href="tel:+19137387827">(913) 738-7827</a> or email <a className="text-brandBlue" href="mailto:info@allstarpestkc.com">info@allstarpestkc.com</a>.</p>
    </main>
  );
}