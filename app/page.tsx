import { Navbar } from "@/components/navbar"
import { MoneyTransferCalculator } from "@/components/money-transfer-calculator"
import { FaqSection } from "@/components/faq-section"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="py-12 md:py-20 bg-gradient-to-b from-white to-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <h1 className="text-3xl md:text-5xl font-bold tracking-tighter">
                Daha Az Komisyon, Daha Adil Gelir
              </h1>
              <p className="text-gray-500 md:text-xl max-w-[700px]">
                Ödeme platformlarnın komisyonlarını karşılaştırın.
              </p>
            </div>

            <MoneyTransferCalculator />

            <div className="mt-16 max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-6">Yurt Dışına Para Gönderirken Nelere Dikkat Edilmeli?</h2>
              <div className="prose max-w-none">
                <p>
                  Yurt dışına para gönderirken dikkat edilmesi gereken birçok faktör vardır. Öncelikle, farklı para
                  transfer platformlarının komisyon oranlarını karşılaştırmak önemlidir. Bazı platformlar düşük transfer
                  ücreti gösterirken, döviz kurunda daha yüksek marj uygulayabilir.
                </p>
                <p>
                  Transfer hızı da önemli bir faktördür. Acil durumlarda, hızlı transfer sunan platformları tercih etmek
                  gerekebilir. Ancak, hızlı transferler genellikle daha yüksek ücretlerle gelir.
                </p>
                <p>
                  Güvenlik, uluslararası para transferlerinde en önemli konulardan biridir. Lisanslı ve düzenlenmiş
                  finansal kuruluşları tercih etmek, paranızın güvende olmasını sağlar. Ayrıca, büyük miktarda para
                  gönderirken, önce küçük bir test transferi yapmak iyi bir uygulamadır.
                </p>
                <p>
                  Son olarak, alıcının tercih ettiği ödeme yöntemini dikkate almak önemlidir. Bazı ülkelerde belirli
                  transfer yöntemleri daha yaygın veya daha uygun olabilir. Alıcının banka hesabına doğrudan transfer,
                  nakit çekme veya mobil cüzdan gibi seçenekler arasında tercih yapabilirsiniz.
                </p>
              </div>
            </div>

            <FaqSection />
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
