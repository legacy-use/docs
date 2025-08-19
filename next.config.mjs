import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
};

if (process.env.GITHUB_PAGES === 'true') {
  config.basePath = '/docs';
}

export default withMDX(config);
