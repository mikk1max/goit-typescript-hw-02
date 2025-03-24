import axios from "axios";
import { UnsplashResponse } from "./interfaces";

const API_KEY = import.meta.env.VITE_UNSPLASH_API_KEY;

axios.defaults.baseURL = "https://api.unsplash.com";

export const fetchImagesWithTags = async (
  query: string,
  page = 1
): Promise<UnsplashResponse> => {
  try {
    const response = await axios.get(`/search/photos`, {
      params: {
        query,
        page,
        client_id: API_KEY,
      },
    });

    return response.data as UnsplashResponse;
  } catch (error: unknown) {
    console.error("Error fetching images:", error);

    return { results: [], total: 0, total_pages: 0 } as UnsplashResponse;
  }
};
