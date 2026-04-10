import withSerwistInit from "@serwist/next";

const nextConfig = {
  typescript: { ignoreBuildErrors: true },
  images: { unoptimized: true },
  // Adding this helps satisfy the Turbopack check
  webpack: (config) => {
    return config;
  },
};

const withSerwist = withSerwistInit({
  swSrc: "app/sw.ts",
  swDest: "public/sw.js",
  // Disable PWA in development to avoid Turbopack conflicts
  disable: process.env.NODE_ENV === "development",
});

export default withSerwist(nextConfig);
