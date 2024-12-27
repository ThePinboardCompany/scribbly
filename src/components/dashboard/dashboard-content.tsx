'use client';

import { useState } from 'react';
import WhiteboardList from '~/components/whiteboard-list';
import { ViewToggle } from '~/components/view-toggle';

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
	const [view, setView] = useState<'small' | 'medium' | 'large'>('medium');

	return (
		<main className="mx-auto max-w-7xl flex-1 space-y-8 p-4 md:p-6">
			<div className="flex justify-end">
				<ViewToggle view={view} onViewChange={setView} />
			</div>
			<WhiteboardList whiteboards={whiteboards} view={view} />
		</main>
	);
}
