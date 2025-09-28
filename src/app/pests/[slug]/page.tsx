import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getPest, DESCRIPTIONS } from '@/data/pests';

type Params = { slug: string };

export default function PestPage({ params }: { params: Params }) {
  const pest = getPest(params.slug);
  if (!pest) return notFound();
  const d = DESCRIPTIONS[pest.slug] || {};

  const Field = ({ label, value }: { label: string; value?: string }) =>
    value ? <p className='mb-2'><span className='font-semibold'>{label}:</span> {value}</p> : null;

  return (
    <main className='max-w-5xl mx-auto p-6'>
      <h1 className='text-3xl font-bold mb-4'>{pest.name}</h1>

      <div className='relative w-full max-w-3xl aspect-[16/9] mb-6'>
        <Image src={pest.image} alt={pest.name} fill sizes='100vw' className='object-cover rounded-xl' />
      </div>

      <div className='space-y-1 text-lg'>
        <Field label='Scientific name' value={d.scientificName} />
        <Field label='Biology'         value={d.biology} />
        <Field label='Life cycle'      value={d.lifeCycle} />
        <Field label='Behavior'        value={d.behavior} />
        <Field label='Size'            value={d.size} />
      </div>

      {(!d.scientificName && !d.biology && !d.lifeCycle && !d.behavior && !d.size) && (
        <p className='text-lg mt-4'>Info coming soon.</p>
      )}
    </main>
  );
}