'use client';

import Link from "next/link";
import { useState } from "react";

export default function Works({ pages }) {
  const [typeTab, setTypeTab] = useState('isolation');

  return (
    <div style={{ padding: '32px 16px' }}>
      <div style={{ maxWidth: '1120px', width: '100%', margin: '0px auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <h2 style={{ fontSize: '2.4em' }}>Des solutions pour chaque maison</h2>
        <div style={{ display: 'flex', gap: '16px' }}>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <button onClick={() => setTypeTab('isolation')} style={{ borderRadius: '8px', background: typeTab === 'isolation' ? '#ebe1ce' : '#f6f2eb', color: typeTab === 'isolation' ? 'black' : 'black', padding: '16px', cursor: 'pointer', border: 'none' }}>
              Isolation
            </button>
            <button onClick={() => setTypeTab('chauffage')} style={{ borderRadius: '8px', background: typeTab === 'chauffage' ? '#ebe1ce' : '#f6f2eb', color: typeTab === 'chauffage' ? 'black' : 'black', padding: '16px', cursor: 'pointer', border: 'none' }}>
              Chauffage
            </button>
            <button onClick={() => setTypeTab('solaire')} style={{ borderRadius: '8px', background: typeTab === 'solaire' ? '#ebe1ce' : '#f6f2eb', color: typeTab === 'solaire' ? 'black' : 'black', padding: '16px', cursor: 'pointer', border: 'none' }}>
              Solaire
            </button>
            <button onClick={() => setTypeTab('globale')} style={{ borderRadius: '8px', background: typeTab === 'globale' ? '#ebe1ce' : '#f6f2eb', color: typeTab === 'globale' ? 'black' : 'black', padding: '16px', cursor: 'pointer', border: 'none' }}>
              Rénovation Globale
            </button>
            <div style={{ height: '1px', background: '#eaeaea', margin: '8px' }}>

            </div>
            <button onClick={() => setTypeTab(null)} style={{ borderRadius: '8px', background: 'white', color: 'black', padding: '16px', cursor: 'pointer', border: '1px solid #ebe1ce', background: typeTab === null ? '#ebe1ce' : 'white', color: typeTab === 'globale' ? 'black' : 'black', }}>
              Toutes nos solutions
            </button>
          </div>
          { typeTab === null &&
            <div style={{ flex: 3, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
              {
                pages.map(page => (
                  <Link key={page.id} href={`/${page.slug}`} style={{ flex: 1, aspectRatio: '9/12', border: '1px solid #eaeaea', borderRadius: '8px', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '8px', padding: '0px', background: 'white', overflow: 'hidden', color: 'black', gap: '0px' }}>
                    <div style={{ background: `#F9F9F9 url(${page.cover_image_url})`, width: '100%', flex: 1, backgroundPosition: 'center', backgroundSize: 'cover' }} />
                    <span style={{ flex: '0px 0px auto', display: 'block', padding: '16px' }}>
                    {page.title}
                    </span>
                  </Link>
                ))
              }
            </div>
          }
          { typeTab === 'isolation' &&
            <div style={{ flex: 3, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
              {
                pages.filter(page => page.category === 'isolation').map(page => (
                  <Link key={page.id} href={`/${page.slug}`} style={{ flex: 1, aspectRatio: '9/12', border: '1px solid #eaeaea', borderRadius: '8px', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '8px', padding: '0px', background: 'white', overflow: 'hidden', color: 'black', gap: '0px' }}>
                    <div style={{ background: `#F9F9F9 url(${page.cover_image_url})`, width: '100%', flex: 1, backgroundPosition: 'center', backgroundSize: 'cover' }} />
                    <span style={{ flex: '0px 0px auto', display: 'block', padding: '16px' }}>
                    {page.title}
                    </span>
                  </Link>
                ))
              }
            </div>
          }
          { typeTab === 'chauffage' &&
            <div style={{ flex: 3, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
              {
                pages.filter(page => page.category === 'chauffage').map(page => (
                  <Link key={page.id} href={`/${page.slug}`} style={{ flex: 1, aspectRatio: '9/12', border: '1px solid #eaeaea', borderRadius: '8px', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '8px', padding: '0px', background: 'white', overflow: 'hidden', color: 'black', gap: '0px' }}>
                    <div style={{ background: `#F9F9F9 url(${page.cover_image_url})`, width: '100%', flex: 1, backgroundPosition: 'center', backgroundSize: 'cover' }} />
                    <span style={{ flex: '0px 0px auto', display: 'block', padding: '16px' }}>
                    {page.title}
                    </span>
                  </Link>
                ))
              }
            </div>
          }
          { typeTab === 'solaire' &&
            <div style={{ flex: 3, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
              {
                pages.filter(page => page.category === 'solaire').map(page => (
                  <Link key={page.id} href={`/${page.slug}`} style={{ flex: 1, aspectRatio: '9/12', border: '1px solid #eaeaea', borderRadius: '8px', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '8px', padding: '0px', background: 'white', overflow: 'hidden', color: 'black', gap: '0px' }}>
                    <div style={{ background: `#F9F9F9 url(${page.cover_image_url})`, width: '100%', flex: 1, backgroundPosition: 'center', backgroundSize: 'cover' }} />
                    <span style={{ flex: '0px 0px auto', display: 'block', padding: '16px' }}>
                    {page.title}
                    </span>
                  </Link>
                ))
              }
            </div>
          }
          { typeTab === 'globale' &&
            <div style={{ flex: 3, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
              {
                pages.filter(page => page.category === 'globale').map(page => (
                  <Link key={page.id} href={`/${page.slug}`} style={{ flex: 1, aspectRatio: '9/12', border: '1px solid #eaeaea', borderRadius: '8px', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '8px', padding: '0px', background: 'white', overflow: 'hidden', color: 'black', gap: '0px' }}>
                    <div style={{ background: `#F9F9F9 url(${page.cover_image_url})`, width: '100%', flex: 1, backgroundPosition: 'center', backgroundSize: 'cover' }} />
                    <span style={{ flex: '0px 0px auto', display: 'block', padding: '16px' }}>
                    {page.title}
                    </span>
                  </Link>
                ))
              }
            </div>
          }
        </div>
      </div>
    </div>
  )
}