import Image from "next/image"
import { notFound } from "next/navigation"
import { pests } from "../../../data/pests.generated"

export default function PestPage({ params }: { params: { slug: string } }) {

  const pest = pests.find(p => p.slug === params.slug)

  if (!pest) {
    notFound()
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">

      <h1 className="text-4xl font-bold text-red-700 mb-6">
        {pest.name}
      </h1>

      <div className="relative w-full h-[400px] mb-8">
        <Image
          src={pest.image}
          alt={pest.name}
          fill
          className="object-cover rounded-lg"
        />
      </div>

      <div className="space-y-6 text-lg text-gray-800">
        <p>
          Learn more about {pest.name} and how to identify and manage this pest in Kansas City homes and businesses.
        </p>
      </div>

    </div>
  )
}