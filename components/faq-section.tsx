"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqItems = [
  {
    question: "Yurt dışına para gönderirken hangi ücretlere dikkat etmeliyim?",
    answer:
      "Yurt dışına para gönderirken döviz kuru marjı, transfer ücreti, ara banka ücretleri ve alıcı banka ücretlerine dikkat etmelisiniz. Bazı platformlar düşük transfer ücreti gösterirken, döviz kurunda daha yüksek marj uygulayabilir.",
  },
  {
    question: "En hızlı para transferi yöntemi hangisidir?",
    answer:
      "Dijital para transfer platformları genellikle en hızlı seçeneklerdir. Wise, Payoneer ve Cenoa gibi platformlar çoğu ülkeye 1-2 iş günü içinde transfer yapabilir. Western Union gibi geleneksel hizmetler bazı ülkelerde anında para çekme imkanı sunar.",
  },
  {
    question: "Büyük miktarda para transferi için en uygun yöntem nedir?",
    answer:
      "Büyük miktarda para transferi için genellikle bankalar arası SWIFT transferi veya özel döviz şirketleri daha uygundur. Ancak, Wise Business ve Mercury gibi platformlar da büyük transferler için rekabetçi oranlar sunabilir ve genellikle bankalara göre daha düşük ücretler alır.",
  },
  {
    question: "Para transferi yaparken güvenliği nasıl sağlayabilirim?",
    answer:
      "Lisanslı ve düzenlenmiş finansal kuruluşları tercih edin, küçük bir test transferi yapın, güvenli internet bağlantısı kullanın, hesap bilgilerinizi doğrulayın ve şüpheli işlemler için platformun müşteri hizmetleriyle iletişime geçin.",
  },
  {
    question: "Türkiye'den yurt dışına para gönderirken yasal sınırlamalar var mı?",
    answer:
      "Evet, Türkiye'den yurt dışına para gönderirken bazı yasal sınırlamalar bulunmaktadır. Belirli bir tutarın üzerindeki transferler için bankalar kaynak beyanı isteyebilir ve transferin amacını sorabilir. Ayrıca, yıllık döviz alım limitiniz bulunabilir. Güncel düzenlemeler için bankanıza danışmanız önerilir.",
  },
]

export function FaqSection() {
  return (
    <div className="w-full max-w-4xl mx-auto mt-12">
      <h2 className="text-2xl font-bold mb-6">Sıkça Sorulan Sorular</h2>
      <Accordion type="single" collapsible className="w-full">
        {faqItems.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
