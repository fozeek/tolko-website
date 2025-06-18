import { createClient } from "../../../utils/supabase/server";
import Link from "next/link";
import Markdown from "react-markdown";
import remarkGfm from 'remark-gfm';
import '../../../components/markdown.scss';

const fetchPage = async (slug) => {  
  const supabase = await createClient();

  const query = supabase
    .from('pages')
    .select(`
      *
    `)
    // @todo pagination
    .eq('slug', slug).maybeSingle();

  const { data, error } = await query;

  console.log('ERROR', error);

  return data || [];
};

// @see https://nextjs.org/docs/app/api-reference/functions/generate-metadata
export async function generateMetadata({ params }) {
  const page = await fetchPage(`other/plan`);

  return {
    title: page.seo_title,
    description: page.seo_description,
    openGraph: {
      title: page.seo_title,
      description: page.seo_description,
      images: [{
        url: page.seo_image_url,
        // width: 800,
        // height: 600,
      }],
      locale: 'fr_FR',
      type: 'website',
      // url: 'https://nextjs.org',
      // siteName: 'Next.js',
    },
    twitter: {
      card: 'summary_large_image',
      title: page.seo_title,
      description: page.seo_description,
      // siteId: '1467726470533754880',
      // creator: '@nextjs',
      // creatorId: '1467726470533754880',
      images: [page.seo_image_url], // Must be an absolute URL
    },
  }
}

export default async function IsolationFenetre({ params }) {
  const page = await fetchPage(`other/plan`);
  
  return (
    <main>
      <div style={{ maxWidth: '1120px', width: '100%', margin: '0px auto', border: '1px solid #f6f6f6', borderTop: 'none', borderRadius: '0px 0px 8px 8px', padding: '8px 16px', fontSize: '0.9em', color: 'grey', background: '#F9F9F9' }}>
        <Link href="/">Accueil</Link> • Équipe • {page.title}
      </div>
      <div style={{ padding: '16px' }}>
        <h1 style={{ maxWidth: '1120px', width: '100%', margin: '0px auto', display: 'flex', gap: '16px', color: 'black' }}>
          {page.title}
        </h1>
      </div>
      <div style={{ padding: '32px 16px' }}>
        <div style={{ maxWidth: '1120px', width: '100%', margin: '0px auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <h2 style={{ fontSize: '2.4em' }}>{page.description}</h2>
          <div style={{ display: 'flex', gap: '16px', position: 'relative' }}>
            <div className="markdown-body" style={{ flex: 3, gap: '16px' }}>
              <Markdown remarkPlugins={[remarkGfm]}>{page.content}</Markdown>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}