/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn.sanity.io", port: "" },
      { protocol: "https", hostname: "api.dicebear.com", port: "" },
    ],
    domains: ["placehold.co"],
  },
};

export default nextConfig;
