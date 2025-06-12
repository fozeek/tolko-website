'use client';

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header({ pages }) {
  const pathname = usePathname();
  const [hoverCategory, setHoverCategory] = useState(null);

  useEffect(() => {
    setHoverCategory(null);
  }, [pathname]);

  return (
    <header>
      <Link href="/" className="logo">
        Rénovation Énergétique
      </Link>
      <div className="menu">
        <button className={`${hoverCategory === 'isolation' ? 'hover' : ''}`} onMouseEnter={() => setHoverCategory('isolation')} onMouseLeave={() => setHoverCategory(null)}>
          Isolation
          <div className="sub-menu">
            <div className="wrapper">
              <div className="links">
                {
                  pages.filter(page => page.category === 'isolation').map(page => (
                    <Link key={page.id} href={`/${page.slug}`}>{page.title}</Link>
                  ))
                }
              </div>
              <div style={{ background: 'url(/combles-perdues.png)', height: '100%', flex: 1, backgroundPosition: 'center', backgroundSize: 'cover', flex: 1, borderRadius: '8px' }} />
            </div>
          </div>
        </button>
        <button className={`${hoverCategory === 'chauffage' ? 'hover' : ''}`} onMouseEnter={() => setHoverCategory('chauffage')} onMouseLeave={() => setHoverCategory(null)}>
          Chauffage
          <div className="sub-menu">
            <div className="wrapper">
              <div className="links">
                {
                  pages.filter(page => page.category === 'chauffage').map(page => (
                    <Link key={page.id} href={`/${page.slug}`}>{page.title}</Link>
                  ))
                }
              </div>
              <div style={{ background: 'url(/combles-perdues.png)', height: '100%', flex: 1, backgroundPosition: 'center', backgroundSize: 'cover', flex: 1, borderRadius: '8px' }} />
            </div>
          </div>
        </button>
        <button className={`${hoverCategory === 'solaire' ? 'hover' : ''}`} onMouseEnter={() => setHoverCategory('solaire')} onMouseLeave={() => setHoverCategory(null)}>
          Solaire
          <div className="sub-menu">
            <div className="wrapper">
              <div className="links">
                {
                  pages.filter(page => page.category === 'solaire').map(page => (
                    <Link key={page.id} href={`/${page.slug}`}>{page.title}</Link>
                  ))
                }
              </div>
              <div style={{ background: 'url(/combles-perdues.png)', height: '100%', flex: 1, backgroundPosition: 'center', backgroundSize: 'cover', flex: 1, borderRadius: '8px' }} />
            </div>
          </div>
        </button>
        <button className={`${hoverCategory === 'globale' ? 'hover' : ''}`} onMouseEnter={() => setHoverCategory('globale')} onMouseLeave={() => setHoverCategory(null)}>
          Rénovation globale
          <div className="sub-menu">
            <div className="wrapper">
              <div className="links">
                {
                  pages.filter(page => page.category === 'globale').map(page => (
                    <Link key={page.id} href={`/${page.slug}`}>{page.title}</Link>
                  ))
                }
              </div>
              <div style={{ background: 'url(/combles-perdues.png)', height: '100%', flex: 1, backgroundPosition: 'center', backgroundSize: 'cover', flex: 1, borderRadius: '8px' }} />
            </div>
          </div>
        </button>
      </div>
    </header>
  )
}