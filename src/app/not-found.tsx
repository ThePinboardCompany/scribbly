export const runtime = 'edge';

export default function NotFound() {
	return (
		<div className="flex h-screen flex-col items-center justify-center text-center">
			<div className="leading-[48px]">
				<h1 className="mr-5 inline-block h-full border-r border-solid border-foreground/30 pr-5 align-top text-2xl font-medium leading-[48px]">
					404
				</h1>
				<div className="inline-block">
					<h2 className="text-base font-normal leading-[48px]">
						This page could not be found.
					</h2>
				</div>
			</div>
		</div>
	);
}
