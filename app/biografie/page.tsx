import type { Metadata } from 'next';
import Contact from '@/components/shared/Contact';
import HeroSection from '@/components/features/HeroSection';

export const metadata: Metadata = {
  title: 'Biografie | ACbleskDC',
  description: 'Historie a informace o tribute skupině ACbleskDC',
};

export default function BiografiePage() {
  return (
    <div className="homepage-wrapper">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content - Left Column */}
          <div className="lg:w-2/3">
            {/* Historie kapely */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-white">Historie kapely a členové</h2>

              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Projekt ACbleskDC vzniká přibližně v roce 2013 neplánovaně při zkoušení songů
                  zábavové kapely Stirly, která se věnovala produkci převzatých písní. Zábavové
                  hraní pověsila kapela na hřebík a začala se plně věnovat repertoáru světoznámé
                  australské kapely.
                </p>
                <p>
                  Pro odlišení od ostatních kapel jsme si mezi písmena AC DC ještě vložili blesk.
                </p>
                <p>
                  V současné době máme nacvičeno přes 20 nejznámějších písniček a dokážeme Vás svou
                  produkcí bavit něco kolem dvou hodin. Kapela se nesoustředí jen na produkci éry
                  Bon Scotta, ale uctíváme i Briana Johnsona.
                </p>
                <p>
                  Naše vystoupení může mít různou podobu. Od srazu motorkářů, přes firemní akce až
                  po jednoduché hospodské vystoupení. Pokud toužíte po osobním zážitku živé hudby
                  v našem podání, jsme pro Vás tou pravou volbou.
                </p>
              </div>

              {/* Členové kapely */}
              <div className="mt-12 space-y-12">
                {/* Gimli */}
                <div className="bg-black/50 p-6 rounded-lg border-t border-b border-gray-500 shadow-xl">
                  <h4 className="text-2xl font-bold text-acdc-red mb-2">Gimli</h4>
                  <p className="text-gray-300 mb-4">Martin Jež, zpěv</p>
                  <img
                    src="/images/20200530DSC_2309_RaHan_foto.jpg"
                    alt="Gimli - Martin Jež, zpěv"
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>

                {/* Kmotr */}
                <div className="bg-black/50 p-6 rounded-lg border-t border-b border-gray-500 shadow-xl">
                  <h4 className="text-2xl font-bold text-acdc-red mb-2">Kmotr</h4>
                  <p className="text-gray-300 mb-4">Honza Hynek, kytara</p>
                  <img
                    src="/images/20200530DSC_2226_RaHan_foto.jpg"
                    alt="Kmotr - Honza Hynek, kytara"
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>

                {/* Fibich */}
                <div className="bg-black/50 p-6 rounded-lg border-t border-b border-gray-500 shadow-xl">
                  <h4 className="text-2xl font-bold text-acdc-red mb-2">Fibich</h4>
                  <p className="text-gray-300 mb-4">Jindra Jež, kytara, zpěv</p>
                  <img
                    src="/images/20200530DSC_2193_RaHan_foto.jpg"
                    alt="Fibich - Jindra Jež, kytara, zpěv"
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>

                {/* Marast */}
                <div className="bg-black/50 p-6 rounded-lg border-t border-b border-gray-500 shadow-xl">
                  <h4 className="text-2xl font-bold text-acdc-red mb-2">Marast</h4>
                  <p className="text-gray-300 mb-4">Tomáš Krikl, basa, zpěv</p>
                  <img
                    src="/images/20200530DSC_2251_RaHan_foto.jpg"
                    alt="Marast - Tomáš Krikl, basa, zpěv"
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>

                {/* Papoch */}
                <div className="bg-black/50 p-6 rounded-lg border-t border-b border-gray-500 shadow-xl">
                  <h4 className="text-2xl font-bold text-acdc-red mb-2">Papoch</h4>
                  <p className="text-gray-300 mb-4">Jiří Staněk, bicí, zpěv</p>
                  <img
                    src="/images/20200530DSC_2325_RaHan_foto.jpg"
                    alt="Papoch - Jiří Staněk, bicí, zpěv"
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>
              </div>
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

