import { defineConfig } from 'astro/config';

// bridge-work design system — static docs site.
// Output is pure HTML + minimal islands; ships near-zero framework JS by default,
// which is the "professional means less" principle made measurable.
export default defineConfig({
  site: 'https://system.bridge-work.ai',
  build: { format: 'directory' },
});
