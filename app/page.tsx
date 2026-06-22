import Contact from '@/components/shared/Contact';
import HeroSection from '@/components/features/HeroSection';

export const dynamic = 'force-dynamic';

export default function HomePage() {
  return (
    <div className="homepage-wrapper">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Band Photo Hero */}
        <div className="mb-8">
          <div className="relative overflow-hidden rounded-lg shadow-2xl border-4 border-gray-700">
            <img
              src="/images/20200530DSC_2158_RaHan_foto.jpg"
              alt="ACbleskDC - Revival kapela AC/DC"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content - Left Column */}
          <div className="lg:w-2/3">
            <HeroSection />
          </div>

          {/* Sidebar - Right Column */}
          <aside className="lg:w-1/3">
            <div className="bg-black/50 p-6 rounded-lg border-t border-b border-gray-500 shadow-xl">
              <Contact />
            </div>
          </aside>
        </div>

        {/* Quick Links Section - Below */}
        <section className="grid md:grid-cols-2 gap-8 py-8 mt-8">
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
    </div>
  );
}
