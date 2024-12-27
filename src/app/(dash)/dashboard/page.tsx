import { type Metadata } from 'next';
import { redirect } from 'next/navigation';
import { DashboardContent, DashboardHeader } from '~/components/dashboard';
import { auth } from '~/server/auth';

export const metadata: Metadata = {
	title: 'Dashboard - Scribbly',
};

const allWhiteboards = [
	{
		id: 1,
		name: 'Project Brainstorm',
		updatedAt: '2023-06-01',
		previewUrl: '/placeholder.svg?height=128&width=128',
	},
	{
		id: 2,
		name: 'Team Meeting Notes',
		updatedAt: '2023-05-28',
		previewUrl: '/placeholder.svg?height=128&width=128',
	},
	{
		id: 3,
		name: 'Product Roadmap',
		updatedAt: '2023-05-25',
		previewUrl: '/placeholder.svg?height=128&width=128',
	},
	{
		id: 4,
		name: 'Personal Goals',
		updatedAt: '2023-05-20',
		previewUrl: '/placeholder.svg?height=128&width=128',
	},
	{
		id: 5,
		name: 'Book Ideas',
		updatedAt: '2023-05-15',
		previewUrl: '/placeholder.svg?height=128&width=128',
	},
	{
		id: 6,
		name: 'Vacation Planning',
		updatedAt: '2023-05-10',
		previewUrl: '/placeholder.svg?height=128&width=128',
	},
	{
		id: 7,
		name: 'Team Project',
		updatedAt: '2023-05-18',
		sharedBy: 'Alice',
		previewUrl: '/placeholder.svg?height=128&width=128',
	},
	{
		id: 8,
		name: 'Client Presentation',
		updatedAt: '2023-05-12',
		sharedBy: 'Bob',
		previewUrl: '/placeholder.svg?height=128&width=128',
	},
	{
		id: 9,
		name: 'Research Notes',
		updatedAt: '2023-05-05',
		sharedBy: 'Charlie',
		previewUrl: '/placeholder.svg?height=128&width=128',
	},
];

export default async function DashboardPage() {
	const session = await auth();
	if (!session) return redirect('/signin');

	return (
		<>
			<DashboardHeader title="All Whiteboards" />
			<div className="flex-1 overflow-auto">
				<DashboardContent whiteboards={allWhiteboards} />
			</div>
		</>
	);
}
