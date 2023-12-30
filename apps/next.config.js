module.exports = {
 
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        port: "",
        pathname: "**",
      },
    ],
    unoptimized: true,
  },
  transpilePackages: ["protocol"],
};
