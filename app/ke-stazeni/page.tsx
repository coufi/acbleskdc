import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ke stažení | ACbleskDC',
  description: 'Materiály ke stažení - fotky, videa a další obsah od ACbleskDC',
};

export default function KeStazeniPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-acdc-red">Ke stažení</h1>

      <div className="max-w-4xl mx-auto space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">Promo materiály</h2>
          <p className="leading-relaxed mb-6">
            Zde najdete fotografie, videa a další materiály pro promotion a média.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Fotografie</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Profesionální fotografie z koncertů a promo fotky
              </p>
              <button
                className="bg-acdc-red text-white px-4 py-2 rounded hover:bg-red-700 transition"
                disabled
              >
                Připravujeme
              </button>
            </div>

            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Videa</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Záznamy z živých vystoupení
              </p>
              <button
                className="bg-acdc-red text-white px-4 py-2 rounded hover:bg-red-700 transition"
                disabled
              >
                Připravujeme
              </button>
            </div>

            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Press Kit</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Kompletní tisková sada pro média
              </p>
              <button
                className="bg-acdc-red text-white px-4 py-2 rounded hover:bg-red-700 transition"
                disabled
              >
                Připravujeme
              </button>
            </div>

            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Logo</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Logo kapely v různých formátech
              </p>
              <button
                className="bg-acdc-red text-white px-4 py-2 rounded hover:bg-red-700 transition"
                disabled
              >
                Připravujeme
              </button>
            </div>
          </div>
        </section>

        <section className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg">
          <h3 className="text-lg font-bold mb-2">Pro média</h3>
          <p className="leading-relaxed">
            Pokud jste z médií a potřebujete speciální materiály nebo rozhovor,
            kontaktujte nás prosím přímo přes naše sociální sítě nebo email.
          </p>
        </section>
      </div>
    </div>
  );
}

