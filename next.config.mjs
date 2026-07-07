/** @type {import('next').NextConfig} */
const nextConfig = {
  // পুরনো WordPress সাইটের মতো সব URL trailing slash সহ (/slug/) — ডিরেক্টরি স্ট্রাকচার হুবহু মিল
  trailingSlash: true,
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