/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            "res.cloudinary.com"
        ]
    },
    async rewrites() {
        return [
            {
                source: '/category/:label/:categoryId', // Rota dinâmica apenas com slug
                destination: '/category/:categoryId', // Redireciona para a página de categoria dinâmica
            },
        ]
    },
}
module.exports = nextConfig

