import Image from 'next/image';
import { recipeCards } from '@/data/brandContent';

export default function RecipesPage() {
  return (
    <main className="min-h-screen bg-[#FFF8E7] pt-24">
      <section className="bg-gradient-to-r from-[#7B1E1E] to-[#4B2E2B] py-16 text-[#FFF8E7]">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <h1 className="font-playfair text-5xl md:text-[64px]">Recipes With Zingking</h1>
          <p className="mt-4 max-w-3xl text-lg text-[#FFF8E7]/85">
            Real kitchen recipes built around our signature masala blends.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 md:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {recipeCards.map((recipe) => (
            <article key={recipe.title} className="overflow-hidden rounded-2xl border border-[#4B2E2B]/10 bg-white shadow-soft">
              <div className="relative h-56">
                <Image src={recipe.image} alt={recipe.title} fill sizes="33vw" className="object-cover" />
              </div>
              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-[#7B1E1E]">
                  {recipe.prepTime} · Serves {recipe.serves} · {recipe.masala}
                </p>
                <h2 className="mt-2 font-playfair text-3xl text-[#4B2E2B]">{recipe.title}</h2>
                <p className="mt-2 text-sm leading-6 text-[#4B2E2B]/80">{recipe.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
