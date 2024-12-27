import { ChevronsUpDown } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar';
import {
	DropdownMenu,
	DropdownMenuTrigger,
} from '~/components/ui/dropdown-menu';
import { Button } from '~/components/ui/button';
import { auth } from '~/server/auth';
import { SidebarMenuButton } from '~/components/ui/sidebar';
import { UserAvatarPanel } from '~/components/user-avatar';

export async function UserAvatar({
	view,
}: {
	view: 'sidebaritem' | 'roundedavatar';
}) {
	const session = await auth();

	if (view === 'roundedavatar') {
		return (
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button variant="ghost" className="relative h-8 w-8 rounded-full">
						<Avatar className="h-8 w-8">
							<AvatarImage
								src={session?.user?.image ? session.user.image : undefined}
								alt={`@${session?.user?.name ? session.user.name : 'Guest'}`}
							/>
							<AvatarFallback>
								{session?.user?.name ? session.user.name.slice(0, 2) : 'Gu'}
							</AvatarFallback>
						</Avatar>
					</Button>
				</DropdownMenuTrigger>
				<UserAvatarPanel session={session} />
			</DropdownMenu>
		);
	}

	if (view === 'sidebaritem') {
		return (
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<SidebarMenuButton
						size="lg"
						className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
					>
						<Avatar className="h-8 w-8 rounded-lg">
							<AvatarImage
								src={session?.user?.image ? session.user.image : undefined}
								alt={`@${session?.user?.name ? session.user.name : 'Guest'}`}
							/>
							<AvatarFallback className="rounded-lg">
								{session?.user?.name ? session.user.name.slice(0, 2) : 'Gu'}
							</AvatarFallback>
						</Avatar>
						<div className="grid flex-1 text-left text-sm leading-tight">
							<span className="truncate font-semibold">
								{session?.user?.name ? session.user.name : 'Guest'}
							</span>
							<span className="truncate text-xs">
								{session?.user?.email
									? session?.user.email
									: 'guest@scribbly.pages.dev'}
							</span>
						</div>
						<ChevronsUpDown className="ml-auto size-4" />
					</SidebarMenuButton>
				</DropdownMenuTrigger>
				<UserAvatarPanel session={session} />
			</DropdownMenu>
		);
	}

	return null;
}
