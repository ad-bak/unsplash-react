import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: `Client-ID Th8kb7YsjNPNOgiwE7irGIZOFL-1lxKu3YuQT-K73eA`,
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
