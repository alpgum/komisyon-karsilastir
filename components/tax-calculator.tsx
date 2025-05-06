"use client"

import type React from "react"

import { useState } from "react"
import { Calculator } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface TaxResult {
  income: number
  taxRate: number
  taxAmount: number
  netIncome: number
  state: string
  incomeType: string
  userType: string
}

export function TaxCalculator() {
  const [income, setIncome] = useState("")
  const [state, setState] = useState("")
  const [incomeType, setIncomeType] = useState("")
  const [userType, setUserType] = useState("")
  const [result, setResult] = useState<TaxResult | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const incomeValue = Number.parseFloat(income)

    // Simple tax calculation logic
    const federalTaxRate = userType === "individual" ? 0.15 : 0.21
    const taxAmount = incomeValue * federalTaxRate

    setResult({
      income: incomeValue,
      taxRate: federalTaxRate * 100,
      taxAmount,
      netIncome: incomeValue - taxAmount,
      state,
      incomeType,
      userType,
    })
  }

  const states = [
    { name: "New York", value: "new-york" },
    { name: "California", value: "california" },
    { name: "Texas", value: "texas" },
    { name: "Florida", value: "florida" },
  ]

  const incomeTypes = [
    { name: "Serbest Meslek", value: "freelance" },
    { name: "Şirket Geliri", value: "corporate" },
    { name: "Diğer", value: "other" },
  ]

  return (
    <div className="w-full max-w-4xl mx-auto">
      <Card>
        <CardContent className="pt-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="income">Toplam Gelir (USD)</Label>
                <Input
                  id="income"
                  type="number"
                  placeholder="50000"
                  value={income}
                  onChange={(e) => setIncome(e.target.value)}
                  required
                  min="1"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="state">Eyalet Seçimi</Label>
                <Select value={state} onValueChange={setState} required>
                  <SelectTrigger id="state">
                    <SelectValue placeholder="Eyalet seçin" />
                  </SelectTrigger>
                  <SelectContent>
                    {states.map((state) => (
                      <SelectItem key={state.value} value={state.value}>
                        {state.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="incomeType">Gelir Türü</Label>
                <Select value={incomeType} onValueChange={setIncomeType} required>
                  <SelectTrigger id="incomeType">
                    <SelectValue placeholder="Gelir türü seçin" />
                  </SelectTrigger>
                  <SelectContent>
                    {incomeTypes.map((type) => (
                      <SelectItem key={type.value} value={type.value}>
                        {type.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
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
              Vergi Hesapla <Calculator className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </CardContent>
      </Card>

      {result && (
        <Card className="mt-8">
          <CardContent className="pt-6">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Vergi Hesaplama Sonucu</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-gray-50 rounded-md">
                  <div className="text-sm text-gray-500">Toplam Gelir</div>
                  <div className="text-2xl font-bold">${result.income.toLocaleString()}</div>
                </div>

                <div className="p-4 bg-gray-50 rounded-md">
                  <div className="text-sm text-gray-500">Federal Vergi Oranı</div>
                  <div className="text-2xl font-bold">%{result.taxRate}</div>
                </div>

                <div className="p-4 bg-gray-50 rounded-md">
                  <div className="text-sm text-gray-500">Ödenecek Vergi</div>
                  <div className="text-2xl font-bold">${result.taxAmount.toLocaleString()}</div>
                </div>

                <div className="p-4 bg-gray-50 rounded-md">
                  <div className="text-sm text-gray-500">Net Gelir</div>
                  <div className="text-2xl font-bold">${result.netIncome.toLocaleString()}</div>
                </div>
              </div>

              <div className="mt-4 p-4 bg-blue-50 rounded-md text-blue-800">
                <p className="text-sm">
                  Bu hesaplama tahmini bir değerdir. ABD vergi sistemi eyaletlere göre değişiklik gösterebilir ve vergi
                  indirimleri, muafiyetler ve diğer faktörler sonucu etkileyebilir. Kesin vergi hesaplaması için bir
                  vergi uzmanına danışmanızı öneririz.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
