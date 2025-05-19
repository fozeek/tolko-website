import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import './layout.scss';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Tolko",
  description: "Trouvez les professionnels selon vos besoins",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`} style={{ position: 'relative' }}>
        <div style={{ padding: '16px', background: 'black', textAlign: 'center', color: 'white' }}>
          TVA OFFERTE DU 13 MAI 2025 au 12 DECEMBRE 2025
        </div>
        <header>
          <Link href="/" className="logo">
            Rénovation Énergétique
          </Link>
          <div className="menu">
            <button>
              Isolation
              <div className="sub-menu">
                <div className="wrapper">
                  <div className="links">
                    <Link href="/isolation/isolation-fenetres">Isolation fenetres</Link>
                    <Link href="/isolation/isolation-fenetres">Portes isolantes</Link>
                    <Link href="/isolation/isolation-fenetres">Traitement ponts thermiques</Link>
                    <Link href="/isolation/isolation-fenetres">VMC double-flux</Link>
                    <Link href="/isolation/isolation-fenetres">Combles perdues</Link>
                    <Link href="/isolation/isolation-fenetres">Combles terrasse</Link>
                    <Link href="/isolation/isolation-fenetres">Toiture terrasse</Link>
                    <Link href="/isolation/isolation-fenetres">Isolation exterieur</Link>
                    <Link href="/isolation/isolation-fenetres">Isolation interieur</Link>
                    <Link href="/isolation/isolation-fenetres">Plancher bas</Link>
                    <Link href="/isolation/sols">Sols</Link>
                  </div>
                  <div style={{ background: 'url(/combles-perdues.png)', height: '100%', flex: 1, backgroundPosition: 'center', backgroundSize: 'cover', flex: 1, borderRadius: '8px' }} />
                </div>
              </div>
            </button>
            <button>
              Chauffage
              <div className="sub-menu">
                <div className="wrapper">
                  <div className="links">
                  <Link href="/isolation/isolation-fenetres">Chauffe eau thermodynamique</Link>
                  <Link href="/isolation/isolation-fenetres">Insert cheminee</Link>
                  <Link href="/isolation/isolation-fenetres">Plancher chauffant</Link>
                  <Link href="/isolation/isolation-fenetres">Radiateur electrique</Link>
                  <Link href="/isolation/isolation-fenetres">Chaudiere condensation</Link>
                  <Link href="/isolation/isolation-fenetres">Chaudiere buches</Link>
                  <Link href="/isolation/isolation-fenetres">Chaudiere granules</Link>
                  <Link href="/isolation/isolation-fenetres">Chaudiere hybride</Link>
                  <Link href="/isolation/isolation-fenetres">PAC air-air</Link>
                  <Link href="/isolation/isolation-fenetres">PAC air-eau</Link>
                  <Link href="/isolation/isolation-fenetres">PAC géothermique</Link>
                  <Link href="/isolation/isolation-fenetres">PAC hybride</Link>
                  <Link href="/isolation/isolation-fenetres">Poele buches</Link>
                  <Link href="/isolation/isolation-fenetres">Poele granules</Link>
                  </div>
                  <div style={{ background: 'url(/combles-perdues.png)', height: '100%', flex: 1, backgroundPosition: 'center', backgroundSize: 'cover', flex: 1, borderRadius: '8px' }} />
                </div>
              </div>
            </button>
            <button>
              Solaire
              <div className="sub-menu">
                <div className="wrapper">
                  <div className="links">
                    <Link href="/isolation/isolation-fenetres">Isolation fenetres</Link>
                    <Link href="/isolation/isolation-fenetres">Portes isolantes</Link>
                    <Link href="/isolation/isolation-fenetres">Traitement ponts thermiques</Link>
                    <Link href="/isolation/isolation-fenetres">VMC double-flux</Link>
                    <Link href="/isolation/isolation-fenetres">Combles perdues</Link>
                    <Link href="/isolation/isolation-fenetres">Combles terrasse</Link>
                    <Link href="/isolation/isolation-fenetres">Toiture terrasse</Link>
                    <Link href="/isolation/isolation-fenetres">Isolation exterieur</Link>
                    <Link href="/isolation/isolation-fenetres">Isolation interieur</Link>
                    <Link href="/isolation/isolation-fenetres">Plancher bas</Link>
                    <Link href="/isolation/sols">Sols</Link>
                  </div>
                  <div style={{ background: 'url(/combles-perdues.png)', height: '100%', flex: 1, backgroundPosition: 'center', backgroundSize: 'cover', flex: 1, borderRadius: '8px' }} />
                </div>
              </div>
            </button>
            <button>
              Rénovation globale
              <div className="sub-menu">
                <div className="wrapper">
                  <div className="links">
                    <Link href="/isolation/isolation-fenetres">Isolation fenetres</Link>
                    <Link href="/isolation/isolation-fenetres">Portes isolantes</Link>
                    <Link href="/isolation/isolation-fenetres">Traitement ponts thermiques</Link>
                    <Link href="/isolation/isolation-fenetres">VMC double-flux</Link>
                    <Link href="/isolation/isolation-fenetres">Combles perdues</Link>
                    <Link href="/isolation/isolation-fenetres">Combles terrasse</Link>
                    <Link href="/isolation/isolation-fenetres">Toiture terrasse</Link>
                    <Link href="/isolation/isolation-fenetres">Isolation exterieur</Link>
                    <Link href="/isolation/isolation-fenetres">Isolation interieur</Link>
                    <Link href="/isolation/isolation-fenetres">Plancher bas</Link>
                    <Link href="/isolation/sols">Sols</Link>
                  </div>
                  <div style={{ background: 'url(/combles-perdues.png)', height: '100%', flex: 1, backgroundPosition: 'center', backgroundSize: 'cover', flex: 1, borderRadius: '8px' }} />
                </div>
              </div>
            </button>
          </div>
        </header>
        {children}
        <footer style={{ background: 'rgb(209, 103, 39)', borderTop: '1px solid orange', padding: '32px 16px', flex: '0 0 auto', position: 'relative', zIndex: 50 }}>
          <div style={{ maxWidth: '1120px', width: '100%', margin: '0px auto', display: 'flex', flexDirection: 'column', gap: '32px', textAlign: 'left' }}>
            <div style={{ display: 'flex', color: 'white' }}>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '1.4em', paddingBottom: '32px' }}>
                  Rénovation énergétique
                </div>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <Link href="/team/contact">Nous contacter</Link>
                  <Link href="/team/qui-sommes-nous">Qui sommes nous</Link>
                  <Link href="/team/nos-engageemnts">Nos engaements</Link>
                  <Link href="/team/nous-rejoindre">Nous rejoindre !</Link>
                </div>
              </div>
              <div style={{ flex: 2, display: 'flex' }}>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <strong>Isolation</strong>
                  <Link href="/isolation/isolation-fenetres">Isolation fenetres</Link>
                  <Link href="/isolation/isolation-fenetres">Portes isolantes</Link>
                  <Link href="/isolation/isolation-fenetres">Traitement ponts thermiques</Link>
                  <Link href="/isolation/isolation-fenetres">VMC double-flux</Link>
                  <Link href="/isolation/isolation-fenetres">Combles perdues</Link>
                  <Link href="/isolation/isolation-fenetres">Combles terrasse</Link>
                  <Link href="/isolation/isolation-fenetres">Toiture terrasse</Link>
                  <Link href="/isolation/isolation-fenetres">Isolation exterieur</Link>
                  <Link href="/isolation/isolation-fenetres">Isolation interieur</Link>
                  <Link href="/isolation/isolation-fenetres">Plancher bas</Link>
                  <Link href="/isolation/sols">Sols</Link>
                </div>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <strong>Chauffage</strong>
                  <Link href="/isolation/isolation-fenetres">Chauffe eau thermodynamique</Link>
                  <Link href="/isolation/isolation-fenetres">Insert cheminee</Link>
                  <Link href="/isolation/isolation-fenetres">Plancher chauffant</Link>
                  <Link href="/isolation/isolation-fenetres">Radiateur electrique</Link>
                  <Link href="/isolation/isolation-fenetres">Chaudiere condensation</Link>
                  <Link href="/isolation/isolation-fenetres">Chaudiere buches</Link>
                  <Link href="/isolation/isolation-fenetres">Chaudiere granules</Link>
                  <Link href="/isolation/isolation-fenetres">Chaudiere hybride</Link>
                  <Link href="/isolation/isolation-fenetres">PAC air-air</Link>
                  <Link href="/isolation/isolation-fenetres">PAC air-eau</Link>
                  <Link href="/isolation/isolation-fenetres">PAC géothermique</Link>
                  <Link href="/isolation/isolation-fenetres">PAC hybride</Link>
                  <Link href="/isolation/isolation-fenetres">Poele buches</Link>
                  <Link href="/isolation/isolation-fenetres">Poele granules</Link>
                </div>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <strong>Solaire</strong>
                  <Link href="/isolation/isolation-fenetres">Isolation fenetres</Link>
                  <Link href="/isolation/isolation-fenetres">Isolation fenetres</Link>
                  <Link href="/isolation/isolation-fenetres">Isolation fenetres</Link>
                  <Link href="/isolation/isolation-fenetres">Isolation fenetres</Link>
                  <Link href="/isolation/isolation-fenetres">Isolation fenetres</Link>
                  <Link href="/isolation/isolation-fenetres">Isolation fenetres</Link>
                </div>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <strong>Rénovation globale</strong>
                  <Link href="/isolation/isolation-fenetres">Isolation fenetres</Link>
                  <Link href="/isolation/isolation-fenetres">Isolation fenetres</Link>
                  <Link href="/isolation/isolation-fenetres">Isolation fenetres</Link>
                  <Link href="/isolation/isolation-fenetres">Isolation fenetres</Link>
                  <Link href="/isolation/isolation-fenetres">Isolation fenetres</Link>
                </div>
              </div>
            </div>
            <div style={{ textAlign: 'center', color: 'white', borderTop: '1px solid orange', paddingTop: '32px' }}>
              &copy; 2025 • <Link href="/plan">Plan du site</Link> • Mentions légales • CGU • Cookies
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
