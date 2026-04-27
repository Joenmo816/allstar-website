export default function EcoCommitment() {
  return (
    <section className="w-full bg-allstarBlue py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center text-white">

        <h2 className="text-4xl md:text-5xl font-black mb-6">
          We Protect More Than Just Your Home
        </h2>

        <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-allstarBlueLight">
          Our treatments eliminate harmful pests while protecting beneficial insects,
          pets, and the local environment.
        </p>

        <div className="grid md:grid-cols-3 gap-8 text-left">

          <div className="bg-white text-allstarInk p-8 rounded-xl shadow-brand">
            <h3 className="text-xl font-black mb-3 text-allstarRed">
              Protect Pollinators
            </h3>
            <p>
              We minimize impact on bees and beneficial insects that support your environment.
            </p>
          </div>

          <div className="bg-white text-allstarInk p-8 rounded-xl shadow-brand">
            <h3 className="text-xl font-black mb-3 text-allstarRed">
              Safe for Families & Pets
            </h3>
            <p>
              Treatments are applied with safety in mind for your family and animals.
            </p>
          </div>

          <div className="bg-white text-allstarInk p-8 rounded-xl shadow-brand">
            <h3 className="text-xl font-black mb-3 text-allstarRed">
              Targeted Pest Control
            </h3>
            <p>
              We eliminate pests without disrupting the surrounding ecosystem.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}



