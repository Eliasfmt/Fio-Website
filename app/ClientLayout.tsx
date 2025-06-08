// app/ClientLayout.tsx
'use client';

import { useEffect, useState } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
        <Header />
        {children}
    </ThemeProvider>
    </>
  );
}