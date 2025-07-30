import "./globals.css";

// Copilot: Use Roboto from Google Fonts CDN instead of next/font for compatibility with Babel/Jest

export const metadata = {
  title: "My Portfolio App",
  description: "A beautiful portfolio built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Copilot: Add Google Fonts Roboto CDN link */}
        <link href="https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap" rel="stylesheet" />
      </head>
      <body style={{ fontFamily: 'Roboto, Arial, sans-serif' }}>
        {children}
      </body>
    </html>
  );
}
