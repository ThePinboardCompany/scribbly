import { RootNavBar } from '~/components/root-nav-bar';

export default function MainLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<>
			<RootNavBar />
			{children}
		</>
	);
}
