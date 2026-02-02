/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',          // generates /out on next build
  trailingSlash: true,       // creates /about/index.html style routes (nice for static hosts)
  images: { unoptimized: true }, // required if you use next/image on a static host
};

module.exports = nextConfig;