'use client';

interface Song {
  id: string;
  title: string;
}

interface PlaylistTableProps {
  songs: Song[];
}

export default function PlaylistTable({ songs }: PlaylistTableProps) {
  return (
    <div className="space-y-3 text-gray-300">
      {songs.map((song) => (
        <p key={song.id} className="text-lg">
          {song.title}
        </p>
      ))}
    </div>
  );
}

