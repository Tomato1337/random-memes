import { useQuery } from "@siberiacancode/reactuse"
import { getMeme } from "@/shared/api"
import Wrapper from "./Wrapper"
import { Button } from "@/components/ui/button"

function App() {
	const { data, isFetching, isLoading, isError, error, refetch } =
		useQuery(getMeme)

	return (
		<Wrapper>
			<div className="flex-1 min-h-0 flex flex-col items-center justify-center gap-4 w-full">
				{isLoading && <p>Loading...</p>}
				{isError && (
					<div className="text-destructive border border-destructive p-4 rounded">
						Error:{" "}
						{error instanceof Error
							? error.message
							: "Unknown error"}
					</div>
				)}
				{data && (
					<div className="max-w-lg w-full flex-1 min-h-0 flex flex-col rounded-md overflow-hidden shadow-lg bg-card text-card-foreground">
						<div className="flex-1 min-h-0 flex items-center justify-center p-2">
							<img
								className="max-w-full max-h-full object-contain"
								src={data.url}
								alt={data.title}
							/>
						</div>
						<div className="px-6 py-4 shrink-0 border-t">
							<div className="font-bold text-xl mb-2 line-clamp-2">
								{data.title}
							</div>
							<p className="text-muted-foreground text-base line-clamp-1">
								Author: {data.author}
							</p>
						</div>
					</div>
				)}
				<Button
					className="cursor-pointer hover:scale-105 transition-transform"
					disabled={isFetching}
					onClick={() => refetch()}
				>
					Refresh
				</Button>
			</div>
		</Wrapper>
	)
}

export default App
