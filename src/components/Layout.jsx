import React from 'react';
import './Layout.css';
import Link from 'next/link';

/**
 * Layout component provides the main page structure: header, nav, main, and footer.
 * Copilot: Used to wrap all main pages and sections for consistent layout.
 */
const Layout = ({ children }) => (
  <>
    {/* Copilot: Header with navigation bar and logo */}
    <header>
      <nav className="navbar">
        <div className="logo">My Portfolio</div>
        <ul className="nav-links">
          <li><Link href="/about">About Me</Link></li>
          <li><Link href="/">Project Gallery</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
    {/* Copilot: Main content area for children */}
    <main className="main-content">
      {children}
    </main>
    {/* Copilot: Footer with copyright */}
    <footer className="footer">
      <p>&copy; 2025 My Portfolio. All rights reserved.</p>
    </footer>
  </>
);

export default Layout;
