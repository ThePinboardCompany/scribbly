import { Button } from '~/components/ui/button';
import { SidebarTrigger } from '~/components/ui/sidebar';
import { PlusCircle } from 'lucide-react';

interface DashboardHeaderProps {
	title: string;
}

export function DashboardHeader({ title }: DashboardHeaderProps) {
	return (
		<header className="border-b">
			<div className="flex h-16 items-center gap-4 px-4">
				<SidebarTrigger />
				<h1 className="text-2xl font-semibold">{title}</h1>
				<div className="ml-auto flex items-center space-x-4">
					<Button>
						<PlusCircle className="mr-2 h-4 w-4" /> New Whiteboard
					</Button>
				</div>
			</div>
		</header>
	);
}
