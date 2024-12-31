'use client';

import { Button } from '~/components/ui/button';
import { SidebarTrigger } from '~/components/ui/sidebar';
import { PlusCircle } from 'lucide-react';
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from '~/components/ui/breadcrumb';
import { Separator } from '~/components/ui/separator';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';
import { useView } from '~/lib/view-context';
import { capitalizeFristChar } from '~/lib/utils';
import { ViewToggle } from '~/components/view-toggle';

export function DashboardHeader() {
	const name = useSession().data?.user?.name || 'Dashboard';
	const tab = useSearchParams().get('tab') || 'Whiteboards';
	const [view, setView] = useView();

	return (
		<header className="flex h-16 shrink-0 items-center gap-2 border-b">
			<div className="flex items-center gap-2 px-3">
				<SidebarTrigger />
				<Separator orientation="vertical" className="mr-2 h-4" />
				<Breadcrumb>
					<BreadcrumbList>
						<BreadcrumbItem className="hidden md:block">
							<Link href="/profile">{name}</Link>
						</BreadcrumbItem>
						<BreadcrumbSeparator className="hidden md:block" />
						<BreadcrumbItem>
							<BreadcrumbPage>
								{tab === 'trash'
									? 'Trash'
									: `${capitalizeFristChar(tab)} Whiteboards`}
							</BreadcrumbPage>
						</BreadcrumbItem>
					</BreadcrumbList>
				</Breadcrumb>
			</div>
			<div className="ml-auto mr-3 flex items-center space-x-4">
				<ViewToggle view={view} onViewChange={setView} />
				<Button>
					<PlusCircle className="mr-2 h-4 w-4" /> New Whiteboard
				</Button>
			</div>
		</header>
	);
}
