export const metadata = { title: 'Wasp & Hornet | All Star Pest Solutions' };
type SectionProps = { title: string, children: React.ReactNode };
function Section({ title, children }: SectionProps){
  return (
    <section className="rounded-xl border bg-white p-6">
      <h2 className="text-xl font-bold text-brand-blue">{title}</h2>
      <div className="mt-2 text-gray-700">{children}</div>
    </section>
  );
}
export default function Wasp(){
  return (
    <div className='container mx-auto px-4 py-10 grid md:grid-cols-2 gap-6'>
      <Section title='Nest Removal'>
        Quick removal and treatment of accessible nests; exterior prevention options available.
      </Section>
      <Section title='Safety First'>
        We use professional products and PPE to protect your family and pets.
      </Section>
      <a href='/contact' className='md:col-span-2 inline-block mt-2 px-5 py-3 rounded-md bg-brand-teal text-white font-semibold'>Get Help Now</a>
    </div>
  );
}