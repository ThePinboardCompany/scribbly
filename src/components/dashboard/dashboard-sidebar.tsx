import Link from 'next/link';
import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuItem,
	SidebarMenuButton,
	SidebarFooter,
} from '~/components/ui/sidebar';
import { PenLine } from 'lucide-react';
import { UserAvatar } from '~/components/user-avatar';
import { DashboardSidebarCategory } from '~/components/dashboard';
import { Suspense } from 'react';

export function DashboardSidebar() {
	return (
		<Sidebar className="border-r" collapsible="icon">
			<SidebarHeader>
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton size="lg" asChild>
							<Link href="/">
								<div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
									<PenLine className="size-4" />
								</div>
								<div className="flex flex-col gap-0.5 leading-none">
									<span className="font-semibold">Scribbly</span>
									<span className="">v0.0.0</span>
								</div>
							</Link>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarHeader>
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupLabel className="group-data-[collapsible=icon]:hidden">
						Categories
					</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							<Suspense>
								<DashboardSidebarCategory />
							</Suspense>
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
			<SidebarFooter>
				<UserAvatar view="sidebaritem" />
			</SidebarFooter>
		</Sidebar>
	);
}
