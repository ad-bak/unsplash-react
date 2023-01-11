import axios from "axios";
import secret from "./secret";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: `Client-ID ${secret}`,
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
