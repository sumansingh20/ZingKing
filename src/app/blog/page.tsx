import { blogPosts } from '@/data/content';
import SafeImage from '@/components/ui/SafeImage';

export const metadata = {
  title: 'Zingking Masala Blog',
  description:
    'Practical guides on spices, storage, quality standards, and recipe insights from Zingking Masala.',
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#FFF8E7] pt-24">
      <section className="bg-gradient-to-r from-[#7B1E1E] to-[#4B2E2B] py-16 text-[#FFF8E7]">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <h1 className="font-playfair text-5xl md:text-[64px]">Spice Knowledge Hub</h1>
          <p className="mt-4 max-w-3xl text-lg text-[#FFF8E7]/85">
            SEO-focused content for home cooks, retailers, and food entrepreneurs.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 md:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article key={post.slug} className="overflow-hidden rounded-2xl border border-[#4B2E2B]/10 bg-white">
              <div className="relative h-48">
                <SafeImage src={post.image} alt={post.title} fill sizes="33vw" className="object-cover" />
              </div>
              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-[#7B1E1E]">
                  {new Date(post.date).toLocaleDateString('en-IN', {
                    day: '2-digit',
                    month: 'short',
                    year: 'numeric',
                  })}{' '}
                  · {post.readTime}
                </p>
                <h2 className="mt-2 font-playfair text-3xl text-[#4B2E2B]">{post.title}</h2>
                <p className="mt-2 text-sm leading-6 text-[#4B2E2B]/80">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
