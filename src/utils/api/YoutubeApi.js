// src/utils/YouTubeApi.js
const YOUTUBE_API_KEY = 'AIzaSyAuLR6zzZ3U9bBXg0XXlCNwU2U_gdleCLc'; // Get from Google Cloud Console
const YOUTUBE_BASE_URL = 'https://www.googleapis.com/youtube/v3';

export async function getJazzVideos() {
  const response = await fetch(
    `${YOUTUBE_BASE_URL}/search?part=snippet&type=video&videoCategoryId=10&q=jazz&maxResults=6&key=${YOUTUBE_API_KEY}`
  );
  const data = await response.json();
  return data.items.map(item => ({
    title: item.snippet.title,
    videoId: item.id.videoId,
    thumbnail: item.snippet.thumbnails.medium.url,
    channel: item.snippet.channelTitle
  }));
}

export async function getClassicalVideos() {
  const response = await fetch(
    `${YOUTUBE_BASE_URL}/search?part=snippet&type=video&videoCategoryId=10&q=classical&maxResults=6&key=${YOUTUBE_API_KEY}`
  );
  const data = await response.json();
  return data.items.map(item => ({
    title: item.snippet.title,
    videoId: item.id.videoId,
    thumbnail: item.snippet.thumbnails.medium.url,
    channel: item.snippet.channelTitle
  }));
}

export async function getNerdcoreVideos() {
  const response = await fetch(
    `${YOUTUBE_BASE_URL}/search?part=snippet&type=video&videoCategoryId=10&q=nerdcore&maxResults=6&key=${YOUTUBE_API_KEY}`
  );
  const data = await response.json();
  return data.items.map(item => ({
    title: item.snippet.title,
    videoId: item.id.videoId,
    thumbnail: item.snippet.thumbnails.medium.url,
    channel: item.snippet.channelTitle
  }));
}