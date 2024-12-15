export const runtime = 'edge';

export default function NotFound() {
	return (
		<div className="flex min-h-screen items-center justify-center">
			<div className="text-center">
				<h1 className="text-9xl font-extrabold">404</h1>
				<p className="mt-4 text-xl">Page not found</p>
			</div>
		</div>
	);
}
