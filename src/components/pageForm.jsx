import Link from "next/link";

import Markdown from "react-markdown";
import './markdown.scss';
import PostsCarousel from '../app/(static)/postsCarousel';
import remarkGfm from 'remark-gfm';

export default function PageForm({ page, category }) {
  return (
    <main>
      <div style={{ maxWidth: '1120px', width: '100%', margin: '0px auto', border: '1px solid #f6f6f6', borderTop: 'none', borderRadius: '0px 0px 8px 8px', padding: '8px 16px', fontSize: '0.9em', color: 'grey', background: '#F9F9F9' }}>
        <Link href="/">Accueil</Link> • {{ isolation: 'Isolation', solaire: 'Solaire', globale: 'Rénovation Globale', chauffage: 'Chauffage' }[page.category]} • {page.title}
      </div>
      <div style={{ padding: '16px' }}>
        <h1 style={{ maxWidth: '1120px', width: '100%', margin: '0px auto', display: 'flex', gap: '16px', color: 'black' }}>
          {page.title}
        </h1>
      </div>
      <div style={{ maxWidth: '1120px', margin: '0px auto', borderRadius: '8px', aspectRatio: '16/7', backgroundImage: `url(${page.cover_image_url || '/isolation-fenetres.png'})`, backgroundSize: 'cover', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat' }} />
      <div style={{ padding: '32px 16px' }}>
        <div style={{ maxWidth: '1120px', width: '100%', margin: '0px auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <h2 style={{ fontSize: '2.4em' }}>{page.description}</h2>
          <div style={{ display: 'flex', gap: '16px', position: 'relative' }}>
            <div style={{ flex: 1, position: 'relative', overflow: 'inherit' }}>
              <div style={{ position: 'sticky', top: '36px', left: '0px', width: '100%', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', borderRadius: '8px', background: '#E9E9E9', height: '100px' }}>
                  @todo
                  <br />
                  Pre-Question
                </div>
                <Link href={`/form${category ? `?t=${category}` : ''}`} style={{ borderRadius: '8px', background: 'black', textAlign: 'center', color: 'white', padding: '16px', cursor: 'pointer', width: '100%', display: 'block' }}>
                  J'estime mes travaux
                </Link>
              </div>
            </div>
            <div className="markdown-body" style={{ flex: 3, gap: '16px', overflow: 'hidden' }}>
              <Markdown remarkPlugins={[remarkGfm]}>{page.content}</Markdown>
            </div>
          </div>
        </div>
      </div>
      <PostsCarousel category={category} />
    </main>
  )
}