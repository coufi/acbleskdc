import { Song } from '@/types';

interface PlaylistTableProps {
  songs: Song[];
}

export default function PlaylistTable({ songs }: PlaylistTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden">
        <thead className="bg-acdc-black text-white">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-semibold">#</th>
            <th className="px-6 py-3 text-left text-sm font-semibold">Název</th>
            <th className="px-6 py-3 text-left text-sm font-semibold hidden md:table-cell">
              Album
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold hidden lg:table-cell">
              Rok
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
          {songs.map((song, index) => (
            <tr
              key={song.id}
              className="hover:bg-gray-50 dark:hover:bg-gray-700 transition"
            >
              <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                {index + 1}
              </td>
              <td className="px-6 py-4">
                <div className="text-sm font-medium">{song.title}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400 md:hidden">
                  {song.album} {song.year && `(${song.year})`}
                </div>
              </td>
              <td className="px-6 py-4 text-sm hidden md:table-cell">
                {song.album || '-'}
              </td>
              <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400 hidden lg:table-cell">
                {song.year || '-'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-4 text-sm text-gray-600 dark:text-gray-400 text-center">
        Celkem {songs.length} písní v repertoáru
      </div>
    </div>
  );
}

