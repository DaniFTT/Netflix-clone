const API_KEY = "4bad9356adc4bfedc552a350b2d6db5b";
const API_BASE = "https://api.themoviedb.org/3";

const basicFetch = async (endpoint) => {
  const req = await fetch(`${API_BASE}${endpoint}`);
  const json = await req.json();

  return json;
};

async function GetMovieInfo(movieId, type) {
  let info = {};

  if (movieId) {
    switch (type) {
      case "movie":
        info = await basicFetch(
          `/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`
        );
        break;
      case "tv":
        info = await basicFetch(
          `/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`
        );
        break;
      default:
        info = null;
        break;
    }
  }

  return info;
}

export default GetMovieInfo;
