const API_URL = "https://meme-api.com/gimme"

import { type MemeResponse } from "./types"

export const getMeme = async (): Promise<MemeResponse> => {
	const response = await fetch(API_URL)
	if (!response.ok) {
		throw new Error(`Failed to fetch meme: ${response.statusText}`)
	}
	const data: MemeResponse = await response.json()
	return data
}
