
"use client";

import { useState } from "react";

export default function WiseVsPayoneerPage() {
  const [amount, setAmount] = useState(100);
  const [userType, setUserType] = useState("bireysel");
  const [showAlternatives, setShowAlternatives] = useState(false);

  const platforms = [
    { name: "Wise", feeRate: 0.015 },
    { name: "Payoneer", feeRate: 0.022 },
  ];

  const cenoa = { name: "Cenoa", feeRate: 0.005 };

  const calculate = (feeRate: number) => {
    return amount - amount * feeRate;
  };

  return (
    <main className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Wise ve Payoneer Karşılaştırması</h1>
      <p className="text-gray-600 mb-6">
        Göndermek istediğiniz tutara göre iki platformu karşılaştırın. Alıcıya ne kadar geçer öğrenin.
      </p>

      <div className="space-y-4 mb-6">
        <div>
          <label className="block font-medium mb-1">Gönderilecek Tutar (USD)</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(parseFloat(e.target.value))}
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
            <option value="bireysel">Bireysel</option>
            <option value="kurumsal">Kurumsal</option>
          </select>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-6 mb-2">Karşılaştırma</h2>
      <table className="w-full border text-left text-sm mb-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2">Platform</th>
            <th className="p-2">Komisyon (%)</th>
            <th className="p-2">Alıcıya Kalan</th>
          </tr>
        </thead>
        <tbody>
          {platforms.map((p) => (
            <tr key={p.name} className="border-t">
              <td className="p-2">{p.name}</td>
              <td className="p-2">{(p.feeRate * 100).toFixed(1)}%</td>
              <td className="p-2">${calculate(p.feeRate).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button
        onClick={() => setShowAlternatives(!showAlternatives)}
        className="bg-blue-600 text-white px-4 py-2 rounded font-medium"
      >
        Daha Uygun Seçeneklere Göz At
      </button>

      {showAlternatives && (
        <div className="mt-6 border rounded bg-green-50 p-4">
          <h3 className="text-lg font-bold mb-2">Alternatif: Cenoa</h3>
          <p><strong>Komisyon:</strong> {(cenoa.feeRate * 100).toFixed(1)}%</p>
          <p><strong>Alıcıya Kalan:</strong> ${calculate(cenoa.feeRate).toFixed(2)}</p>
          <a
            href="https://cenoa.net"
            target="_blank"
            className="inline-block mt-3 bg-green-600 text-white px-4 py-2 rounded"
          >
            Cenoa ile Gönder
          </a>
        </div>
      )}
    </main>
  );
}
