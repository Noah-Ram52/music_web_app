const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
const BASE_URL = "https://www.googleapis.com/youtube/v3/search";

const fetchVideos = (query) => {
  const url = `${BASE_URL}?part=snippet&type=video&maxResults=6&q=${encodeURIComponent(query)}&key=${API_KEY}`;

  return fetch(url)
    .then((res) => {
      if (!res.ok) {
        throw new Error("Failed to fetch YouTube videos");
      }
      return res.json();
    })
    .then((data) =>
      (data.items || []).map((item) => ({
        title: item.snippet.title,
        videoId: item.id.videoId,
        thumbnail:
          item.snippet.thumbnails?.medium?.url ||
          `https://i.ytimg.com/vi/${item.id.videoId}/mqdefault.jpg`,
        channel: item.snippet.channelTitle,
        embedUrl: `https://www.youtube.com/embed/${item.id.videoId}?controls=1`,
      }))
    )
    .catch((error) => {
      console.error("YouTube API error:", error);
      return [];
    });
};

export function getClassicalVideos() {
  return fetchVideos("classical music");
}

export function getJazzVideos() {
  return fetchVideos("jazz music");
}

export function getNerdcoreVideos() {
  return fetchVideos("nerdcore music");
}