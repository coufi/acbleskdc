export interface Concert {
  id: string;
  title: string;
  date: string;
  time: string;
  venue: string;
  city: string;
  address?: string;
  ticketUrl?: string;
  status: 'upcoming' | 'past' | 'cancelled';
}

export interface Song {
  id: string;
  title: string;
  originalArtist: string;
  album?: string;
  year?: number;
  category?: string;
}

export interface Download {
  id: string;
  title: string;
  description?: string;
  type: 'image' | 'video' | 'audio' | 'document';
  url: string;
  fileSize?: string;
  thumbnail?: string;
}

