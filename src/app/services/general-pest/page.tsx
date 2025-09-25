export const metadata = { title: 'General Pest Services | All Star Pest Solutions' };
type SectionProps = { title: string, children: React.ReactNode };
function Section({ title, children }: SectionProps){
  return (
    <section className="rounded-xl border bg-white p-6">
      <h2 className="text-xl font-bold text-brand-blue">{title}</h2>
      <div className="mt-2 text-gray-700">{children}</div>
    </section>
  );
}
export default function GeneralPest(){
  return (
    <div className='container mx-auto px-4 py-10 grid md:grid-cols-2 gap-6'>
      <Section title='What We Treat'>
        Ants, Bed Bugs, Boxelder Bugs, Centipedes, Clover Mites, Cockroaches, Crickets, 
        Earwigs, Fleas, Millipedes, Silverfish, Termites, Wasps and more for residential! 
      </Section>
      <Section title='Our Approach'>
        Inspection, targeted application, and exterior barrier—always safety-first and label-driven.
      </Section>
      <a href='/contact' className='md:col-span-2 inline-block mt-2 px-5 py-3 rounded-md bg-brand-teal text-white font-semibold'>Schedule Service</a>
    </div>
  );
}