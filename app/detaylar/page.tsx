import { Navbar } from "@/components/navbar"

export default function DetailsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="py-12 md:py-20 bg-gradient-to-b from-white to-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <h1 className="text-3xl md:text-5xl font-bold tracking-tighter">Detaylar Yakında</h1>
              <p className="text-gray-500 md:text-xl max-w-[700px]">
                Bu sayfa yapım aşamasındadır. Çok yakında daha fazla bilgi ve içerik eklenecektir.
              </p>
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
