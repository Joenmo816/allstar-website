import Image from "next/image"
import Link from "next/link"
import { pests } from "@/lib/pests"
import PestFilter from "@/components/PestFilter"

export const metadata = {
  title: "Kansas City Pest Library | Identify Household Pests",
  description:
    "Browse common insects, spiders, and rodents found in Kansas City homes and businesses. Learn how to identify pests and when to call a professional exterminator.",
}

export default function PestLibraryPage() {
  return (
    <div className="bg-white py-16">

      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-4xl font-bold text-red-700 text-center">
          Kansas City Pest Library
        </h1>

        <p className="text-center text-lg text-black/80 mt-4 max-w-3xl mx-auto">
          Not sure what pest you're dealing with? Browse our pest identification
          library to learn about insects, spiders, and rodents commonly found in
          Kansas City homes and businesses.
        </p>

        {/* Pest Search Tool */}
        <div className="mt-10">
          <PestFilter pests={pests} />
        </div>

        {/* Pest Grid */}
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8 mt-12">

          {pests.map((pest) => (

            <Link
              key={pest.slug}
              href={`/pests/${pest.slug}`}
              className="border rounded-xl shadow hover:shadow-lg transition bg-white"
            >

              <div className="relative h-48 w-full">

                <Image
                  src={`/images/pests/${pest.slug}.jpg`}
                  alt={pest.name}
                  fill
                  className="object-cover rounded-t-xl"
                />

              </div>

              <div className="p-4">

                <h2 className="text-xl font-semibold text-red-700">
                  {pest.name}
                </h2>

                <p className="text-sm text-gray-700 mt-2">
                  Click for more information
                </p>

              </div>

            </Link>

          ))}

        </div>

      </div>

    </div>
  )
}