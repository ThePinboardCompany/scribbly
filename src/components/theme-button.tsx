'use client';

import { DropdownMenuItem } from '~/components/ui/dropdown-menu';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';

export function ThemeButton() {
	const { theme, setTheme } = useTheme();

	return (
		<DropdownMenuItem
			onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
		>
			{theme === 'light' ? (
				<Moon className="mr-2 h-4 w-4" />
			) : (
				<Sun className="mr-2 h-4 w-4" />
			)}
			<span>{theme === 'light' ? 'Dark' : 'Light'}</span>
		</DropdownMenuItem>
	);
}
