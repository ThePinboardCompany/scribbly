import { Button } from '~/components/ui/button';
import { formatDistanceToNow } from 'date-fns';
import Image from 'next/image';

interface Whiteboard {
	id: number;
	name: string;
	updatedAt: string;
	sharedBy?: string;
	previewUrl: string;
}

interface WhiteboardListProps {
	whiteboards: Whiteboard[];
	view: 'small' | 'medium' | 'large';
}

export default function WhiteboardList({
	whiteboards,
	view,
}: WhiteboardListProps) {
	const gridClass =
		{
			small: 'grid-cols-2 md:grid-cols-4 lg:grid-cols-6',
			medium: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
			large: 'grid-cols-1 md:grid-cols-2',
		}[view] || 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';

	return (
		<ul className={`grid gap-4 ${gridClass}`}>
			{whiteboards.map(whiteboard => (
				<li
					key={whiteboard.id}
					className="overflow-hidden rounded-lg bg-card text-card-foreground shadow-sm"
				>
					<div
						className={`relative ${
							view === 'small'
								? 'aspect-square'
								: view === 'large'
									? 'aspect-[4/3]'
									: 'aspect-video'
						} w-full`}
					>
						<Image
							src={whiteboard.previewUrl}
							alt={`Preview of ${whiteboard.name}`}
							fill
							className="bg-muted object-cover"
						/>
					</div>
					<div className={`p-2 ${view === 'large' ? 'p-4' : ''}`}>
						<h3
							className={`mb-1 truncate font-semibold ${
								view === 'small'
									? 'text-sm'
									: view === 'large'
										? 'text-lg'
										: 'text-base'
							}`}
						>
							{whiteboard.name}
						</h3>
						{view !== 'small' && (
							<p
								className={`mb-2 text-muted-foreground ${view === 'large' ? 'text-sm' : 'text-xs'}`}
							>
								Updated {formatDistanceToNow(new Date(whiteboard.updatedAt))}{' '}
								ago
								{whiteboard.sharedBy && ` by ${whiteboard.sharedBy}`}
							</p>
						)}
						<Button
							variant="outline"
							size={view === 'small' ? 'sm' : 'default'}
							className={`w-full ${view === 'small' ? 'text-xs' : ''}`}
						>
							{view === 'small' ? 'Open' : 'Open Whiteboard'}
						</Button>
					</div>
				</li>
			))}
		</ul>
	);
}
