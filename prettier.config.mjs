/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
export default {
	plugins: ['prettier-plugin-tailwindcss'],
	semi: true,
	singleQuote: true,
	trailingComma: 'all',
	printWidth: 80,
	tabWidth: 2,
	useTabs: true,
	arrowParens: 'avoid',
};
