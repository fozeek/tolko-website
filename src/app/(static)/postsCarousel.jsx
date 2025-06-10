import Link from "next/link";
import { createClient } from "../../utils/supabase/server";
import SwitchPostsCategory from "./switchPostsCategory";

async function fetchPosts(category) {  
  const supabase = await createClient();

  const query = supabase
    .from('posts')
    .select(`
      *
    `)
    // @todo pagination
    .limit(6)
    .eq('status', 'published');

  if (category) {
    query.eq('category', category);
  }

  const { data, error } = await query;

  console.log('ERROR', error);

  return data || [];
}

export default async function PostsCarousel({ searchParams, category }) {
  const query = searchParams ? (await searchParams) : { category };
  const posts = await fetchPosts(query.category);

  return (
    <div style={{ padding: '32px 16px' }}>
      <div style={{ maxWidth: '1120px', width: '100%', margin: '0px auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <h2 style={{ fontSize: '2.4em' }}>Dernières actualitées</h2>
        <div style={{ display: 'flex', gap: '16px', flexDirection: 'column' }}>
          { category === undefined &&
            <SwitchPostsCategory />
          }
          <div style={{ flex: 3, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
            {
              posts.map((post) => (
                <Link href={`/blog/${post.slug}`} style={{ flex: 1, aspectRatio: '9/12', border: '1px solid #eaeaea', borderRadius: '8px', padding: '16px', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '8px' }}>
                  {post.title}
                </Link>
              ))
            }
          </div>
          { posts.length === 0 &&
            <div style={{ textAlign: 'center', padding: '64px 0px' }}>
              Aucun article correspondant
            </div>
          }
        </div>
      </div>
    </div>
  )
}