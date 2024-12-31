'use client';

import { LayoutGrid, LayoutList, Table2 } from 'lucide-react';
import { ToggleGroup, ToggleGroupItem } from '~/components/ui/toggle-group';
import { type ViewType } from '~/lib/utils';

interface ViewToggleProps {
	view: ViewType;
	onViewChange: (view: ViewType) => void;
}

export function ViewToggle({ view, onViewChange }: ViewToggleProps) {
	return (
		<ToggleGroup
			type="single"
			value={view || 'medium'}
			onValueChange={value => onViewChange(value as ViewType)}
		>
			<ToggleGroupItem value="small" aria-label="Small view">
				<LayoutList className="h-4 w-4" />
			</ToggleGroupItem>
			<ToggleGroupItem value="medium" aria-label="Medium view">
				<Table2 className="h-4 w-4" />
			</ToggleGroupItem>
			<ToggleGroupItem value="large" aria-label="Large view">
				<LayoutGrid className="h-4 w-4" />
			</ToggleGroupItem>
		</ToggleGroup>
	);
}
