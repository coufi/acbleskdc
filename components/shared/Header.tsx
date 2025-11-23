'use client';

import Link from 'next/link';
import { useState } from 'react';

const navigation = [
  { name: 'Biografie', href: '/biografie' },
  { name: 'Koncerty', href: '/koncerty' },
  { name: 'Playlist', href: '/playlist' },
  { name: 'Ke stažení', href: '/ke-stazeni' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-acdc-black text-white shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-start justify-between">
          <Link href="/" className="flex flex-col items-start space-y-1">
            <img
              src="/images/acbleskdc-logo.png"
              alt="ACbleskDC"
              className="h-12 w-auto"
            />
            <p className="text-sm text-gray-400 font-normal tracking-wide">
              Revival světoznámé kapely AC/DC z Letovic.
            </p>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="hover:text-acdc-red transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden h-12 w-12 flex items-center justify-center"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Otevřít menu</span>
            <svg
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 hover:text-acdc-red transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}

