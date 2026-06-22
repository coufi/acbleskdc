import type { Metadata } from 'next';
import Contact from '@/components/shared/Contact';
import HeroSection from '@/components/features/HeroSection';
import ConcertList from '@/components/features/ConcertList';
import { getConcerts } from '@/lib/data/repository';

export const metadata: Metadata = {
  title: 'Koncerty | ACbleskDC',
  description: 'Přehled koncertů tribute skupiny ACbleskDC',
};

export const dynamic = 'force-dynamic';

export default async function KoncertyPage() {
  const concerts = await getConcerts();

  return (
    <div className="homepage-wrapper">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content - Left Column */}
          <div className="lg:w-2/3">
            {/* Koncerty seznam */}
            <section className="mb-12">
              <ConcertList concerts={concerts} />
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
