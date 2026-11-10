/** @type {import('next').NextConfig} */
const repository = process.env.GITHUB_REPOSITORY?.split("/")[1];
const owner = process.env.GITHUB_REPOSITORY?.split("/")[0];
const basePath = process.env.GITHUB_PAGES === "true"
  && repository !== `${owner}.github.io`
  ? `/${repository}`
  : "";

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true
  }
}

export default nextConfig
