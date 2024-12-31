import { DashboardSidebar, DashboardHeader } from '~/components/dashboard';
import { SidebarInset, SidebarProvider } from '~/components/ui/sidebar';
import { SessionProvider } from 'next-auth/react';
import { ViewProvider } from '~/lib/view-context';

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<ViewProvider>
			<SidebarProvider defaultOpen={true}>
				<DashboardSidebar />
				<SidebarInset>
					<SessionProvider>
						<DashboardHeader />
					</SessionProvider>
					<div className="flex flex-1 flex-col gap-4 p-4">{children}</div>
				</SidebarInset>
			</SidebarProvider>
		</ViewProvider>
	);
}
