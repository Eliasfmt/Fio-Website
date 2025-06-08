import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="relative bg-pastel-yellow py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div className="text-center md:text-left">

            <p className="text-xl font-medium text-secondary mb-2 uppercase tracking-wide">
              Bilingual Preschool
            </p>
            <h1 className="mb-4 text-4xl font-bold text-primary md:text-5xl lg:text-6xl notranslate">
               Little Steps and Palabras Pre-School
            </h1>
            <p className="mb-6 text-lg text-muted-foreground md:text-xl">
              Where children learn, grow, and thrive in two languages.
            </p>
            <div className="mb-8 rounded-lg bg-primary/10 p-4 text-center">
              <p className="font-bold text-primary text-xl">Registering now for school year 2025-26</p>
            </div>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 justify-center md:justify-start">
              <Link href="/register">
                <Button size="lg" className="w-full sm:w-auto">
                  Register Now
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
          <div className="mt-8 md:mt-0">
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="/images/preschool_rainbow_kids_web.png"
                width={800}
                height={600}
                alt="Smiling children holding colorful books"
                className="h-auto w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
