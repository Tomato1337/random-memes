export default function Wrapper({ children }: { children: React.ReactNode }) {
	return (
		<div className="p-4 w-full h-screen ">
			<div className="mx-auto w-full max-w-7xl flex flex-col h-full">
				<h1 className="text-3xl text-center font-bold mb-4">
					Meme Generator
				</h1>
				<main className="flex-1 min-h-0 flex flex-col">{children}</main>
			</div>
		</div>
	)
}
