/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'finalcutmultimedia.com',
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
  // পুরনো সাইটের মতো: /commercial-videos/ → হোমপেজে 301 রিডাইরেক্ট
  async redirects() {
    return [
      { source: "/commercial-videos", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;