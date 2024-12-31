'use client';

import { useState, useContext, createContext } from 'react';

export type ViewType = 'small' | 'medium' | 'large';

interface ViewContextType {
	view: ViewType;
	changeView: (view: ViewType) => void;
}

const ViewContext = createContext<ViewContextType>({
	view: 'medium',
	changeView: () => void 0,
});

export function ViewProvider({ children }: { children: React.ReactNode }) {
	const [view, setView] = useState<ViewType>(() => {
		const savedView = localStorage.getItem('view') as ViewType | null;
		if (savedView) return savedView;
		return 'medium';
	});

	const changeView = (view: ViewType) => {
		setView(() => {
			localStorage.setItem('view', view);
			return view;
		});
	};

	return (
		<ViewContext.Provider value={{ view, changeView }}>
			{children}
		</ViewContext.Provider>
	);
}

export function useView() {
	const context = useContext(ViewContext);
	if (context === undefined) {
		throw new Error('useView must be used within a ViewProvider');
	}
	return [context.view, context.changeView] as const;
}
