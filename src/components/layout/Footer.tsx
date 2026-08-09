"use client"

import { useLanguage } from "@/i18n"

export default function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-background font-poppins">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            {`\u00A9 ${currentYear} Zhafrannajib Dzahabi Sya'ban. ${t.footer.rights}`}
          </p>
          
        </div>
      </div>
    </footer>
  )
}
