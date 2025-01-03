/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
const config = {
	plugins: ['prettier-plugin-tailwindcss'],
	semi: true,
	singleQuote: true,
	trailingComma: 'all',
	printWidth: 80,
	tabWidth: 2,
	useTabs: true,
	arrowParens: 'avoid',
};

export default config;
