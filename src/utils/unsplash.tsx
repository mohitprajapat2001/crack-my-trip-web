/**
 * Unsplash API
 */
import { createApi } from "unsplash-js";

const unsplash = createApi({
  accessKey: "j-tU2043ivUbkuVheJWIuNKgA2s8AAxTtdnFMEHusEQ",
});

/**
 * Fetches a random photo from Unsplash using the given query.
 *
 * The returned photo is a string representing the URL of the photo.
 *
 * @param {string} [query="travel"] - The query to search for.
 * @returns {Promise<string | null>} - A promise resolving to the URL of the fetched photo, or null if the fetch fails.
 */
export const getPhotos = async (query: string = "travel") => {
  try {
    const result = await unsplash.photos.getRandom({
      query: query,
      orientation: "landscape",
      count: 1,
    });

    if (result.type === "success") {
      const photo = Array.isArray(result.response)
        ? result.response[0]
        : result.response;
      if (photo != null) {
        return photo.urls.raw;
      }
    } else {
      console.error("Error:", result.errors);
      return null;
    }
  } catch (error) {
    console.error("Fetch failed:", error);
    return null;
  }
};
