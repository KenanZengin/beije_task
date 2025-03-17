/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["beije.co", "static.beije.co"],
    },
    reactStrictMode:false,
    compiler:{
        removeConsole:false
    }
    
};

export default nextConfig;
