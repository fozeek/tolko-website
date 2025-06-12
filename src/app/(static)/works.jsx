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
            <button onClick={() => setTypeTab('isolation')} style={{ borderRadius: '8px', background: typeTab === 'isolation' ? 'black' : '#F9F9F9', color: typeTab === 'isolation' ? 'white' : 'black', padding: '16px', cursor: 'pointer' }}>
              Isolation
            </button>
            <button onClick={() => setTypeTab('chauffage')} style={{ borderRadius: '8px', background: typeTab === 'chauffage' ? 'black' : '#F9F9F9', color: typeTab === 'chauffage' ? 'white' : 'black', padding: '16px', cursor: 'pointer' }}>
              Chauffage
            </button>
            <button onClick={() => setTypeTab('solaire')} style={{ borderRadius: '8px', background: typeTab === 'solaire' ? 'black' : '#F9F9F9', color: typeTab === 'solaire' ? 'white' : 'black', padding: '16px', cursor: 'pointer' }}>
              Solaire
            </button>
            <button onClick={() => setTypeTab('global')} style={{ borderRadius: '8px', background: typeTab === 'global' ? 'black' : '#F9F9F9', color: typeTab === 'global' ? 'white' : 'black', padding: '16px', cursor: 'pointer' }}>
              Rénovation Globale
            </button>
            <div style={{ height: '1px', background: '#eaeaea', margin: '8px' }}>

            </div>
            <button style={{ borderRadius: '8px', background: '#F9F9F9', color: 'black', padding: '16px', cursor: 'pointer' }}>
              Toutes nos solutions
            </button>
          </div>
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
          { typeTab === 'global' &&
            <div style={{ flex: 3, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
              {
                pages.filter(page => page.category === 'gloable').map(page => (
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