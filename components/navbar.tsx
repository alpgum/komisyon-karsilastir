import Link from "next/link"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <div className="font-bold text-xl text-blue-600">TransferKarşılaştır</div>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/abd-vergi-hesaplama" className="text-sm font-medium transition-colors hover:text-blue-600">
            ABD Vergi Hesaplama
          </Link>
          <Link href="/detaylar" className="text-sm font-medium transition-colors hover:text-blue-600">
            Detaylar
          </Link>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col gap-4 mt-8">
              <Link href="/" className="text-sm font-medium transition-colors hover:text-blue-600">
                Ana Sayfa
              </Link>
              <Link href="/abd-vergi-hesaplama" className="text-sm font-medium transition-colors hover:text-blue-600">
                ABD Vergi Hesaplama
              </Link>
              <Link href="/detaylar" className="text-sm font-medium transition-colors hover:text-blue-600">
                Detaylar
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
