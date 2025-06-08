"use client"

import { useEffect } from "react";
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"


// --------- for google -------
declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: any;
  }
}


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
// ------------------- google translate ---------------------------
useEffect(() => {
  // Don’t load more than once
  if (window.google && window.google.translate) return;

  window.googleTranslateElementInit = function () {
    // Prevent brand title from being translated
    document.querySelectorAll(".brand-title").forEach((el) =>
      el.classList.add("notranslate")
    );
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",
        includedLanguages: "en,es,fr,de,it,pt,ru,zh-CN,ar",
        layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
      },
      "google_translate_element"
    );
  };

  const script = document.createElement("script");
  script.src =
    "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
  script.async = true;
  document.body.appendChild(script);

  return () => {
    script.remove();
    delete window.googleTranslateElementInit;
  };
}, []);


  return (

    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>

        <div className="flex items-center">
          <Image
            src="/images/Logoimage.png"
            width={40}
            height={40}
            alt="LIttle Steps and Palabras Pre-School Logo"
            className="mr-2"
          />
          <Link href="/" className="text-lg font-bold text-primary md:text-xl brand-title notranslate">
            Little Steps and Palabras Pre-School
          </Link>
        </div>

       <nav className="hidden md:flex items-center">
        <ul className="flex space-x-6">
            <li>
              <Link href="/" className="text-sm font-medium hover:text-primary">
                Home
              </Link>
            </li>
            <li>
              <Link href="/curriculum" className="text-sm font-medium hover:text-primary">
                Curriculum
              </Link>
            </li>
            <li>
              <Link href="/programs" className="text-sm font-medium hover:text-primary">
                Programs
              </Link>
            </li>
            <li>
              <Link href="#tuition" className="text-sm font-medium hover:text-primary">
                Tuition
              </Link>
            </li>
          <li><Link href="/about" className="text-sm font-medium hover:text-primary">About Us</Link></li>

          <li><Link href="/staff" className="text-sm font-medium hover:text-primary">Staff</Link></li>

          <li><Link href="#gallery" className="text-sm font-medium hover:text-primary">Gallery</Link></li>
            <li>
              <Link href="/register">
                <Button size="sm" variant="default" className="bg-primary hover:bg-primary/90">
                  Register Now
                </Button>
              </Link>
            </li>

            </ul>
            <div className="ml-4" id="google_translate_element"></div>
          </nav>

        <div className="md:hidden">
          <Link href="#contact">
            <Button size="sm" variant="outline">
              Contact
            </Button>
          </Link>
        </div>
      </div>


      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-white pt-16 transition-transform duration-300 ease-in-out md:hidden",
          isMenuOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <nav className="container mx-auto px-4">
          <ul className="space-y-4">
            <li>
              <Link
                href="/"
                className="block py-2 text-lg font-medium hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/curriculum"
                className="block py-2 text-lg font-medium hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Curriculum
              </Link>
            </li>
            <li>
              <Link
                href="/programs"
                className="block py-2 text-lg font-medium hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Programs
              </Link>
            </li>
            <li>
              <Link
                href="#tuition"
                className="block py-2 text-lg font-medium hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Tuition
              </Link>
            </li>

            <li>
              <Link
                href="/about"
                className="block py-2 text-lg font-medium hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/staff"
                className="block py-2 text-lg font-medium hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Staff
              </Link>
            </li>
            <li>
              <Link
                href="#gallery"
                className="block py-2 text-lg font-medium hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </Link>
            </li>

            <li>
              <Link
                href="/register"
                className="block py-2 text-lg font-medium hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Register Now
              </Link>
            </li>



          </ul>
        </nav>
      </div>
    </header>
    
  )
}
