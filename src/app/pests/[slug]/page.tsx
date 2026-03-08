import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import Image from "next/image";
import type { Metadata } from "next";

function getPests() {
  const directory = path.join(process.cwd(), "public/images/pests");
  const files = fs.readdirSync(directory);

  return files
    .filter((file) => /\.(jpg|jpeg|png)$/i.test(file))
    .map((file) => ({
      slug: file.replace(/\.(jpg|jpeg|png)$/i, "").toLowerCase(),
      file,
    }));
}

export async function generateStaticParams() {
  return getPests().map((pest) => ({
    slug: pest.slug,
  }));
}

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const name = params.slug.replace(/-/g, " ");
  return {
    title: `${name} Control in Kansas City`,
    description: `Professional ${name} solutions throughout South Kansas City.`,
  };
}

export default function PestPage({ params }: any) {
  const pests = getPests();
  const pest = pests.find((p) => p.slug === params.slug);
  if (!pest) return notFound();

  const name = params.slug.replace(/-/g, " ");

  return (
    <main className="pt-32 bg-white min-h-screen">
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-8 capitalize">{name}</h1>

        <Image
          src={`/images/pests/${pest.file}`}
          alt={name}
          width={900}
          height={600}
          className="rounded-lg mb-10"
        />

        <p className="text-gray-700 leading-relaxed">
          {name} are common throughout South Kansas City including Overland Park,
          Olathe, Belton and Raymore.
        </p>
      </section>
    </main>
  );
}