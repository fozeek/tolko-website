import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Rénovation énergétique",
  description: "Trouvez les professionnels selon vos besoins",
};

/**
 * 
<meta property="twitter:image" content="Twitter link preview image URL"> 
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:description" content="Twitter link preview description">

<meta property="og:image" content="Link preview image URL">
<meta property="og:site_name" content="Link preview site name">
<meta property="og:description" content="Link preview description" />
<meta property="og:url" content="Canonical link preview URL">
 */

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <Analytics />
      <body className={`${geistSans.variable} ${geistMono.variable}`} style={{ position: 'relative' }}>
        {children}
      </body>
    </html>
  );
}
