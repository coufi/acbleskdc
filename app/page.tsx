export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center py-16">
        <h1 className="text-5xl font-bold mb-4 text-acdc-red">
          ACbleskDC
        </h1>
        <p className="text-xl mb-8">
          Oficiální tribute rocková skupina AC/DC
        </p>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg leading-relaxed">
            Vítejte na oficiálních stránkách české tribute kapely ACbleskDC.
            Přinášíme vám nezapomenutelné koncerty s písněmi legendární kapely AC/DC.
          </p>
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-8 py-8">
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Nejbližší koncerty</h2>
          <p className="mb-4">Přijďte nás vidět na živých vystoupeních!</p>
          <a
            href="/koncerty"
            className="inline-block bg-acdc-red text-white px-6 py-2 rounded hover:bg-red-700 transition"
          >
            Zobrazit koncerty
          </a>
        </div>

        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Náš repertoár</h2>
          <p className="mb-4">Podívejte se na seznam písní, které hrajeme.</p>
          <a
            href="/playlist"
            className="inline-block bg-acdc-red text-white px-6 py-2 rounded hover:bg-red-700 transition"
          >
            Zobrazit playlist
          </a>
        </div>
      </section>
    </div>
  );
}

