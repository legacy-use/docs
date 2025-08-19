import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  output: 'export',
};

if (process.env.GITHUB_PAGES === 'true') {
  config.basePath = '/legacy-use-docs';
}

export default withMDX(config);
