/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    assetPrefix: "https://s3.eu-central-1.amazonaws.com/learnpython.today/",
    trailingSlash: true,
}

module.exports = nextConfig
