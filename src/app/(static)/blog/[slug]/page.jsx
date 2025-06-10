import Link from "next/link";
import { createClient } from "../../../../utils/supabase/server";
import Markdown from "react-markdown";
import PostsCarousel from "../../postsCarousel";

async function fetchPost(slug) {  
  const supabase = await createClient();

  const query = supabase
    .from('posts')
    .select(`
      *
    `)
    // @todo pagination
    .eq('slug', slug).maybeSingle();

  const { data, error } = await query;

  console.log('ERROR', error);

  return data || [];
}

export default async function Post({ params, searchParams }) {
  const { slug } = await params;
  const post = await fetchPost(`${slug}`);
  
  return (
    <main>
      <div style={{ maxWidth: '1120px', width: '100%', margin: '0px auto', border: '1px solid #f6f6f6', borderTop: 'none', borderRadius: '0px 0px 8px 8px', padding: '8px 16px', fontSize: '0.9em', color: 'grey', background: '#F9F9F9' }}>
        <Link href="/">Accueil</Link> • Blog • {post.title}
      </div>
      <div style={{ padding: '16px' }}>
        <h1 style={{ maxWidth: '1120px', width: '100%', margin: '0px auto', display: 'flex', gap: '16px', color: 'black' }}>
          {post.title}
        </h1>
      </div>
      <div style={{ padding: '32px 16px' }}>
        <div style={{ maxWidth: '1120px', width: '100%', margin: '0px auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ display: 'flex', gap: '16px', position: 'relative' }}>
            <div className="markdown-body" style={{ flex: 3, gap: '16px' }}>
              <Markdown>{post.content}</Markdown>
            </div>
          </div>
        </div>
      </div>
      <PostsCarousel searchParams={searchParams} />
    </main>
  )
}