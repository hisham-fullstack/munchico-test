/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Statik export için Image bileşen optimizasyonunu kapatır
  },
};

export default nextConfig;
