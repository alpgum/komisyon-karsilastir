"use client"

import type React from "react"

import { useState } from "react"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ComparisonTable } from "@/components/comparison-table"

const platforms = [
  { name: "Wise", fee: 5, url: "https://wise.com" },
  { name: "Stripe", fee: 5, url: "https://stripe.com" },
  { name: "Mercury", fee: 5, url: "https://mercury.com" },
  { name: "Payoneer", fee: 5, url: "https://payoneer.com" },
  { name: "Swift", fee: 5, url: "https://swift.com" },
  { name: "Western Union", fee: 5, url: "https://westernunion.com" },
  { name: "Cenoa", fee: 3, url: "https://cenoa.net" },
]

export function MoneyTransferCalculator() {
  const [senderCountry, setSenderCountry] = useState("")
  const [receiverCountry, setReceiverCountry] = useState("")
  const [amount, setAmount] = useState("")
  const [userType, setUserType] = useState("")
  const [showResults, setShowResults] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setShowResults(true)
  }

  const countries = [
    "Türkiye",
    "ABD",
    "Almanya",
    "İngiltere",
    "Fransa",
    "İtalya",
    "İspanya",
    "Hollanda",
    "Belçika",
    "Kanada",
  ]

  return (
    <div className="w-full max-w-4xl mx-auto">
      <Card>
        <CardContent className="pt-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="senderCountry">Gönderen Ülke</Label>
                <Select value={senderCountry} onValueChange={setSenderCountry} required>
                  <SelectTrigger id="senderCountry">
                    <SelectValue placeholder="Ülke seçin" />
                  </SelectTrigger>
                  <SelectContent>
                    {countries.map((country) => (
                      <SelectItem key={country} value={country}>
                        {country}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="receiverCountry">Alıcı Ülke</Label>
                <Select value={receiverCountry} onValueChange={setReceiverCountry} required>
                  <SelectTrigger id="receiverCountry">
                    <SelectValue placeholder="Ülke seçin" />
                  </SelectTrigger>
                  <SelectContent>
                    {countries.map((country) => (
                      <SelectItem key={country} value={country}>
                        {country}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="amount">Gönderilecek Tutar (USD)</Label>
                <Input
                  id="amount"
                  type="number"
                  placeholder="1000"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  required
                  min="1"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="userType">Kullanıcı Türü</Label>
                <Select value={userType} onValueChange={setUserType} required>
                  <SelectTrigger id="userType">
                    <SelectValue placeholder="Kullanıcı türü seçin" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="individual">Bireysel</SelectItem>
                    <SelectItem value="corporate">Kurumsal</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button type="submit" className="w-full">
              Karşılaştır <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </CardContent>
      </Card>

      {showResults && amount && (
        <div className="mt-8">
          <ComparisonTable platforms={platforms} amount={Number.parseFloat(amount)} />
        </div>
      )}
    </div>
  )
}
