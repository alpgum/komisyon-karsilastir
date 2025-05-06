import { Navbar } from "@/components/navbar"
import { TaxCalculator } from "@/components/tax-calculator"

export default function TaxCalculatorPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="py-12 md:py-20 bg-gradient-to-b from-white to-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <h1 className="text-3xl md:text-5xl font-bold tracking-tighter">2025 ABD Vergi Hesaplama Aracı</h1>
              <p className="text-gray-500 md:text-xl max-w-[700px]">
                ABD'de elde ettiğiniz gelirin vergi yükümlülüğünü hesaplayın.
              </p>
            </div>

            <TaxCalculator />

            <div className="mt-16 max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-6">ABD Vergi Sistemi Hakkında</h2>
              <div className="prose max-w-none">
                <p>
                  ABD vergi sistemi, federal, eyalet ve yerel olmak üzere üç seviyeden oluşur. Federal vergiler tüm ABD
                  vatandaşları ve yerleşik olmayan kişiler için geçerlidir, ancak eyalet ve yerel vergiler bölgeye göre
                  değişiklik gösterir.
                </p>
                <p>
                  Bireysel gelir vergisi, ABD'de en önemli vergi türlerinden biridir. Federal gelir vergisi, artan
                  oranlı bir yapıya sahiptir, yani gelir arttıkça vergi oranı da artar. 2025 yılı için bireysel federal
                  gelir vergisi oranları %10 ile %37 arasında değişmektedir.
                </p>
                <p>
                  Kurumlar için federal vergi oranı ise sabit %21'dir. Ancak, eyalet kurumlar vergisi oranları eyaletten
                  eyalete değişiklik gösterir ve bu da şirketlerin toplam vergi yükünü etkiler.
                </p>
                <p>
                  ABD'de vergi beyannamesi doldururken, çeşitli vergi indirimleri ve muafiyetlerden yararlanabilirsiniz.
                  Bu indirimler, eğitim harcamaları, ipotek faizi, hayır kurumlarına yapılan bağışlar ve tıbbi
                  harcamalar gibi çeşitli kategorilerde olabilir.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 md:h-16">
          <p className="text-sm text-gray-500">&copy; 2025 TransferKarşılaştır. Tüm hakları saklıdır.</p>
          <nav className="flex gap-4 sm:gap-6">
            <a href="#" className="text-sm text-gray-500 hover:underline">
              Gizlilik Politikası
            </a>
            <a href="#" className="text-sm text-gray-500 hover:underline">
              Kullanım Şartları
            </a>
            <a href="#" className="text-sm text-gray-500 hover:underline">
              İletişim
            </a>
          </nav>
        </div>
      </footer>
    </div>
  )
}
