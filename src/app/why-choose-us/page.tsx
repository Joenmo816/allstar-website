import Image from "next/image";

export default function WhyChooseUsPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-green-800 mb-8 text-center">
        Why Choose All Star Pest Solutions?
      </h1>

      <p className="text-lg text-gray-700 mb-12 text-center">
        For over 28 years, families and businesses across Kansas City have trusted
        us to deliver safe, effective pest control with guaranteed results.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        {/* Eco-Smart */}
        <div className="flex flex-col items-center">
          <Image
            src="/images/eco-smart.png"
            alt="Eco-Smart Treatments"
            width={100}
            height={100}
            className="mb-4"
          />
          <h3 className="text-xl font-semibold text-blue-800 mb-2">
            Eco-Smart Solutions
          </h3>
          <p className="text-gray-600">
            Child- and pet-safe treatments that are tough on pests but gentle on the environment.
          </p>
        </div>

        {/* Family-Owned */}
        <div className="flex flex-col items-center">
          <Image
            src="/images/family-owned.png"
            alt="Family-Owned"
            width={100}
            height={100}
            className="mb-4"
          />
          <h3 className="text-xl font-semibold text-blue-800 mb-2">
            Family-Owned & Operated
          </h3>
          <p className="text-gray-600">
            Proudly serving Kansas City as a local business — our neighborhoods are your neighborhoods.
          </p>
        </div>

        {/* Experience */}
        <div className="flex flex-col items-center">
          <Image
            src="/images/experience.png"
            alt="Experience"
            width={100}
            height={100}
            className="mb-4"
          />
          <h3 className="text-xl font-semibold text-blue-800 mb-2">
            28+ Years Experience
          </h3>
          <p className="text-gray-600">
            Decades of proven expertise and customer satisfaction in pest control.
          </p>
        </div>
      </div>
    </main>
  );
}
