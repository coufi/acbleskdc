import type { Metadata } from 'next';
import { getPlaylist } from '@/lib/data/repository';
import PlaylistTable from '@/components/features/PlaylistTable';

export const metadata: Metadata = {
  title: 'Playlist | ACbleskDC',
  description: 'Repertoár písní tribute skupiny ACbleskDC',
};

// Revalidate every 24 hours
export const revalidate = 86400;

export default async function PlaylistPage() {
  const playlist = await getPlaylist();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-acdc-red">Playlist</h1>

      <div className="mb-6">
        <p className="text-lg leading-relaxed">
          Náš repertoár obsahuje ty nejlepší hity AC/DC. Na koncertech hrajeme
          energickou směs klasických hitů, které roztančí každého fanouška rocku!
        </p>
      </div>

      <PlaylistTable songs={playlist} />

      <div className="mt-8 bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Máte speciální požadavek?</h2>
        <p className="leading-relaxed">
          Kontaktujte nás, pokud máte speciální požadavek na písničku pro vaši akci.
          Rádi rozšíříme náš repertoár podle vašich přání!
        </p>
      </div>
    </div>
  );
}

