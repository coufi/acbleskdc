import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Biografie | ACbleskDC',
  description: 'Historie a informace o tribute skupině ACbleskDC',
};

export default function BiografiePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-acdc-red">Biografie</h1>

      <div className="max-w-4xl mx-auto space-y-6">
        <section>
          <h2 className="text-2xl font-bold mb-4">O kapele</h2>
          <p className="leading-relaxed mb-4">
            ACbleskDC je česká tribute rocková skupina věnující se hudbě legendární
            australské kapely AC/DC. Naším cílem je přinést fanouškům autentický
            zážitek z nejlepších hitů AC/DC v co nejvěrnější podobě.
          </p>
          <p className="leading-relaxed mb-4">
            Kapela vznikla s vizí oslavit odkaz jedné z největších rockových kapel
            všech dob. S respektem k originálu přinášíme energické koncerty plné
            nezapomenutelných hitů jako Highway to Hell, Back in Black, Thunderstruck
            a mnoha dalších.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Naše poslání</h2>
          <p className="leading-relaxed mb-4">
            Naším posláním je udržovat ducha rock&apos;n&apos;rollu živý a přinášet fanouškům
            nezapomenutelné koncertní zážitky. Věnujeme maximální pozornost jak
            zvukové, tak vizuální stránce našich vystoupení, abychom co nejlépe
            zachytili atmosféru originálních koncertů AC/DC.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Členové kapely</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Zpěv</h3>
              <p className="text-gray-600 dark:text-gray-400">Lead vocals</p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Kytara</h3>
              <p className="text-gray-600 dark:text-gray-400">Lead & Rhythm guitar</p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Baskytara</h3>
              <p className="text-gray-600 dark:text-gray-400">Bass guitar</p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Bicí</h3>
              <p className="text-gray-600 dark:text-gray-400">Drums</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

