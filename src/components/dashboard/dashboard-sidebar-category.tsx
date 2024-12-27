'use client';

import {
	ChevronRight,
	Clock,
	LayoutGrid,
	Trash,
	User,
	Users,
} from 'lucide-react';
import { cn } from '~/lib/utils';
import { SidebarMenuItem, SidebarMenuButton } from '~/components/ui/sidebar';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';

const categories = [
	{
		tab: 'all',
		name: 'All Whiteboards',
		icon: LayoutGrid,
	},
	{
		tab: 'recent',
		name: 'Recent',
		icon: Clock,
	},
	{
		tab: 'my',
		name: 'My Whiteboards',
		icon: User,
	},
	{
		tab: 'shared',
		name: 'Shared',
		icon: Users,
	},
	{ tab: 'trash', name: 'Trash', icon: Trash },
];

const tabs = categories.map(category => category.tab);

export function DashboardSidebarCategory() {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const [tab, setTab] = useState(() => {
		const initialTab =
			// eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
			searchParams.get('tab') || window.localStorage.getItem('tab') || 'all';
		return tabs.includes(initialTab) ? initialTab : 'all';
	});

	const createQueryString = useCallback(
		(name: string, value: string) => {
			const params = new URLSearchParams(searchParams.toString());
			params.set(name, value);
			return params.toString();
		},
		[searchParams],
	);

	const handleTabChange = (tab: string) => {
		if (!tabs.includes(tab)) return;
		router.push(pathname + '?' + createQueryString('tab', tab));
		window.localStorage.setItem('tab', tab);
		setTab(tab);
	};

	useEffect(() => {
		const urlTab = searchParams.get('tab');
		if (!urlTab || !tabs.includes(urlTab)) {
			handleTabChange('all');
		} else {
			handleTabChange(urlTab);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return categories.map(category => (
		<SidebarMenuItem key={category.tab}>
			<SidebarMenuButton
				isActive={tab === category.tab}
				className={cn(
					'flex w-full items-center',
					tab === category.tab
						? 'font-semibold text-primary'
						: 'text-muted-foreground',
				)}
				onClick={() => handleTabChange(category.tab)}
			>
				<category.icon className="mr-2 h-4 w-4 flex-shrink-0" />
				<span className="group-data-[collapsible=icon]:hidden">
					{category.name}
				</span>
				<ChevronRight className="ml-auto h-4 w-4 group-data-[collapsible=icon]:hidden" />
			</SidebarMenuButton>
		</SidebarMenuItem>
	));
}
