# Project Structure

This project follows a feature-oriented Next.js App Router structure with a clear split between UI, API routes, models, and shared utilities.

## Root

- `src/app`: Pages and API routes (App Router)
- `src/components`: Reusable UI sections and widgets
- `src/context`: React context providers
- `src/data`: Static content and catalog data
- `src/lib`: Shared libraries and utility helpers
- `src/models`: Mongoose models
- `src/types`: Shared TypeScript interfaces
- `public`: Static assets
- `scripts`: Seed and maintenance scripts
- `docs`: Project documentation

## Data Layer

Content is now modularized under `src/data/content`:

- `types.ts`: Domain types for brand/product content
- `brand.ts`: Brand narrative, stats, and category cards
- `products.ts`: Product catalog and nutrition data
- `engagement.ts`: Blog, recipes, testimonials, contact/B2B metadata
- `index.ts`: Barrel export for modular imports

`src/data/brandContent.ts` is retained as a compatibility barrel so existing imports continue to work.

## Recommended Import Style

For new development, prefer:

```ts
import { products, blogPosts } from '@/data/content';
```

Legacy imports from `@/data/brandContent` remain valid.
