import Link from "next/link"
import { Facebook, Instagram, Mail, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-xl font-bold notranslate">Little Steps and Palabras Pre-School</h3>
            <p className="mb-2">1033 E 250 N</p>
            <p className="mb-2">Bountiful, UT 84010</p>
            <div className="mt-4 flex items-center">
              <Phone className="mr-2 h-4 w-4" />
              <span>801-919-9228</span>
            </div>
            <div className="mt-2 flex items-center">
              <Mail className="mr-2 h-4 w-4" />
              <span>Fiorellalower@gmail.com</span>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-bold">Hours</h3>
            <p className="mb-2">Monday - Friday: 7:30 AM - 6:00 PM</p>
            <p className="mb-2">Saturday - Sunday: Closed</p>
            <p className="mt-4">Now enrolling for 2025-26 school year</p>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-bold">Connect With Us</h3>
            <div className="flex space-x-4">
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-primary transition-colors hover:bg-primary-foreground"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-primary transition-colors hover:bg-primary-foreground"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
            <div className="mt-6">
              <Link
                href="/contact"
                className="rounded-md bg-white px-4 py-2 text-primary transition-colors hover:bg-primary-foreground"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/20 pt-6 text-center">
          <p>&copy; {new Date().getFullYear()} LIttle Steps and Palabras Pre-School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
