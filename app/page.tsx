export default function HomePage() {
  return (
    <div className="homepage-wrapper">
      {/* Main Hero Section */}
      <section className="text-center py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h4 className="text-2xl font-bold text-white mb-8 uppercase tracking-wide">
              Nejbližší vystoupení
            </h4>
            <h1 className="text-4xl md:text-5xl font-bold mb-12 text-white font-sans">
              6.12.2025 - Rabínův šenk - Boskovice
            </h1>
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
                className="h-12 border-2 border-orange-500 rounded"
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
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="grid md:grid-cols-2 gap-8 py-8 px-4 max-w-6xl mx-auto">
        <div className="content-box bg-black/50 p-8 rounded-lg border-t border-b border-gray-500 shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-2xl font-bold mb-4 text-white">Další koncerty</h2>
          <p className="mb-6 text-gray-300">Přijďte nás vidět na živých vystoupeních!</p>
          <a
            href="/koncerty"
            className="inline-block bg-acdc-red hover:bg-red-700 text-white font-bold px-8 py-3 rounded transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Zobrazit koncerty
          </a>
        </div>

        <div className="content-box bg-black/50 p-8 rounded-lg border-t border-b border-gray-500 shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-2xl font-bold mb-4 text-white">Náš repertoár</h2>
          <p className="mb-6 text-gray-300">Podívejte se na seznam písní, které hrajeme.</p>
          <a
            href="/playlist"
            className="inline-block bg-acdc-red hover:bg-red-700 text-white font-bold px-8 py-3 rounded transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Zobrazit playlist
          </a>
        </div>
      </section>
    </div>
  );
}

