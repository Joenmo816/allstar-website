import Image from "next/image"
import { pests } from "@/lib/pests"
import { notFound } from "next/navigation"

export default function PestPage({ params }: { params: { slug: string } }) {
  const pest = pests.find((p) => p.slug === params.slug)

  if (!pest) return notFound()

  return (
    <div className="bg-white py-16">
      <div className="max-w-5xl mx-auto px-6">

        <h1 className="text-4xl font-bold text-red-700 mb-6">
          {pest.name}
        </h1>

        <div className="relative w-full h-96 mb-10">
          <Image
            src={`/images/pests/${pest.slug}.jpg`}
            alt={pest.name}
            fill
            className="object-cover rounded-xl"
          />
        </div>

        <div className="space-y-6 text-lg text-gray-800">

          <div>
            <h2 className="text-2xl font-semibold text-red-700">
              Scientific Name
            </h2>
            <p className="italic">{pest.scientificName}</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-red-700">
              Habitat
            </h2>
            <p>{pest.habitat}</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-red-700">
              Biology
            </h2>
            <p>{pest.biology}</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-red-700">
              Behavior
            </h2>
            <p>{pest.behavior}</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-red-700">
              Risk
            </h2>
            <p>{pest.risk}</p>
          </div>

        </div>

      </div>
    </div>
  )
}