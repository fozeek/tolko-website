import Link from "next/link";
import './page.scss';
import { Suspense } from "react";
import PostsCarousel from './postsCarousel';
import Works from './works';
import { createClient } from "../../utils/supabase/server";

async function fetchPages() {  
  const supabase = await createClient();

  const query = supabase
    .from('pages')
    .select(`
      *
    `)
    .eq('status', 'published')
    .order('created_at', { ascending: true })

  const { data, error } = await query;

  console.log('ERROR', error);

  return data || [];
}

export default async function Home({ searchParams }) {
  const pages = await fetchPages();

  return (
    <div className="home">
      <main>
        <div style={{ width: '100%', height: 'calc(90dvh - 180px)', overflow: 'hidden', display: 'flex', position: 'relative', padding: '16px' }}>
          <div style={{ backgroundImage: 'url(/home2.jpeg)', zIndex: 10, minWidth: '100%', height: '100%', backgroundSize: 'cover', position: 'absolute', top: '0px', left: '0px', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat' }} />

          <div style={{ position: 'relative', zIndex: 20, maxWidth: '1120px', width: '100%', margin: '0px auto', display: 'flex', gap: '16px', justifyContent: 'flex-end', alignItems: 'center' }}>
            <div style={{ borderRadius: '8px', background: 'white', padding: '16px', flex: '0 0 auto', maxWidth: '400px', boxShadow: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px' }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque a, accusantium non harum obcaecati dolorum qui veritatis cum illum reprehenderit earum voluptatum nemo rerum impedit ipsam odio nihil dolor illo.
              <br /><br />

              <Link href="/form" style={{ display: 'flex', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>J&apos;estime mon projet</Link>
            </div>
          </div>
        </div>
        <div style={{ padding: '16px', background: '#F9F9F9', borderTop: '1px solid #cfcfcf' }}>
          <div style={{ maxWidth: '1120px', width: '100%', margin: '0px auto', display: 'flex', gap: '16px' }}>
            <Link href="/form" style={{ flex: 1, color: '#2e2e2e', background: '#E9E9E9', cursor: 'pointer', aspectRatio: '16/9', borderRadius: '8px', padding: '16px', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '8px', fontSize: '1.2em', fontWeight: 'normal' }}>
              Je souscris un contrat d'entretien
            </Link>
            <Link href="/form" style={{ flex: 1, color: '#2e2e2e', background: '#E9E9E9', cursor: 'pointer', aspectRatio: '16/9', borderRadius: '8px', padding: '16px', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '8px', fontSize: '1.2em', fontWeight: 'normal' }}>
              J'installe un équipement
            </Link>
            <Link href="/form" style={{ flex: 1, color: '#2e2e2e', background: '#E9E9E9', cursor: 'pointer', aspectRatio: '16/9', borderRadius: '8px', padding: '16px', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '8px', fontSize: '1.2em', fontWeight: 'normal' }}>
              je veux être dépanner
            </Link>
            <Link href="/form" style={{ flex: 1, color: '#2e2e2e', background: '#E9E9E9', cursor: 'pointer', aspectRatio: '16/9', borderRadius: '8px', padding: '16px', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '8px', fontSize: '1.2em', fontWeight: 'normal' }}>
              Je calcule les aides de l'État
            </Link>
          </div>
        </div>
        <Works pages={pages} />
        <div style={{ padding: '32px 16px', background: '#eaeaea' }}>
          <div style={{ maxWidth: '1120px', width: '100%', margin: '0px auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h2 style={{ fontSize: '2.4em' }}>Comment ça marche ?</h2>
            <div style={{ display: 'flex', gap: '16px' }}>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '32px' }}>
                <button style={{ borderRadius: '8px', background: 'transparent', cursor: 'pointer', padding: '0px', border: 'none', textAlign: 'left', fontSize: '1em', display: 'flex', gap: '16px', alignItems: 'center' }}>
                  <div style={{ flex: '0 0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '99999px', width: '40px', height: '40px', background: 'black', color: 'white' }}>1</div>
                  <div style={{ flex: 1, color: 'black' }}>
                    Je décris mon projet simplement sur
                    <br />
                    Rénovation Énergétique
                  </div>
                </button>
                <button style={{ borderRadius: '8px', background: 'transparent', cursor: 'pointer', padding: '0px', border: 'none', textAlign: 'left', fontSize: '1em', display: 'flex', gap: '16px', alignItems: 'center' }}>
                  <div style={{ flex: '0 0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '99999px', width: '40px', height: '40px', background: 'black', color: 'white' }}>2</div>
                  <div style={{ flex: 1, color: 'black' }}>
                    Un professionnel me contacte
                  </div>
                </button>
                <button style={{ borderRadius: '8px', background: 'transparent', cursor: 'pointer', padding: '0px', border: 'none', textAlign: 'left', fontSize: '1em', display: 'flex', gap: '16px', alignItems: 'center' }}>
                  <div style={{ flex: '0 0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '99999px', width: '40px', height: '40px', background: 'black', color: 'white' }}>3</div>
                  <div style={{ flex: 1, color: 'black' }}>
                    Les travaux commencent
                  </div>
                </button>
                <div style={{ flex: 1 }}>

                </div>
                <button style={{ borderRadius: '8px', background: 'black', color: 'white', padding: '16px', cursor: 'pointer', border: 'none' }}>
                  J'estime mon projet
                </button>
              </div>
              <div style={{ flex: 2, display: 'grid' }}>
                <video autoPlay loop muted src="/home.mp4" style={{ width: '100%', borderRadius: '8px' }}></video>
              </div>
            </div>
          </div>
        </div>
        <Suspense fallback={<>Chargement...</>}>
          <PostsCarousel searchParams={searchParams} />
        </Suspense>
      </main>
    </div>
  );
}
