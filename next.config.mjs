/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  output: "export", // site 100% estático: gera a pasta /out para o Cloudflare
  images: { unoptimized: true }, // otimização de imagem não existe em export estático
  trailingSlash: true,
};
export default nextConfig;
