/** @type {import('next').NextConfig} */
const nextConfig = {
  // Habilita otimizações de imagem
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  // Otimizações experimentais
  experimental: {
    optimizePackageImports: ['framer-motion', 'gsap'],
  },
}

module.exports = nextConfig

