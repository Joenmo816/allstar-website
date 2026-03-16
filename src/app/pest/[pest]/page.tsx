import Image from 'next/image'
import Link from 'next/link'
import { pests } from '@/lib/pest-data'

export async function generateStaticParams() {
  return pests.map((pest) => ({ pest }))
}

export default function PestPage({ params }: { params: { pest: string } }) {

  const pest = params.pest.replace('-', ' ')

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">

      <h1 className="text-4xl font-bold text-red-600 mb-6 capitalize">
        {pest} Identification Guide
      </h1>

      <Image
        src={'/pest-library/' + params.pest + '.jpg'}
        alt={pest}
        width={600}
        height={400}
      />

      <p className="mt-6 text-lg">
        Our pest library helps Kansas City homeowners identify pests quickly
        and understand what they are dealing with.
      </p>

      <Link
        href="/contact"
        className="mt-10 inline-block bg-red-700 text-yellow-400 px-8 py-4 rounded-md font-bold"
      >
        Schedule Free Inspection
      </Link>

    </div>
  )
}

