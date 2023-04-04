/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [
      path.join(__dirname, 'styles'),
      path.join(__dirname, 'styles', 'components'),
      path.join(__dirname, 'styles', 'pages'),
    ],
  },
};

module.exports = nextConfig;
