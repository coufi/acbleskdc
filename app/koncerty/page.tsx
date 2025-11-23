import type { Metadata } from 'next';
import { getUpcomingConcerts, getPastConcerts } from '@/lib/data/repository';
import ConcertList from '@/components/features/ConcertList';

export const metadata: Metadata = {
  title: 'Koncerty | ACbleskDC',
  description: 'Přehled koncertů tribute skupiny ACbleskDC',
};

// Revalidate every 24 hours
export const revalidate = 86400;

export default async function KoncertyPage() {
  const upcomingConcerts = await getUpcomingConcerts();
  const pastConcerts = await getPastConcerts();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-acdc-red">Koncerty</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Nadcházející koncerty</h2>
        {upcomingConcerts.length > 0 ? (
          <ConcertList concerts={upcomingConcerts} />
        ) : (
          <p className="text-gray-600 dark:text-gray-400">
            Momentálně nejsou naplánovány žádné koncerty. Sledujte naše sociální sítě pro aktualizace!
          </p>
        )}
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">Minulé koncerty</h2>
        {pastConcerts.length > 0 ? (
          <ConcertList concerts={pastConcerts} isPast />
        ) : (
          <p className="text-gray-600 dark:text-gray-400">
            Zatím jsme neodehráli žádné koncerty.
          </p>
        )}
      </section>
    </div>
  );
}

