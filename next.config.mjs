const isProduction = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",
    reactStrictMode: true,
    poweredByHeader: false,
    compiler: {
        removeConsole: isProduction,
    }
};

export default nextConfig;
