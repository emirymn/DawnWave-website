// styles
import "../globals.css";

// next
import type { Metadata } from "next";

// fonts
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

// translations
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

// components
import { Navbar } from "@/components/Navbar/Navbar";

// components ui
import "@/components/ui/Pattern.css";
import { Toaster } from "@/components/shadcn/ui/sonner";

export const metadata: Metadata = {
  title: 'DawnWave',
  description: 'Creating Unforgettable Game Experiences',
  icons: {
    icon: '/favicon.ico',
  },
};

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${inter.className} relative bg-background text-white`}>
        <header className="fixed top-0 left-0 w-full shadow-md z-10">
          <NextIntlClientProvider messages={messages}>
            <Navbar className={`bg-black text-white flex w-screen p-4 px-4 md:px-24 lg:px-48`}/>
          </NextIntlClientProvider>
        </header>
        <div className="relative">
          {/* Background pattern */}
          <div className="bg-pattern" />
          {/* Main content */}
          <main className="relative z-0">
            <NextIntlClientProvider messages={messages}>
              {children}
              <Toaster className="dark" />
            </NextIntlClientProvider>
          </main>
        </div>
      </body>
    </html>
  );
}
