/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  // https://images.unsplash.com/photo-1762983870490-63e5ba07105b
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/photo-1762983870490-63e5ba07105b',
        search: '',
      },
    //  https://i.ibb.co.com/TBPctwZh/tanvir1.jpg
       {
        protocol: 'https',
        hostname: 'i.ibb.co.com',
        port: '',
        pathname: '/TBPctwZh/**',
        search: '',
      },
    ],
    
  },
};

export default nextConfig;
