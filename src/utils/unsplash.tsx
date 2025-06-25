/**
 * Unsplash API
 */
import { createApi } from "unsplash-js";

const unsplash = createApi({
  accessKey: "j-tU2043ivUbkuVheJWIuNKgA2s8AAxTtdnFMEHusEQ",
});

export const getPhotos = (query: string = "travel") => {
  unsplash.photos
    .getRandom({ query: query, orientation: "landscape", count: 1 })
    .then((result) => {
      if (result.type === "success") {
        const photo = Array.isArray(result.response)
          ? result.response[0]
          : result.response;
        return photo;
      } else {
        console.error("Error:", result.errors);
      }
    })
    .catch((error) => {
      console.error("Fetch failed:", error);
    });
};
