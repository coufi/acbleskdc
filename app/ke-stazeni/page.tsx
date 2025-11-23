import type { Metadata } from 'next';
import Contact from '@/components/shared/Contact';
import HeroSection from '@/components/features/HeroSection';
import AudioPlayer from '@/components/features/AudioPlayer';

export const metadata: Metadata = {
  title: 'Ke stažení | ACbleskDC',
  description: 'Materiály ke stažení - fotky, videa a další obsah od ACbleskDC',
};

export default function KeStazeniPage() {
  return (
    <div className="homepage-wrapper">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content - Left Column */}
          <div className="lg:w-2/3">
            {/* MP3 a video Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-white">MP3 a video</h2>
              <div className="mb-8">
                <AudioPlayer
                  src="/downloads/Hells bells.mp3"
                  title="Hells Bells"
                />
                <AudioPlayer
                  src="/downloads/Highway to hell.mp3"
                  title="Highway to Hell"
                />
                <AudioPlayer
                  src="/downloads/You shook me all night long.mp3"
                  title="You Shook me all Night long"
                />
              </div>

              {/* YouTube Videos */}
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <div className="aspect-video">
                  <iframe
                    src="https://www.youtube.com/embed/DkO3tliIFBo"
                    className="w-full h-full rounded-lg"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="aspect-video">
                  <iframe
                    src="https://www.youtube.com/embed/a3yES1FQTqs"
                    className="w-full h-full rounded-lg"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="aspect-video">
                  <iframe
                    src="https://www.youtube.com/embed/yqL9mS8yLxw"
                    className="w-full h-full rounded-lg"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </section>

            {/* Logo Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-white">Logo</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <a href="/images/logo/1acbleskdc.png" target="_blank" className="bg-white p-4 rounded-lg hover:shadow-xl transition-shadow">
                  <img src="/images/logo/1acbleskdc-small.png" alt="ACbleskDC Logo 1" className="w-full h-auto scale-80" />
                </a>
                <a href="/images/logo/2acbleskdc.png" target="_blank" className="bg-white p-4 rounded-lg hover:shadow-xl transition-shadow">
                  <img src="/images/logo/2acbleskdc-small.png" alt="ACbleskDC Logo 2" className="w-full h-auto scale-80" />
                </a>
                <a href="/images/logo/3acbleskdc.png" target="_blank" className="bg-white p-4 rounded-lg hover:shadow-xl transition-shadow">
                  <img src="/images/logo/3acbleskdc-small.png" alt="ACbleskDC Logo 3" className="w-full h-auto scale-80" />
                </a>
                <a href="/images/logo/4acbleskdc.png" target="_blank" className="bg-white p-4 rounded-lg hover:shadow-xl transition-shadow">
                  <img src="/images/logo/4acbleskdc-small.png" alt="ACbleskDC Logo 4" className="w-full h-auto scale-80" />
                </a>
                <a href="/images/logo/acbleskdc-logo.png" target="_blank" className="bg-white p-4 rounded-lg hover:shadow-xl transition-shadow">
                  <img src="/images/logo/acbleskdc-logo-small.png" alt="ACbleskDC Logo 5" className="w-full h-auto scale-80" />
                </a>
                <a href="/images/logo/acbleskdc.png" target="_blank" className="bg-white p-4 rounded-lg hover:shadow-xl transition-shadow">
                  <img src="/images/logo/acbleskdc-small.png" alt="ACbleskDC Logo 6" className="w-full h-auto scale-80" />
                </a>
              </div>
            </section>

            {/* Hero Section with next concert */}
            <HeroSection />
          </div>

          {/* Sidebar - Right Column */}
          <aside className="lg:w-1/3">
            {/* Technical Rider */}
            <div className="bg-black/50 p-6 rounded-lg border-t border-b border-gray-500 shadow-xl mb-8">
              <p className="text-lg">
                <a
                  href="/downloads/Technický raider ACbleskDC.pdf"
                  className="text-white hover:text-acdc-red transition-colors underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Technický raider ACbleskDC.pdf
                </a>
              </p>
            </div>

            {/* Contact Component */}
            <div className="bg-black/50 p-6 rounded-lg border-t border-b border-gray-500 shadow-xl">
              <Contact />
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
