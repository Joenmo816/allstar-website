import React from "react";
import Image from "next/image";

export const metadata = {
  title: "About | All Star Pest Solutions",
  description: "Kansas City’s family-owned pest professionals. Guaranteed Service, Guaranteed Results.",
};

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[34vh] md:h-[42vh]">
        <Image
          src="/images/kc.jpg"
          alt="Kansas City Skyline"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow">
            About All Star Pest Solutions
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="container mx-auto px-4 py-10 prose max-w-3xl">
        <p>
          We’re a proud Kansas City, family-owned business dedicated to 
          delivering top-quality service with proven results you can count on.
        </p>
        <p>From ants, bed bugs, beetles, centipedes, cockroaches, crickets, fleas, mice, 
          silverfish, spiders, termites, to wasps—we’ve got you covered. Every treatment we provide is eco-smart and safe for kids and pets, 
          while still being among the most effective solutions in the industry.
        </p>
        <ul>
          <li>Local, family owned & operated</li>
          <li>Over 28 years experience</li>
          </li>BBB accredited</li>
          <li>Guaranteed Service, Guaranteed Results</li>
        </ul>
      </section>
    </div>
  );
}