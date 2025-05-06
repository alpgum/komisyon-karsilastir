"use client"

import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface Platform {
  name: string
  fee: number
  url: string
}

interface ComparisonTableProps {
  platforms: Platform[]
  amount: number
}

export function ComparisonTable({ platforms, amount }: ComparisonTableProps) {
  // Sort platforms by fee (lowest first)
  const sortedPlatforms = [...platforms].sort((a, b) => a.fee - b.fee)

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[180px]">Platform adı</TableHead>
            <TableHead>Komisyon oranı (%)</TableHead>
            <TableHead className="text-right">Alıcıya kalan tutar (USD)</TableHead>
            <TableHead className="text-right">İşlem</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedPlatforms.map((platform) => {
            const fee = (amount * platform.fee) / 100
            const remainingAmount = amount - fee

            return (
              <TableRow key={platform.name}>
                <TableCell className="font-medium">{platform.name}</TableCell>
                <TableCell>{platform.fee}%</TableCell>
                <TableCell className="text-right">${remainingAmount.toFixed(2)}</TableCell>
                <TableCell className="text-right">
                  <Button asChild variant="outline" size="sm">
                    <a href={platform.url} target="_blank" rel="noopener noreferrer">
                      {platform.name} ile Gönder <ExternalLink className="ml-1 h-3 w-3" />
                    </a>
                  </Button>
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </div>
  )
}
