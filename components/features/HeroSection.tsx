import { getNextConcert } from '@/lib/data/repository';

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('cs-CZ', {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
  });
}

export default async function HeroSection() {
  const nextConcert = await getNextConcert();

  return (
    <section className="text-center mb-8">
      <div className="mb-8">
        <h4 className="text-2xl font-bold text-white mb-8 uppercase tracking-wide">
          Nejbližší vystoupení
        </h4>
        {nextConcert ? (
          <h1 className="text-4xl md:text-5xl font-bold mb-12 text-white font-sans">
            {formatDate(nextConcert.date)} - {nextConcert.description}
          </h1>
        ) : (
          <h1 className="text-4xl md:text-5xl font-bold mb-12 text-white font-sans">
            Žádné plánované vystoupení
          </h1>
        )}
      </div>

      {/* Animated GIF Section */}
      <div className="mb-12 flex justify-center">
        <div className="animated-section bg-black/50 p-4 rounded-lg border-4 border-gray-600 shadow-2xl">
          <img
            src="/images/acbleskdc-performance.gif"
            alt="ACbleskDC Live Performance"
            className="w-full max-w-2xl mx-auto rounded"
          />
        </div>
      </div>

      {/* Social Media Links */}
      <div className="flex flex-wrap justify-center gap-6 mb-12">
        <a
          href="https://www.facebook.com/pages/Acbleskdc/507367506026104"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link hover:opacity-80 transition-opacity duration-300"
        >
          <img
            src="/images/facebook-icon.jpg"
            alt="Facebook"
            className="h-12 rounded"
          />
        </a>
        <a
            href="https://bandzone.cz/acbleskdc"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link hover:opacity-80 transition-opacity duration-300"
        >
          <img
              src="/images/bandzone-icon.jpg"
              alt="Bandzone"
              className="h-12 rounded"
          />
        </a>
      </div>
    </section>
  );
}

