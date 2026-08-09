"use client"

import { useState, type FormEvent } from "react"
import SectionHeading from "@/components/ui/SectionHeading"
import { Reveal } from "@/components/motion/Reveal"
import { useLanguage } from "@/i18n"

export default function Contact() {
  const { t } = useLanguage()
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-2xl font-poppins">
        <SectionHeading
          title={t.contact.title}
          subtitle={t.contact.subtitle}
        />

        <Reveal>
          <div className="relative w-full overflow-hidden rounded-3xl border border-slate-200 bg-white/70 p-8 backdrop-blur-md">
          {submitted ? (
            <div className="text-center">
              <p className="text-lg font-medium text-green-200">
                {t.contact.successTitle}
              </p>
              <p className="mt-2 text-sm text-green-400">
                {t.contact.successText}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground">
                  {t.contact.name}
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  className="mt-1 block w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder={t.contact.namePlaceholder}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground">
                  {t.contact.email}
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  className="mt-1 block w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder={t.contact.emailPlaceholder}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground">
                  {t.contact.message}
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  className="mt-1 block w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder={t.contact.messagePlaceholder}
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
              >
                {t.contact.submit}
              </button>
            </form>
          )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
