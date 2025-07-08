import './globals.css';

export const metadata = {
  title: "Auto Pro Towing & Recovery - 24/7 Emergency Towing Services | Leesburg, FL",
  description: "Fast, reliable, and affordable towing services in Leesburg, Orlando, and surrounding areas. 24/7 emergency towing, roadside assistance, and vehicle recovery. Call (352) 257-7658",
  keywords: 'towing, roadside assistance, Leesburg, Orlando, Florida, 24/7, vehicle recovery, emergency towing, auto recovery',
  
  // Open Graph for Social Media
  openGraph: {
    title: "Auto Pro Towing & Recovery - 24/7 Emergency Towing",
    description: "Fast, Reliable, and Affordable Towing Services. Serving Leesburg, Orlando & surrounding areas 24/7. Call (352) 257-7658",
    url: "https://autoprorecovery.com",
    siteName: "Auto Pro Towing & Recovery",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Auto Pro Towing & Recovery - Professional Towing Service Truck",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: "Auto Pro Towing & Recovery",
    description: "24/7 Towing and roadside assistance. Call (352) 257-7658",
    images: ["/og-image.jpg"],
  },
  
  // Icons
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  
  // Additional Meta
  alternates: {
    canonical: 'https://autoprorecovery.com',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}