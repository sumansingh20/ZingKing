import Image from 'next/image';
import { brandStory, qualitySteps } from '@/data/content';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#FFF8E7] pt-24">
      <section className="bg-gradient-to-r from-[#7B1E1E] to-[#4B2E2B] py-16 text-[#FFF8E7]">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <h1 className="font-playfair text-5xl md:text-[64px]">About Zingking Masala</h1>
          <p className="mt-4 max-w-3xl text-lg text-[#FFF8E7]/85">
            A modern Indian spice brand rooted in traditional process discipline.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:px-8 lg:grid-cols-2 lg:items-center">
        <div>
          <h2 className="font-playfair text-4xl text-[#4B2E2B] md:text-5xl">{brandStory.heading}</h2>
          <p className="mt-5 text-base leading-8 text-[#4B2E2B]/90 md:text-lg">{brandStory.summary}</p>
          <p className="mt-4 text-base leading-8 text-[#4B2E2B]/80 md:text-lg">{brandStory.detail}</p>
        </div>
        <div className="relative h-96 overflow-hidden rounded-3xl">
          <Image
            src="https://images.unsplash.com/photo-1596040227107-c4ed3ce2b5da?auto=format&fit=crop&w=1400&q=80"
            alt="Spice facility"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <h2 className="font-playfair text-4xl text-[#4B2E2B] md:text-5xl">How We Ensure Quality</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-5">
            {qualitySteps.map((step, idx) => (
              <div key={step.title} className="rounded-xl border border-[#4B2E2B]/10 bg-[#FFF8E7] p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-[#7B1E1E]">Step {idx + 1}</p>
                <h3 className="mt-1 font-playfair text-2xl text-[#4B2E2B]">{step.title}</h3>
                <p className="mt-2 text-sm text-[#4B2E2B]/80">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
