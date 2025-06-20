
import Link from "next/link";
import './layout.scss';
import { createClient } from "../../utils/supabase/server";
import Header from "../../components/header";

export const metadata = {
  title: "Rénovation énergetique",
  description: "Trouvez les professionnels selon vos besoins",
};

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

export default async function RootLayout({ children }) {
  const pages = await fetchPages();

  return (
    <>
      <div style={{ padding: '16px', background: 'black', textAlign: 'center', color: 'white' }}>
        TVA OFFERTE DU 13 MAI 2025 au 12 DECEMBRE 2025
      </div>
      <Header pages={pages} />
      {children}
      <footer style={{ background: 'rgb(209, 103, 39)', borderTop: '1px solid orange', padding: '32px 16px', flex: '0 0 auto', position: 'relative', zIndex: 50 }}>
        <div style={{ maxWidth: '1120px', width: '100%', margin: '0px auto', display: 'flex', flexDirection: 'column', gap: '32px', textAlign: 'left' }}>
          <div style={{ display: 'flex', color: 'white' }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '1.4em', paddingBottom: '32px' }}>
                Rénovation énergétique
              </div>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <Link href="/team/contact">Nous contacter</Link>
                <Link href="/team/qui-sommes-nous">Qui sommes nous</Link>
                <Link href="/team/nos-engagements">Nos engaements</Link>
                <Link href="/team/nous-rejoindre">Nous rejoindre !</Link>
              </div>
            </div>
            <div style={{ flex: 3, display: 'flex' }}>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <strong>Isolation</strong>
                {
                  pages.filter(page => page.category === 'isolation').map(page => (
                    <Link key={page.id} href={`/${page.slug}`}>{page.title}</Link>
                  ))
                }
              </div>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <strong>Chauffage</strong>
                {
                  pages.filter(page => page.category === 'chauffage').map(page => (
                    <Link key={page.id} href={`/${page.slug}`}>{page.title}</Link>
                  ))
                }
              </div>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <strong>Solaire</strong>
                {
                  pages.filter(page => page.category === 'solaire').map(page => (
                    <Link key={page.id} href={`/${page.slug}`}>{page.title}</Link>
                  ))
                }
              </div>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <strong>Rénovation globale</strong>
                {
                  pages.filter(page => page.category === 'globale').map(page => (
                    <Link key={page.id} href={`/${page.slug}`}>{page.title}</Link>
                  ))
                }
              </div>
            </div>
          </div>
          <div style={{ textAlign: 'center', color: 'white', borderTop: '1px solid orange', paddingTop: '32px' }}>
            &copy; 2025 • <Link href="/plan" prefetch={false}>Plan du site</Link> • <Link href="/legals" prefetch={false}>Mentions légales</Link> • <Link href="/cgu" prefetch={false}>CGU</Link> • <Link href="/cookies" prefetch={false}>Cookies</Link>
          </div>
        </div>
      </footer>
    </>
  );
}
