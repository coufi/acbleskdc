import type { Metadata } from 'next';
import Contact from '@/components/shared/Contact';
import HeroSection from '@/components/features/HeroSection';
import PlaylistTable from '@/components/features/PlaylistTable';
import { getPlaylist } from '@/lib/data/repository';

export const metadata: Metadata = {
  title: 'Playlist | ACbleskDC',
  description: 'Repertoár písní tribute skupiny ACbleskDC',
};

export default async function PlaylistPage() {
  const songs = await getPlaylist();

  return (
    <div className="homepage-wrapper">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content - Left Column */}
          <div className="lg:w-2/3">
            {/* Playlist Section */}
            <section className="mb-12">
              <h1 className="text-4xl font-bold mb-8 text-white uppercase">Playlist</h1>
              <PlaylistTable songs={songs} />
            </section>

            {/* Hero Section with next concert */}
            <HeroSection />
          </div>

          {/* Sidebar - Right Column */}
          <aside className="lg:w-1/3">
            <div className="bg-black/50 p-6 rounded-lg border-t border-b border-gray-500 shadow-xl">
              <Contact />
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
