import { Concert } from '@/types';

interface ConcertListProps {
  concerts: Concert[];
  isPast?: boolean;
}

export default function ConcertList({ concerts, isPast = false }: ConcertListProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {concerts.map((concert) => (
        <article
          key={concert.id}
          className={`bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border-l-4 ${
            isPast ? 'border-gray-400' : 'border-acdc-red'
          }`}
        >
          <h3 className="text-xl font-bold mb-2">{concert.title}</h3>

          <div className="space-y-2 text-sm">
            <div className="flex items-start">
              <svg
                className="h-5 w-5 mr-2 mt-0.5 text-acdc-red"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <div>
                <p className="font-semibold">
                  {new Date(concert.date).toLocaleDateString('cs-CZ', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
                <p className="text-gray-600 dark:text-gray-400">{concert.time}</p>
              </div>
            </div>

            <div className="flex items-start">
              <svg
                className="h-5 w-5 mr-2 mt-0.5 text-acdc-red"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <div>
                <p className="font-semibold">{concert.venue}</p>
                <p className="text-gray-600 dark:text-gray-400">{concert.city}</p>
                {concert.address && (
                  <p className="text-gray-600 dark:text-gray-400 text-xs">
                    {concert.address}
                  </p>
                )}
              </div>
            </div>
          </div>

          {concert.ticketUrl && !isPast && (
            <div className="mt-4">
              <a
                href={concert.ticketUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full text-center bg-acdc-red text-white px-4 py-2 rounded hover:bg-red-700 transition"
              >
                Koupit vstupenky
              </a>
            </div>
          )}
        </article>
      ))}
    </div>
  );
}

