'use client';

interface Concert {
  id: string;
  date: string;
  description: string;
}

interface ConcertListProps {
  concerts: Concert[];
}

export default function ConcertList({ concerts }: ConcertListProps) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Separate upcoming and past concerts based on today's date
  const upcomingConcerts = concerts
    .filter((concert) => new Date(concert.date) >= today)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  const pastConcerts = concerts
    .filter((concert) => new Date(concert.date) < today)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('cs-CZ', {
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <div className="space-y-8">
      {/* Upcoming Concerts */}
      {upcomingConcerts.length > 0 && (
        <section>
          <h2 className="text-3xl font-bold mb-6 text-white">Koncerty</h2>
          <div className="space-y-3 text-gray-300">
            {upcomingConcerts.map((concert) => (
              <p key={concert.id} className="text-lg">
                {formatDate(concert.date)} - {concert.description}
              </p>
            ))}
          </div>
        </section>
      )}

      {/* Past Concerts */}
      {pastConcerts.length > 0 && (
        <section className="mt-12">
          <h4 className="text-2xl font-bold mb-6 text-white">Odehrané:</h4>
          <div className="space-y-2 text-gray-300">
            {pastConcerts.map((concert) => (
              <p key={concert.id}>
                {formatDate(concert.date)} - {concert.description}
              </p>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

