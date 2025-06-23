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
          <div style={{ backgroundImage: 'url(/home3.png)', zIndex: 10, minWidth: '100%', height: '100%', backgroundSize: 'cover', position: 'absolute', top: '0px', left: '0px', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat' }} />

          <div style={{ position: 'relative', zIndex: 20, maxWidth: '1120px', width: '100%', margin: '0px auto', display: 'flex', gap: '16px', justifyContent: 'flex-end', alignItems: 'center' }}>
            <div style={{ flex: '0 0 auto', maxWidth: '450px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ borderRadius: '8px', fontSize: '1.1em', background: 'white', padding: '16px', flex: '0 0 auto', boxShadow: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px' }}>
                <strong style={{ fontSize: '1.1em' }}>Transformez votre maison, et vos factures.</strong>
                <br />
                <br />
                Isolation, chauffage, solaire ou rénovation globale :
                on simplifie votre parcours, vous maximisez vos aides
              </div>

              <Link href="/form" style={{ display: 'flex', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px' }}>J&apos;estime mon projet</Link>
            </div>
          </div>
        </div>
        <div style={{ padding: '16px', background: '#f6f2eb', borderBottom: '1px solid #dcdedd' }}>
          <div style={{ maxWidth: '1120px', width: '100%', margin: '0px auto', display: 'flex', gap: '16px' }}>
            <Link href="/form" style={{ flex: 1, color: '#2e2e2e', background: '#ebe1ce', cursor: 'pointer', aspectRatio: '16/9', borderRadius: '8px', padding: '16px', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '8px', fontSize: '1.2em', fontWeight: 'normal' }}>
              Souscrire un contrat
            </Link>
            <Link href="/form" style={{ flex: 1, color: '#2e2e2e', background: '#ebe1ce', cursor: 'pointer', aspectRatio: '16/9', borderRadius: '8px', padding: '16px', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '8px', fontSize: '1.2em', fontWeight: 'normal' }}>
              Installer un équipement
            </Link>
            <Link href="/form" style={{ flex: 1, color: '#2e2e2e', background: '#ebe1ce', cursor: 'pointer', aspectRatio: '16/9', borderRadius: '8px', padding: '16px', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '8px', fontSize: '1.2em', fontWeight: 'normal' }}>
              Etre dépanné
            </Link>
            <Link href="/form" style={{ flex: 1, color: '#2e2e2e', background: '#ebe1ce', cursor: 'pointer', aspectRatio: '16/9', borderRadius: '8px', padding: '16px', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '8px', fontSize: '1.2em', fontWeight: 'normal' }}>
              Calculer mes aides & primes
            </Link>
          </div>
        </div>
        <Works pages={pages} />
        <div style={{ padding: '32px 16px', background: '#f6f2eb' }}>
          <div style={{ maxWidth: '1120px', width: '100%', margin: '0px auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h2 style={{ fontSize: '2.4em' }}>Comment ça marche ?</h2>
            <div style={{ display: 'flex', gap: '16px' }}>
              <div style={{ flex: 2, display: 'flex', flexDirection: 'column', gap: '32px' }}>
                <button style={{ borderRadius: '8px', background: 'transparent', cursor: 'pointer', padding: '0px', border: 'none', textAlign: 'left', fontSize: '1em', display: 'flex', gap: '16px' }}>
                  <div style={{ flex: '0 0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '99999px', width: '40px', height: '40px', background: '#ebe1ce', color: 'black' }}>1</div>
                  <div style={{ flex: 1, color: 'black', display: 'flex', flexDirection: 'column', gap: '8px', fontWeight: '500', paddingTop: '8px' }}>
                    <strong style={{ fontSize: '1.2em' }}>Vous décrivez votre projet</strong>
                    En 2 minutes, précisez votre besoin : isolation, chauffage, solaire ou rénovation globale.
                    <br />
                    C’est simple, rapide, et sans engagement.
                  </div>
                </button>
                <button style={{ borderRadius: '8px', background: 'transparent', cursor: 'pointer', padding: '0px', border: 'none', textAlign: 'left', fontSize: '1em', display: 'flex', gap: '16px' }}>
                  <div style={{ flex: '0 0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '99999px', width: '40px', height: '40px', background: '#ebe1ce', color: 'black' }}>2</div>
                  <div style={{ flex: 1, color: 'black', display: 'flex', flexDirection: 'column', gap: '8px', fontWeight: '500', paddingTop: '8px' }}>
                    <strong style={{ fontSize: '1.2em' }}>Nous analysons votre demande</strong>
                    Nous collectons les infos essentielles pour comprendre votre logement, vos besoins et vos aides potentielles.
                  </div>
                </button>
                <button style={{ borderRadius: '8px', background: 'transparent', cursor: 'pointer', padding: '0px', border: 'none', textAlign: 'left', fontSize: '1em', display: 'flex', gap: '16px' }}>
                  <div style={{ flex: '0 0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '99999px', width: '40px', height: '40px', background: '#ebe1ce', color: 'black' }}>3</div>
                  <div style={{ flex: 1, color: 'black', display: 'flex', flexDirection: 'column', gap: '8px', fontWeight: '500', paddingTop: '8px' }}>
                    <strong style={{ fontSize: '1.2em' }}>Un professionnel vous contacte</strong>
                    Votre demande est transmise à des artisans ou entreprises qualifiées près de chez vous.
                    <br />
                    Vous êtes recontacté rapidement pour faire avancer votre projet.
                  </div>
                </button>
                <button style={{ borderRadius: '8px', background: 'transparent', cursor: 'pointer', padding: '0px', border: 'none', textAlign: 'left', fontSize: '1em', display: 'flex', gap: '16px' }}>
                  <div style={{ flex: '0 0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '99999px', width: '40px', height: '40px', background: '#ebe1ce', color: 'black' }}>4</div>
                  <div style={{ flex: 1, color: 'black', display: 'flex', flexDirection: 'column', gap: '8px', fontWeight: '500', paddingTop: '8px' }}>
                    <strong style={{ fontSize: '1.2em' }}>Vous comparez et décidez</strong>
                    Recevez une estimation ou une proposition.
                    <br />
                    Vous choisissez en toute liberté – c’est vous qui décidez si vous voulez aller plus loin.
                  </div>
                </button>
                <div style={{ flex: 1 }}>
                  <strong>Gratuit, sans engagement</strong> — Vos informations sont traitées en toute 
                  confidentialité, uniquement pour vous mettre en relation avec les bons 
                  professionnels.
                </div>
                <button style={{ borderRadius: '8px', background: '#ebe1ce', color: 'black', padding: '16px', cursor: 'pointer', border: 'none' }}>
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
