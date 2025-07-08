// src/app/layout.js

import './globals.css'; // Simple direct import

export const metadata = {
  title: 'Auto Pro Towing & Recovery - Fast, Reliable Towing Services',
  description: '24/7 Towing and roadside assistance serving Leesburg, Orlando, and surrounding areas. Fast response times, professional service, competitive rates.',
  keywords: 'towing, roadside assistance, Leesburg, Orlando, Florida, 24/7, vehicle recovery',
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white font-sans antialiased">
        {children}
      </body>
    </html>
  );
}