'use client';

import WhiteboardList from '~/components/whiteboard-list';
import { useView } from '~/lib/view-context';

interface DashboardContentProps {
	whiteboards: {
		id: number;
		name: string;
		updatedAt: string;
		sharedBy?: string;
		previewUrl: string;
	}[];
}

export function DashboardContent({ whiteboards }: DashboardContentProps) {
	const [view] = useView();
	return (
		<main className="flex-1 space-y-8 p-4 md:p-6">
			<WhiteboardList whiteboards={whiteboards} view={view} />
		</main>
	);
}
