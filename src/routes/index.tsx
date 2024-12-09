import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
	return (
		<div class="grid h-screen place-items-center text-4xl font-semibold">
			Scribbly
		</div>
	);
});

export const head: DocumentHead = {
	title: 'Scribbly - Scribble your mind in realtime',
	meta: [
		{
			name: 'description',
			content:
				'A collaborative online whiteboard to brainstorm, plan, and visualize ideas in real-time',
		},
		{
			name: 'application-name',
			content: 'Scribbly',
		},
		{
			name: 'author',
			content: 'The Pinboard Company',
		},
		{
			name: 'keywords',
			content:
				'scribbly, scribble, whiteboard, collaboration brainstorm, plan, visualize, realtime, the pinboard company',
		},
		{
			name: 'creator',
			content: 'The Pinboard Company',
		},
		{
			name: 'publisher',
			content: 'The Pinboard Company',
		},
		{
			name: 'robots',
			content:
				'index, follow, notranslate, max-video-preview:5, max-image-preview:standard, max-snippet:10',
		},
	],
	links: [
		{
			rel: 'author',
			href: 'https://github.com/ThePinboardCompany',
		},
	],
};
