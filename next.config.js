/** @type {import('next').NextConfig} */
const withTM = require("next-transpile-modules")([
  "three",
  "@react-three/fiber",
  "@react-three/drei",
]);
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@react-three/fiber", "three"],
};

module.exports = nextConfig;
