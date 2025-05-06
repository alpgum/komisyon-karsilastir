
"use client";

import { useState } from "react";

export default function VergiSimulasyonuPage() {
  const [income, setIncome] = useState(100000);
  const [userType, setUserType] = useState("freelancer");
  const [expenses, setExpenses] = useState(20000);
  const [result, setResult] = useState<{ tax: number; net: number } | null>(null);

  const calculate = (e: React.FormEvent) => {
    e.preventDefault();
    const taxableIncome = income - expenses;
    let taxRate = userType === "freelancer" ? 0.20 : 0.15;
    const tax = taxableIncome * taxRate;
    const net = income - tax;
    setResult({ tax, net });
  };

  return (
    <main className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Şirket vs Freelancer Vergi Simülasyonu</h1>
      <p className="text-gray-600 mb-6">
        Yıllık geliriniz ve gider tahmininize göre hangi modelde daha avantajlı olduğunuzu öğrenin.
      </p>

      <form onSubmit={calculate} className="space-y-4 mb-6">
        <div>
          <label className="block font-medium mb-1">Yıllık Gelir (USD)</label>
          <input
            type="number"
            value={income}
            onChange={(e) => setIncome(parseFloat(e.target.value))}
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Gider Tahmini (USD)</label>
          <input
            type="number"
            value={expenses}
            onChange={(e) => setExpenses(parseFloat(e.target.value))}
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Kullanıcı Türü</label>
          <select
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
            className="w-full border rounded px-3 py-2"
          >
            <option value="freelancer">Freelancer</option>
            <option value="sirket">Şirket</option>
          </select>
        </div>
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
          Hesapla
        </button>
      </form>

      {result && (
        <div className="bg-gray-50 border p-4 rounded mb-8">
          <p><strong>Tahmini Vergi:</strong> ${result.tax.toFixed(2)}</p>
          <p><strong>Net Gelir:</strong> ${result.net.toFixed(2)}</p>
        </div>
      )}

      <section className="prose prose-sm">
        <h2>Vergi Simülasyonu Açıklaması</h2>
        <p>
          Bu araç, Türkiye'de freelancer ve şirketler için ortalama vergi yükünü karşılaştırmak amacıyla tasarlanmıştır.
          Gerçek vergi oranları gelir dilimlerine ve gider türlerine göre değişebilir.
        </p>
        <p>
          Örnek oranlar:
          <ul>
            <li>Freelancer (gelir vergisi): %20</li>
            <li>Şirket (kurumlar vergisi): %15</li>
          </ul>
        </p>
        <p>
          Simülasyon sonucunda verginizi ve cebinize kalan tahmini tutarı görebilirsiniz.
        </p>
      </section>
    </main>
  );
}
