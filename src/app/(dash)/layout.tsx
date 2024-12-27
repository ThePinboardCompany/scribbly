import { DashboardSidebar } from '~/components/dashboard';
import { SidebarProvider } from '~/components/ui/sidebar';

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<SidebarProvider defaultOpen={true}>
			<div className="flex h-screen overflow-hidden">
				<DashboardSidebar />
				<div className="flex flex-1 flex-col overflow-hidden">{children}</div>
			</div>
		</SidebarProvider>
	);
}
