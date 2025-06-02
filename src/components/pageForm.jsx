import Link from "next/link";

import Markdown from "react-markdown";
import './markdown.scss';

export default function PageForm({ page }) {
  return (
    <main>
      <div style={{ maxWidth: '1120px', width: '100%', margin: '0px auto', border: '1px solid #f6f6f6', borderTop: 'none', borderRadius: '0px 0px 8px 8px', padding: '8px 16px', fontSize: '0.9em', color: 'grey', background: '#F9F9F9' }}>
        <Link href="/">Accueil</Link> • {page.category} • {page.title}
      </div>
      <div style={{ padding: '16px' }}>
        <h1 style={{ maxWidth: '1120px', width: '100%', margin: '0px auto', display: 'flex', gap: '16px', color: 'black' }}>
          {page.title}
        </h1>
      </div>
      <div style={{ maxWidth: '1120px', width: '100%', margin: '0px auto', borderRadius: '8px', aspectRatio: '16/7', overflow: 'hidden', display: 'flex', position: 'relative', padding: '16px' }}>
        <div style={{ backgroundImage: 'url(/isolation-fenetres.png)', zIndex: 10, minWidth: '100%', height: '100%', backgroundSize: 'cover', position: 'absolute', top: '0px', left: '0px', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat' }} />
      </div>
      <div style={{ padding: '32px 16px' }}>
        <div style={{ maxWidth: '1120px', width: '100%', margin: '0px auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <h2 style={{ fontSize: '2.4em' }}>{page.description}</h2>
          <div style={{ display: 'flex', gap: '16px', position: 'relative' }}>
            <div style={{ flex: 1, position: 'relative', height: '100%', overflow: 'visible' }}>
              {/* <div style={{ display: 'grid', flexDirection: 'column', gap: '8px', gridTemplateColumns: 'repeat(2, 1fr)' }}>
                <div style={{ aspectRatio: 1, textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px', background: 'black', color: 'white', padding: '16px', cursor: 'pointer' }}>
                  Maison
                </div>
                <div style={{ aspectRatio: 1, textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px', background: '#F9F9F9', color: 'black', padding: '16px', cursor: 'pointer' }}>
                  Appartement
                </div>
                <div style={{ aspectRatio: 1, textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px', background: '#F9F9F9', color: 'black', padding: '16px', cursor: 'pointer' }}>
                  Solaire
                </div>
                <div style={{ aspectRatio: 1, textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px', background: '#F9F9F9', color: 'black', padding: '16px', cursor: 'pointer' }}>
                  Rénovation Globale
                </div>
              </div> */}
              <div style={{ position: 'sticky', top: '0px', left: '0px', width: '100%' }}>
                <Link href="/form" style={{ borderRadius: '8px', background: 'black', textAlign: 'center', color: 'white', padding: '16px', cursor: 'pointer', width: '100%', display: 'block' }}>
                  J'estime mon bien
                </Link>
              </div>
            </div>
            <div className="markdown-body" style={{ flex: 3, gap: '16px' }}>
              <Markdown>{page.content}</Markdown>
            </div>
          </div>
        </div>
      </div>
      <div style={{ padding: '32px 16px' }}>
        <div style={{ maxWidth: '1120px', width: '100%', margin: '0px auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <h2 style={{ fontSize: '2.4em' }}>Dernières actualitées</h2>
          <div style={{ display: 'flex', gap: '16px', flexDirection: 'column' }}>
            <div style={{ flex: 3, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
              <Link href="/isolation/isolation-fenetres" style={{ flex: 1, aspectRatio: '9/12', border: '1px solid #eaeaea', borderRadius: '8px', padding: '16px', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '8px' }}>
                {page.title}
              </Link>
              <Link href="/isolation/isolation-fenetres" style={{ flex: 1, aspectRatio: '9/12', border: '1px solid #eaeaea', borderRadius: '8px', padding: '16px', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '8px' }}>
                {page.title}
              </Link>
              <Link href="/isolation/isolation-fenetres" style={{ flex: 1, aspectRatio: '9/12', border: '1px solid #eaeaea', borderRadius: '8px', padding: '16px', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '8px' }}>
                {page.title}
              </Link>
              <Link href="/isolation/isolation-fenetres" style={{ flex: 1, aspectRatio: '9/12', border: '1px solid #eaeaea', borderRadius: '8px', padding: '16px', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '8px' }}>
                {page.title}
              </Link>
              <Link href="/isolation/isolation-fenetres" style={{ flex: 1, aspectRatio: '9/12', border: '1px solid #eaeaea', borderRadius: '8px', padding: '16px', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '8px' }}>
                {page.title}
              </Link>
              <Link href="/isolation/isolation-fenetres" style={{ flex: 1, aspectRatio: '9/12', border: '1px solid #eaeaea', borderRadius: '8px', padding: '16px', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '8px' }}>
                {page.title}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}