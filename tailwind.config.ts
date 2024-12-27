import { type Config } from 'tailwindcss';
import tailwindcssanimate from 'tailwindcss-animate';
import typography from '@tailwindcss/typography';
import svgToDataUri from 'mini-svg-data-uri';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import flattenColorPalette from 'tailwindcss/lib/util/flattenColorPalette';

export default {
	darkMode: ['class'],
	content: ['./src/**/*.tsx'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['var(--font-inter)'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))',
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))',
				},
			},
		},
	},
	plugins: [
		tailwindcssanimate,
		typography,
		addVariablesForColors,
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		function ({ matchUtilities, theme }: any) {
			// eslint-disable-next-line @typescript-eslint/no-unsafe-call
			matchUtilities(
				{
					// eslint-disable-next-line @typescript-eslint/no-explicit-any
					'bg-dot-thick': (value: any) => ({
						backgroundImage: `url("${svgToDataUri(
							`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="2.5"></circle></svg>`,
						)}")`,
					}),
				},
				{
					// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
					values: flattenColorPalette(theme('backgroundColor')),
					type: 'color',
				},
			);
		},
	],
} satisfies Config;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function addVariablesForColors({ addBase, theme }: any) {
	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, prefer-const
	let allColors = flattenColorPalette(theme('colors'));
	// eslint-disable-next-line prefer-const
	let newVars = Object.fromEntries(
		// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
		Object.entries(allColors).map(([key, val]) => [`--${key}`, val]),
	);
	// eslint-disable-next-line @typescript-eslint/no-unsafe-call
	addBase({
		':root': newVars,
	});
}
