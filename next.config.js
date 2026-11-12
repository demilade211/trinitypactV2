/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        styledComponents: true,
    },
    poweredByHeader: false,
    images: {
        formats: ['image/avif', 'image/webp'],
    },
    // One canonical host: send the bare domain to www permanently.
    async redirects() {
        return [
            {
                source: '/:path*',
                has: [{ type: 'host', value: 'tpltrinitypact.com' }],
                destination: 'https://www.tpltrinitypact.com/:path*',
                permanent: true,
            },
        ]
    },
}

module.exports = nextConfig
