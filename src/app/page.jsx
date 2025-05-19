'use client';

import Link from "next/link";
import './page.scss';
import { useState } from "react";

// function Panel({ children }) {
//   return (

//   )
// }

export default function Home() {
  const [typeTab, setTypeTab] = useState('isolation');

  return (
    <div className="home">
      <main>

        <div style={{ width: '100%', height: '40dvh', overflow: 'hidden', display: 'flex', position: 'relative', padding: '16px' }}>
          <div style={{ backgroundImage: 'url(/cover.png)', zIndex: 10, minWidth: '100%', height: '100%', backgroundSize: 'cover', position: 'absolute', top: '0px', left: '0px', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat' }} />

          <div style={{ position: 'relative', zIndex: 20, maxWidth: '1120px', width: '100%', margin: '0px auto', display: 'flex', gap: '16px', justifyContent: 'flex-end', alignItems: 'center' }}>
            <div style={{ borderRadius: '8px', background: 'white', padding: '16px', flex: '0 0 auto', maxWidth: '400px', boxShadow: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px' }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque a, accusantium non harum obcaecati dolorum qui veritatis cum illum reprehenderit earum voluptatum nemo rerum impedit ipsam odio nihil dolor illo.
              <br /><br />

              <Link href="/form" style={{ display: 'flex', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>J&apos;estime mon projet</Link>
            </div>
          </div>
        </div>
        <div style={{ padding: '16px', background: '#d16727', borderTop: '1px solid orange' }}>
          <div style={{ maxWidth: '1120px', width: '100%', margin: '0px auto', display: 'flex', gap: '16px' }}>
            <Link href="/form" style={{ flex: 1, color: 'white', background: '#d58f65', cursor: 'pointer', aspectRatio: '16/9', border: '1px solid #eaeaea', borderRadius: '8px', padding: '16px', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '8px' }}>
              Je souscris un contrat d'entretien
            </Link>
            <Link href="/form" style={{ flex: 1, color: 'white', background: '#d58f65', cursor: 'pointer', aspectRatio: '16/9', border: '1px solid #eaeaea', borderRadius: '8px', padding: '16px', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '8px' }}>
              J'installe un équipement
            </Link>
            <Link href="/form" style={{ flex: 1, color: 'white', background: '#d58f65', cursor: 'pointer', aspectRatio: '16/9', border: '1px solid #eaeaea', borderRadius: '8px', padding: '16px', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '8px' }}>
              je veux être dépanner
            </Link>
            <Link href="/form" style={{ flex: 1, color: 'white', background: '#d58f65', cursor: 'pointer', aspectRatio: '16/9', border: '1px solid #eaeaea', borderRadius: '8px', padding: '16px', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '8px' }}>
              Je calcule les aides de l'État
            </Link>
          </div>
        </div>
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
                  <Link href="/isolation/isolation-fenetres" style={{ flex: 1, aspectRatio: '9/12', border: '1px solid #eaeaea', borderRadius: '8px', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '8px', padding: '0px', background: 'white', overflow: 'hidden', color: 'black', gap: '0px' }}>
                    <div style={{ background: 'url(/isolation-fenetres.png)', width: '100%', flex: 1, backgroundPosition: 'center', backgroundSize: 'cover' }} />
                    <span style={{ flex: '0px 0px auto', display: 'block', padding: '16px' }}>
                      Isolation fenêtres
                    </span>
                  </Link>
                  <Link href="/isolation/portes-isolantes" style={{ flex: 1, aspectRatio: '9/12', border: '1px solid #eaeaea', borderRadius: '8px', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '8px', padding: '0px', background: 'white', overflow: 'hidden', color: 'black', gap: '0px' }}>
                    <div style={{ background: 'url(/portes-isolantes.png)', width: '100%', flex: 1, backgroundPosition: 'center', backgroundSize: 'cover' }} />
                    <span style={{ flex: '0px 0px auto', display: 'block', padding: '16px' }}>
                      Portes isolantes
                    </span>
                  </Link>
                  <Link href="/isolation/traitement-ponts-thermiques" style={{ flex: 1, aspectRatio: '9/12', border: '1px solid #eaeaea', borderRadius: '8px', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '8px', padding: '0px', background: 'white', overflow: 'hidden', color: 'black', gap: '0px' }}>
                    <div style={{ background: 'url(/traitement-ponts-thermiques.png)', width: '100%', flex: 1, backgroundPosition: 'center', backgroundSize: 'cover' }} />
                    <span style={{ flex: '0px 0px auto', display: 'block', padding: '16px' }}>
                      Traitement ponts thermiques
                    </span>
                  </Link>
                  <Link href="/isolation/vmc-double-flux" style={{ flex: 1, aspectRatio: '9/12', border: '1px solid #eaeaea', borderRadius: '8px', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '8px', padding: '0px', background: 'white', overflow: 'hidden', color: 'black', gap: '0px' }}>
                    <div style={{ background: 'url(/vmc-double-flux.png)', width: '100%', flex: 1, backgroundPosition: 'center', backgroundSize: 'cover' }} />
                    <span style={{ flex: '0px 0px auto', display: 'block', padding: '16px' }}>
                      VMC double-flux
                    </span>
                  </Link>
                  <Link href="/isolation/combles-perdues" style={{ flex: 1, aspectRatio: '9/12', border: '1px solid #eaeaea', borderRadius: '8px', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '8px', padding: '0px', background: 'white', overflow: 'hidden', color: 'black', gap: '0px' }}>
                    <div style={{ background: 'url(/combles-perdues.png)', width: '100%', flex: 1, backgroundPosition: 'center', backgroundSize: 'cover' }} />
                    <span style={{ flex: '0px 0px auto', display: 'block', padding: '16px' }}>
                      Combles perdues
                    </span>
                  </Link>
                  <Link href="/isolation/combles-terrasse" style={{ flex: 1, aspectRatio: '9/12', border: '1px solid #eaeaea', borderRadius: '8px', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '8px', padding: '0px', background: 'white', overflow: 'hidden', color: 'black', gap: '0px' }}>
                    <div style={{ background: 'url(/combles-terrasse.png)', width: '100%', flex: 1, backgroundPosition: 'center', backgroundSize: 'cover' }} />
                    <span style={{ flex: '0px 0px auto', display: 'block', padding: '16px' }}>
                      Combles terrasse
                    </span>
                  </Link>
                  <Link href="/isolation/toiture-terrasse" style={{ flex: 1, aspectRatio: '9/12', border: '1px solid #eaeaea', borderRadius: '8px', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '8px', padding: '0px', background: 'white', overflow: 'hidden', color: 'black', gap: '0px' }}>
                    <div style={{ background: 'url(/isolation-fenetres.png)', width: '100%', flex: 1, backgroundPosition: 'center', backgroundSize: 'cover' }} />
                    <span style={{ flex: '0px 0px auto', display: 'block', padding: '16px' }}>
                      Toiture terrasse
                    </span>
                  </Link>
                  <Link href="/isolation/isolation-exterieur" style={{ flex: 1, aspectRatio: '9/12', border: '1px solid #eaeaea', borderRadius: '8px', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '8px', padding: '0px', background: 'white', overflow: 'hidden', color: 'black', gap: '0px' }}>
                    <div style={{ background: 'url(/isolation-exterieur.png)', width: '100%', flex: 1, backgroundPosition: 'center', backgroundSize: 'cover' }} />
                    <span style={{ flex: '0px 0px auto', display: 'block', padding: '16px' }}>
                      Isolation exterieur
                    </span>
                  </Link>
                  <Link href="/isolation/isolation-interieur" style={{ flex: 1, aspectRatio: '9/12', border: '1px solid #eaeaea', borderRadius: '8px', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '8px', padding: '0px', background: 'white', overflow: 'hidden', color: 'black', gap: '0px' }}>
                    <div style={{ background: 'url(/isolation-interieur.png)', width: '100%', flex: 1, backgroundPosition: 'center', backgroundSize: 'cover' }} />
                    <span style={{ flex: '0px 0px auto', display: 'block', padding: '16px' }}>
                      Isolation interieur
                    </span>
                  </Link>
                  <Link href="/isolation/plancher-bas" style={{ flex: 1, aspectRatio: '9/12', border: '1px solid #eaeaea', borderRadius: '8px', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '8px', padding: '0px', background: 'white', overflow: 'hidden', color: 'black', gap: '0px' }}>
                    <div style={{ background: 'url(/plancher-bas.png)', width: '100%', flex: 1, backgroundPosition: 'center', backgroundSize: 'cover' }} />
                    <span style={{ flex: '0px 0px auto', display: 'block', padding: '16px' }}>
                      Plancher bas
                    </span>
                  </Link>
                  <Link href="/isolation/sols" style={{ flex: 1, aspectRatio: '9/12', border: '1px solid #eaeaea', borderRadius: '8px', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '8px', padding: '0px', background: 'white', overflow: 'hidden', color: 'black', gap: '0px' }}>
                    <div style={{ background: 'url(/sols.png)', width: '100%', flex: 1, backgroundPosition: 'center', backgroundSize: 'cover' }} />
                    <span style={{ flex: '0px 0px auto', display: 'block', padding: '16px' }}>
                      Sols
                    </span>
                  </Link>
                </div>
              }
              { typeTab === 'chauffage' &&
                <div style={{ flex: 3, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
                  <Link href="/isolation/chauffe-eau-thermodynamique" style={{ flex: 1, aspectRatio: '9/12', border: '1px solid #eaeaea', borderRadius: '8px', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '8px', padding: '0px', background: 'white', overflow: 'hidden', color: 'black', gap: '0px' }}>
                    <div style={{ background: 'url(/isolation-fenetres.png)', width: '100%', flex: 1, backgroundPosition: 'center', backgroundSize: 'cover' }} />
                    <span style={{ flex: '0px 0px auto', display: 'block', padding: '16px' }}>
                      Chauffe eau thermodynamique
                    </span>
                  </Link>
                  <Link href="/isolation/insert-cheminee" style={{ flex: 1, aspectRatio: '9/12', border: '1px solid #eaeaea', borderRadius: '8px', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '8px', padding: '0px', background: 'white', overflow: 'hidden', color: 'black', gap: '0px' }}>
                    <div style={{ background: 'url(/isolation-fenetres.png)', width: '100%', flex: 1, backgroundPosition: 'center', backgroundSize: 'cover' }} />
                    <span style={{ flex: '0px 0px auto', display: 'block', padding: '16px' }}>
                      Insert cheminee
                    </span>
                  </Link>
                  <Link href="/isolation/plancher-chauffant" style={{ flex: 1, aspectRatio: '9/12', border: '1px solid #eaeaea', borderRadius: '8px', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '8px', padding: '0px', background: 'white', overflow: 'hidden', color: 'black', gap: '0px' }}>
                    <div style={{ background: 'url(/isolation-fenetres.png)', width: '100%', flex: 1, backgroundPosition: 'center', backgroundSize: 'cover' }} />
                    <span style={{ flex: '0px 0px auto', display: 'block', padding: '16px' }}>
                      Plancher chauffant
                    </span>
                  </Link>
                  <Link href="/isolation/radiateur-electrique" style={{ flex: 1, aspectRatio: '9/12', border: '1px solid #eaeaea', borderRadius: '8px', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '8px', padding: '0px', background: 'white', overflow: 'hidden', color: 'black', gap: '0px' }}>
                    <div style={{ background: 'url(/isolation-fenetres.png)', width: '100%', flex: 1, backgroundPosition: 'center', backgroundSize: 'cover' }} />
                    <span style={{ flex: '0px 0px auto', display: 'block', padding: '16px' }}>
                      Radiateur electrique
                    </span>
                  </Link>
                  <Link href="/isolation/chaudiere-buches" style={{ flex: 1, aspectRatio: '9/12', border: '1px solid #eaeaea', borderRadius: '8px', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '8px', padding: '0px', background: 'white', overflow: 'hidden', color: 'black', gap: '0px' }}>
                    <div style={{ background: 'url(/isolation-fenetres.png)', width: '100%', flex: 1, backgroundPosition: 'center', backgroundSize: 'cover' }} />
                    <span style={{ flex: '0px 0px auto', display: 'block', padding: '16px' }}>
                      Chaudiere buches
                    </span>
                  </Link>
                  <Link href="/isolation/chaudiere-condensation" style={{ flex: 1, aspectRatio: '9/12', border: '1px solid #eaeaea', borderRadius: '8px', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '8px', padding: '0px', background: 'white', overflow: 'hidden', color: 'black', gap: '0px' }}>
                    <div style={{ background: 'url(/isolation-fenetres.png)', width: '100%', flex: 1, backgroundPosition: 'center', backgroundSize: 'cover' }} />
                    <span style={{ flex: '0px 0px auto', display: 'block', padding: '16px' }}>
                      Chaudiere condensation
                    </span>
                  </Link>
                  <Link href="/isolation/chaudiere-granules" style={{ flex: 1, aspectRatio: '9/12', border: '1px solid #eaeaea', borderRadius: '8px', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '8px', padding: '0px', background: 'white', overflow: 'hidden', color: 'black', gap: '0px' }}>
                    <div style={{ background: 'url(/isolation-fenetres.png)', width: '100%', flex: 1, backgroundPosition: 'center', backgroundSize: 'cover' }} />
                    <span style={{ flex: '0px 0px auto', display: 'block', padding: '16px' }}>
                      Chaudiere granules
                    </span>
                  </Link>
                  <Link href="/isolation/chaudiere-hybride" style={{ flex: 1, aspectRatio: '9/12', border: '1px solid #eaeaea', borderRadius: '8px', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '8px', padding: '0px', background: 'white', overflow: 'hidden', color: 'black', gap: '0px' }}>
                    <div style={{ background: 'url(/isolation-fenetres.png)', width: '100%', flex: 1, backgroundPosition: 'center', backgroundSize: 'cover' }} />
                    <span style={{ flex: '0px 0px auto', display: 'block', padding: '16px' }}>
                      Chaudiere hybride
                    </span>
                  </Link>
                  <Link href="/isolation/pac-air-air" style={{ flex: 1, aspectRatio: '9/12', border: '1px solid #eaeaea', borderRadius: '8px', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '8px', padding: '0px', background: 'white', overflow: 'hidden', color: 'black', gap: '0px' }}>
                    <div style={{ background: 'url(/isolation-fenetres.png)', width: '100%', flex: 1, backgroundPosition: 'center', backgroundSize: 'cover' }} />
                    <span style={{ flex: '0px 0px auto', display: 'block', padding: '16px' }}>
                      PAC air-air
                    </span>
                  </Link>
                  <Link href="/isolation/pac-air-eau" style={{ flex: 1, aspectRatio: '9/12', border: '1px solid #eaeaea', borderRadius: '8px', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '8px', padding: '0px', background: 'white', overflow: 'hidden', color: 'black', gap: '0px' }}>
                    <div style={{ background: 'url(/isolation-fenetres.png)', width: '100%', flex: 1, backgroundPosition: 'center', backgroundSize: 'cover' }} />
                    <span style={{ flex: '0px 0px auto', display: 'block', padding: '16px' }}>
                      PAC air-eau
                    </span>
                  </Link>
                  <Link href="/isolation/pac-geothermique" style={{ flex: 1, aspectRatio: '9/12', border: '1px solid #eaeaea', borderRadius: '8px', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '8px', padding: '0px', background: 'white', overflow: 'hidden', color: 'black', gap: '0px' }}>
                    <div style={{ background: 'url(/isolation-fenetres.png)', width: '100%', flex: 1, backgroundPosition: 'center', backgroundSize: 'cover' }} />
                    <span style={{ flex: '0px 0px auto', display: 'block', padding: '16px' }}>
                      PAC géothermique
                    </span>
                  </Link>
                  <Link href="/isolation/pac-hybride" style={{ flex: 1, aspectRatio: '9/12', border: '1px solid #eaeaea', borderRadius: '8px', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '8px', padding: '0px', background: 'white', overflow: 'hidden', color: 'black', gap: '0px' }}>
                    <div style={{ background: 'url(/isolation-fenetres.png)', width: '100%', flex: 1, backgroundPosition: 'center', backgroundSize: 'cover' }} />
                    <span style={{ flex: '0px 0px auto', display: 'block', padding: '16px' }}>
                      PAC hybride
                    </span>
                  </Link>
                  <Link href="/isolation/poele-buches" style={{ flex: 1, aspectRatio: '9/12', border: '1px solid #eaeaea', borderRadius: '8px', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '8px', padding: '0px', background: 'white', overflow: 'hidden', color: 'black', gap: '0px' }}>
                    <div style={{ background: 'url(/isolation-fenetres.png)', width: '100%', flex: 1, backgroundPosition: 'center', backgroundSize: 'cover' }} />
                    <span style={{ flex: '0px 0px auto', display: 'block', padding: '16px' }}>
                      Poele buches
                    </span>
                  </Link>
                  <Link href="/isolation/poele-granules" style={{ flex: 1, aspectRatio: '9/12', border: '1px solid #eaeaea', borderRadius: '8px', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '8px', padding: '0px', background: 'white', overflow: 'hidden', color: 'black', gap: '0px' }}>
                    <div style={{ background: 'url(/isolation-fenetres.png)', width: '100%', flex: 1, backgroundPosition: 'center', backgroundSize: 'cover' }} />
                    <span style={{ flex: '0px 0px auto', display: 'block', padding: '16px' }}>
                      Poele granules
                    </span>
                  </Link>
                </div>
              }
              { typeTab === 'solaire' &&
                <div style={{ flex: 3, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
                  <Link href="/isolation/batterie-stockage-solaire" style={{ flex: 1, aspectRatio: '9/12', border: '1px solid #eaeaea', borderRadius: '8px', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '8px', padding: '0px', background: 'white', overflow: 'hidden', color: 'black', gap: '0px' }}>
                    <div style={{ background: 'url(/isolation-fenetres.png)', width: '100%', flex: 1, backgroundPosition: 'center', backgroundSize: 'cover' }} />
                    <span style={{ flex: '0px 0px auto', display: 'block', padding: '16px' }}>
                      Batterie stockage solaire
                    </span>
                  </Link>
                  <Link href="/isolation/chauffe-eau-solaire" style={{ flex: 1, aspectRatio: '9/12', border: '1px solid #eaeaea', borderRadius: '8px', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '8px', padding: '0px', background: 'white', overflow: 'hidden', color: 'black', gap: '0px' }}>
                    <div style={{ background: 'url(/isolation-fenetres.png)', width: '100%', flex: 1, backgroundPosition: 'center', backgroundSize: 'cover' }} />
                    <span style={{ flex: '0px 0px auto', display: 'block', padding: '16px' }}>
                      Chauffe eau solaire
                    </span>
                  </Link>
                  <Link href="/isolation/entretien-installation-solaire" style={{ flex: 1, aspectRatio: '9/12', border: '1px solid #eaeaea', borderRadius: '8px', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '8px', padding: '0px', background: 'white', overflow: 'hidden', color: 'black', gap: '0px' }}>
                    <div style={{ background: 'url(/isolation-fenetres.png)', width: '100%', flex: 1, backgroundPosition: 'center', backgroundSize: 'cover' }} />
                    <span style={{ flex: '0px 0px auto', display: 'block', padding: '16px' }}>
                      Entretien installation solaire
                    </span>
                  </Link>
                  <Link href="/isolation/kit-solaire-autonome" style={{ flex: 1, aspectRatio: '9/12', border: '1px solid #eaeaea', borderRadius: '8px', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '8px', padding: '0px', background: 'white', overflow: 'hidden', color: 'black', gap: '0px' }}>
                    <div style={{ background: 'url(/isolation-fenetres.png)', width: '100%', flex: 1, backgroundPosition: 'center', backgroundSize: 'cover' }} />
                    <span style={{ flex: '0px 0px auto', display: 'block', padding: '16px' }}>
                      Kit solaire autonome
                    </span>
                  </Link>
                  <Link href="/isolation/combles-perdues" style={{ flex: 1, aspectRatio: '9/12', border: '1px solid #eaeaea', borderRadius: '8px', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '8px', padding: '0px', background: 'white', overflow: 'hidden', color: 'black', gap: '0px' }}>
                    <div style={{ background: 'url(/isolation-fenetres.png)', width: '100%', flex: 1, backgroundPosition: 'center', backgroundSize: 'cover' }} />
                    <span style={{ flex: '0px 0px auto', display: 'block', padding: '16px' }}>
                      Ondulateur et optimiseur
                    </span>
                  </Link>
                  <Link href="/isolation/panneaux-solaires-photovoltaiques" style={{ flex: 1, aspectRatio: '9/12', border: '1px solid #eaeaea', borderRadius: '8px', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '8px', padding: '0px', background: 'white', overflow: 'hidden', color: 'black', gap: '0px' }}>
                    <div style={{ background: 'url(/isolation-fenetres.png)', width: '100%', flex: 1, backgroundPosition: 'center', backgroundSize: 'cover' }} />
                    <span style={{ flex: '0px 0px auto', display: 'block', padding: '16px' }}>
                      Panneaux solaires photovoltaiques
                    </span>
                  </Link>
                  <Link href="/isolation/systeme-solaire-combine" style={{ flex: 1, aspectRatio: '9/12', border: '1px solid #eaeaea', borderRadius: '8px', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '8px', padding: '0px', background: 'white', overflow: 'hidden', color: 'black', gap: '0px' }}>
                    <div style={{ background: 'url(/isolation-fenetres.png)', width: '100%', flex: 1, backgroundPosition: 'center', backgroundSize: 'cover' }} />
                    <span style={{ flex: '0px 0px auto', display: 'block', padding: '16px' }}>
                      Systeme solaire combiné
                    </span>
                  </Link>
                </div>
              }
              { typeTab === 'global' &&
                <div style={{ flex: 3, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
                  <Link href="/isolation/audit-energetique" style={{ flex: 1, aspectRatio: '9/12', border: '1px solid #eaeaea', borderRadius: '8px', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '8px', padding: '0px', background: 'white', overflow: 'hidden', color: 'black', gap: '0px' }}>
                    <div style={{ background: 'url(/isolation-fenetres.png)', width: '100%', flex: 1, backgroundPosition: 'center', backgroundSize: 'cover' }} />
                    <span style={{ flex: '0px 0px auto', display: 'block', padding: '16px' }}>
                      Audit énergétique
                    </span>
                  </Link>
                  <Link href="/isolation/bilan-energetique" style={{ flex: 1, aspectRatio: '9/12', border: '1px solid #eaeaea', borderRadius: '8px', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '8px', padding: '0px', background: 'white', overflow: 'hidden', color: 'black', gap: '0px' }}>
                    <div style={{ background: 'url(/isolation-fenetres.png)', width: '100%', flex: 1, backgroundPosition: 'center', backgroundSize: 'cover' }} />
                    <span style={{ flex: '0px 0px auto', display: 'block', padding: '16px' }}>
                      Bilan énergétique
                    </span>
                  </Link>
                  <Link href="/isolation/coordination-travaux" style={{ flex: 1, aspectRatio: '9/12', border: '1px solid #eaeaea', borderRadius: '8px', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '8px', padding: '0px', background: 'white', overflow: 'hidden', color: 'black', gap: '0px' }}>
                    <div style={{ background: 'url(/isolation-fenetres.png)', width: '100%', flex: 1, backgroundPosition: 'center', backgroundSize: 'cover' }} />
                    <span style={{ flex: '0px 0px auto', display: 'block', padding: '16px' }}>
                      Coordination travaux
                    </span>
                  </Link>
                  <Link href="/isolation/mon-accompagnateur-renov" style={{ flex: 1, aspectRatio: '9/12', border: '1px solid #eaeaea', borderRadius: '8px', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '8px', padding: '0px', background: 'white', overflow: 'hidden', color: 'black', gap: '0px' }}>
                    <div style={{ background: 'url(/isolation-fenetres.png)', width: '100%', flex: 1, backgroundPosition: 'center', backgroundSize: 'cover' }} />
                    <span style={{ flex: '0px 0px auto', display: 'block', padding: '16px' }}>
                      Mon accompagnateur Renov
                    </span>
                  </Link>
                  <Link href="/isolation/phasing-travaux" style={{ flex: 1, aspectRatio: '9/12', border: '1px solid #eaeaea', borderRadius: '8px', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '8px', padding: '0px', background: 'white', overflow: 'hidden', color: 'black', gap: '0px' }}>
                    <div style={{ background: 'url(/isolation-fenetres.png)', width: '100%', flex: 1, backgroundPosition: 'center', backgroundSize: 'cover' }} />
                    <span style={{ flex: '0px 0px auto', display: 'block', padding: '16px' }}>
                      Phasing travaux
                    </span>
                  </Link>
                  <Link href="/isolation/simulation-economies" style={{ flex: 1, aspectRatio: '9/12', border: '1px solid #eaeaea', borderRadius: '8px', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '8px', padding: '0px', background: 'white', overflow: 'hidden', color: 'black', gap: '0px' }}>
                    <div style={{ background: 'url(/isolation-fenetres.png)', width: '100%', flex: 1, backgroundPosition: 'center', backgroundSize: 'cover' }} />
                    <span style={{ flex: '0px 0px auto', display: 'block', padding: '16px' }}>
                      Simulation économies
                    </span>
                  </Link>
                  <Link href="/isolation/travaux-renovation-globale" style={{ flex: 1, aspectRatio: '9/12', border: '1px solid #eaeaea', borderRadius: '8px', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '8px', padding: '0px', background: 'white', overflow: 'hidden', color: 'black', gap: '0px' }}>
                    <div style={{ background: 'url(/isolation-fenetres.png)', width: '100%', flex: 1, backgroundPosition: 'center', backgroundSize: 'cover' }} />
                    <span style={{ flex: '0px 0px auto', display: 'block', padding: '16px' }}>
                      Travaux rénovation globale
                    </span>
                  </Link>
                </div>
              }
            </div>
          </div>
        </div>
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
        <div style={{ padding: '32px 16px' }}>
          <div style={{ maxWidth: '1120px', width: '100%', margin: '0px auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h2 style={{ fontSize: '2.4em' }}>Dernières actualitées</h2>
            <div style={{ display: 'flex', gap: '16px', flexDirection: 'column' }}>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'row', gap: '8px' }}>
                <div style={{ borderRadius: '8px', background: '#F9F9F9', color: 'black', padding: '16px', cursor: 'pointer' }}>
                  Tous
                </div>
                <div style={{ borderRadius: '8px', background: 'black', color: 'white', padding: '16px', cursor: 'pointer' }}>
                  Isolation
                </div>
                <div style={{ borderRadius: '8px', background: '#F9F9F9', color: 'black', padding: '16px', cursor: 'pointer' }}>
                  Chauffage
                </div>
                <div style={{ borderRadius: '8px', background: '#F9F9F9', color: 'black', padding: '16px', cursor: 'pointer' }}>
                  Solaire
                </div>
                <div style={{ borderRadius: '8px', background: '#F9F9F9', color: 'black', padding: '16px', cursor: 'pointer' }}>
                  Rénovation Globale
                </div>
              </div>
              <div style={{ flex: 3, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
                <Link href="/isolation/isolation-fenetres" style={{ flex: 1, aspectRatio: '9/12', border: '1px solid #eaeaea', borderRadius: '8px', padding: '16px', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '8px' }}>
                  isolation fenêtres
                </Link>
                <Link href="/isolation/isolation-fenetres" style={{ flex: 1, aspectRatio: '9/12', border: '1px solid #eaeaea', borderRadius: '8px', padding: '16px', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '8px' }}>
                  isolation fenêtres
                </Link>
                <Link href="/isolation/isolation-fenetres" style={{ flex: 1, aspectRatio: '9/12', border: '1px solid #eaeaea', borderRadius: '8px', padding: '16px', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '8px' }}>
                  isolation fenêtres
                </Link>
                <Link href="/isolation/isolation-fenetres" style={{ flex: 1, aspectRatio: '9/12', border: '1px solid #eaeaea', borderRadius: '8px', padding: '16px', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '8px' }}>
                  isolation fenêtres
                </Link>
                <Link href="/isolation/isolation-fenetres" style={{ flex: 1, aspectRatio: '9/12', border: '1px solid #eaeaea', borderRadius: '8px', padding: '16px', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '8px' }}>
                  isolation fenêtres
                </Link>
                <Link href="/isolation/isolation-fenetres" style={{ flex: 1, aspectRatio: '9/12', border: '1px solid #eaeaea', borderRadius: '8px', padding: '16px', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '8px' }}>
                  isolation fenêtres
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
