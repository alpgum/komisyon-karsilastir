
"use client";

import { useState } from "react";

export default function StripeKomisyonPage() {
  const [amount, setAmount] = useState(100);
  const [type, setType] = useState("abd");
  const [result, setResult] = useState<{ fee: number; net: number } | null>(null);

  const calculate = (e: React.FormEvent) => {
    e.preventDefault();
    const feeRate = type === "abd" ? 0.029 : 0.039;
    const fixedFee = 0.3;
    const fee = amount * feeRate + fixedFee;
    const net = amount - fee;
    setResult({ fee, net });
  };

  return (
    <main className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Stripe Komisyon Hesaplama Aracı</h1>
      <p className="text-gray-600 mb-6">
        Stripe üzerinden alacağınız ödemelerde uygulanacak komisyon oranlarını ve net kazancınızı kolayca hesaplayın.
      </p>

      <form onSubmit={calculate} className="space-y-4 mb-6">
        <div>
          <label className="block font-medium mb-1">Tutar (USD)</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(parseFloat(e.target.value))}
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="block font-medium mb-1">İşlem Türü</label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full border rounded px-3 py-2"
          >
            <option value="abd">ABD içi işlem (%2.9 + $0.30)</option>
            <option value="uluslararasi">Uluslararası işlem (%3.9 + $0.30)</option>
          </select>
        </div>
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
          Hesapla
        </button>
      </form>

      {result && (
        <div className="bg-gray-50 border p-4 rounded mb-8">
          <p><strong>Komisyon:</strong> ${result.fee.toFixed(2)}</p>
          <p><strong>Alıcıya Kalan:</strong> ${result.net.toFixed(2)}</p>
        </div>
      )}

      <section className="prose prose-sm">
        <h2>Stripe Nedir ve Nasıl Çalışır?</h2>
        <p>
          Stripe, dünya genelinde yaygın olarak kullanılan bir çevrimiçi ödeme işlemcisidir. İşletmeler, Stripe aracılığıyla kredi kartı ve banka kartı ödemelerini güvenli bir şekilde kabul edebilirler.
        </p>
        <h3>Stripe Komisyon Oranları</h3>
        <p>
          Genel oranlar: <br />
          ABD içi işlemler: <strong>%2.9 + $0.30</strong> <br />
          Uluslararası işlemler: <strong>%3.9 + $0.30</strong>
        </p>
        <h3>Stripe Hesabı Açmak</h3>
        <p>
          Türkiye'deki işletmeler Stripe hesabı açamaz. Ancak ABD'de LLC kurarak hesap açılabilir. Gerekli belgeler: EIN, ITIN, banka hesabı.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Sıkça Sorulan Sorular (SSS)</h2>
        <details className="mb-2">
          <summary className="cursor-pointer font-medium">Stripe komisyon oranları sabit midir?</summary>
          <p>Hayır, işlem türüne ve ülkeye göre değişiklik gösterebilir.</p>
        </details>
        <details className="mb-2">
          <summary className="cursor-pointer font-medium">Türkiye'den Stripe hesabı açabilir miyim?</summary>
          <p>Doğrudan açamazsınız. ABD'de LLC kurarak hesap açabilirsiniz.</p>
        </details>
        <details className="mb-2">
          <summary className="cursor-pointer font-medium">Stripe komisyonları iade edilir mi?</summary>
          <p>Genellikle hayır, işlem iptali durumunda da kesinti iade edilmez.</p>
        </details>
        <details className="mb-2">
          <summary className="cursor-pointer font-medium">Hangi para birimlerini destekler?</summary>
          <p>Stripe 135'ten fazla para birimini desteklemektedir.</p>
        </details>
        <details className="mb-2">
          <summary className="cursor-pointer font-medium">Komisyon manuel nasıl hesaplanır?</summary>
          <p>Örnek: $100 işlemde, $2.90 + $0.30 = $3.20 kesilir. Net: $96.80.</p>
        </details>
      </section>
    </main>
  );
}
