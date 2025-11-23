import { Concert, Song, Download } from '@/types';
import concertsData from '@/data/concerts.json';
import playlistData from '@/data/playlist.json';

/**
 * Data repository interface for future extensibility
 * Can be swapped to API or Database implementation
 */

// Concert repository
export async function getConcerts(): Promise<Concert[]> {
  // Simulate async operation (future API call)
  return Promise.resolve(concertsData as Concert[]);
}

export async function getUpcomingConcerts(): Promise<Concert[]> {
  const concerts = await getConcerts();
  const now = new Date();
  return concerts
    .filter((concert) => {
      const concertDate = new Date(concert.date);
      return concert.status === 'upcoming' && concertDate >= now;
    })
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
}

export async function getPastConcerts(): Promise<Concert[]> {
  const concerts = await getConcerts();
  const now = new Date();
  return concerts
    .filter((concert) => {
      const concertDate = new Date(concert.date);
      return concert.status === 'past' || concertDate < now;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getConcertById(id: string): Promise<Concert | null> {
  const concerts = await getConcerts();
  return concerts.find((concert) => concert.id === id) || null;
}

// Playlist repository
export async function getPlaylist(): Promise<Song[]> {
  return Promise.resolve(playlistData as Song[]);
}

export async function getPlaylistByCategory(category: string): Promise<Song[]> {
  const playlist = await getPlaylist();
  return playlist.filter((song) => song.category === category);
}

export async function getSongById(id: string): Promise<Song | null> {
  const playlist = await getPlaylist();
  return playlist.find((song) => song.id === id) || null;
}

// Downloads repository (placeholder)
export async function getDownloads(): Promise<Download[]> {
  // TODO: Implement when downloads data is available
  return Promise.resolve([]);
}

