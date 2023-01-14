/** @type {import('next').NextConfig} */
const withMDX = require('@next/mdx')({
	extension: /\.mdx?$/,
	options: {
		remarkPlugins: [],
		rehypePlugins: [],
		// If you use `MDXProvider`, uncomment the following line.
		// providerImportSource: "@mdx-js/react",
	},
})

const nextConfig = withMDX({
	reactStrictMode: true,
	i18n: {
		locales: ['en', 'ru'],
		defaultLocale: 'ru',
	},
	pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
	trailingSlash: true,
	// async rewrites() {
	// 	return {
	// 		beforeFiles: [
	// 			{
	// 				source: '/:lang([a-z]{2})/',
	// 				destination: '/index.:lang/',
	// 				locale: false,
	// 			},
	// 			{
	// 				source: '/index.:lang(\\w{2})',
	// 				destination: '/404',
	// 			},
	// 		],
	// 	}
	// },
})

module.exports = nextConfig
