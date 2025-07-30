import React from 'react';
import Link from 'next/link';

// Copilot: Custom 404 Not Found page for Next.js App Router
export default function NotFound() {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'Roboto, Arial, sans-serif', textAlign: 'center', padding: '4rem' }}>
        <h1 style={{ fontSize: '3rem', color: '#2563eb' }}>404 - Page Not Found</h1>
        <p style={{ fontSize: '1.2rem', color: '#444' }}>
          Sorry, the page you are looking for does not exist.
        </p>
        <Link href="/" style={{ color: '#2563eb', textDecoration: 'underline', fontWeight: 500 }}>Go to Home</Link>
      </body>
    </html>
  );
}
