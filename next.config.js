/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',          // generates /out on next build
  trailingSlash: true,       // creates /about/index.html style routes (nice for static hosts)
  images: { unoptimized: true }, // required if you use next/image on a static host
  async rewrites() {
    return [
      {
        source: "/help",
        destination: "https://chatbase.co/gUJdCgmiBultFCPtZPGXQ/help",
      },
      // This rule is needed to correctly proxy sub-pages of your help center.
      {
        source: "/help/:path*",
        destination: "https://chatbase.co/gUJdCgmiBultFCPtZPGXQ/help/:path*",
      },
      // Proxy static assets (JavaScript, CSS, images)
      {
        source: "/__cb/:path*",
        destination: "https://chatbase.co/__cb/:path*",
      },
      // Proxy chat API endpoints for your agent
      {
        source: "/api/chat/gUJdCgmiBultFCPtZPGXQ/:path*",
        destination: "https://chatbase.co/api/chat/gUJdCgmiBultFCPtZPGXQ/:path*",
      },
    ];
  },
};

module.exports = nextConfig;