'use client';

import Link from "next/link";
import { useState } from "react";

export default function Works() {
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
              <Link href="/chauffage/chauffe-eau-thermodynamique" style={{ flex: 1, aspectRatio: '9/12', border: '1px solid #eaeaea', borderRadius: '8px', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '8px', padding: '0px', background: 'white', overflow: 'hidden', color: 'black', gap: '0px' }}>
                <div style={{ background: 'url(/isolation-fenetres.png)', width: '100%', flex: 1, backgroundPosition: 'center', backgroundSize: 'cover' }} />
                <span style={{ flex: '0px 0px auto', display: 'block', padding: '16px' }}>
                  Chauffe eau thermodynamique
                </span>
              </Link>
              <Link href="/chauffage/insert-cheminee" style={{ flex: 1, aspectRatio: '9/12', border: '1px solid #eaeaea', borderRadius: '8px', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '8px', padding: '0px', background: 'white', overflow: 'hidden', color: 'black', gap: '0px' }}>
                <div style={{ background: 'url(/isolation-fenetres.png)', width: '100%', flex: 1, backgroundPosition: 'center', backgroundSize: 'cover' }} />
                <span style={{ flex: '0px 0px auto', display: 'block', padding: '16px' }}>
                  Insert cheminee
                </span>
              </Link>
              <Link href="/chauffage/plancher-chauffant" style={{ flex: 1, aspectRatio: '9/12', border: '1px solid #eaeaea', borderRadius: '8px', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '8px', padding: '0px', background: 'white', overflow: 'hidden', color: 'black', gap: '0px' }}>
                <div style={{ background: 'url(/isolation-fenetres.png)', width: '100%', flex: 1, backgroundPosition: 'center', backgroundSize: 'cover' }} />
                <span style={{ flex: '0px 0px auto', display: 'block', padding: '16px' }}>
                  Plancher chauffant
                </span>
              </Link>
              <Link href="/chauffage/radiateur-electrique" style={{ flex: 1, aspectRatio: '9/12', border: '1px solid #eaeaea', borderRadius: '8px', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '8px', padding: '0px', background: 'white', overflow: 'hidden', color: 'black', gap: '0px' }}>
                <div style={{ background: 'url(/isolation-fenetres.png)', width: '100%', flex: 1, backgroundPosition: 'center', backgroundSize: 'cover' }} />
                <span style={{ flex: '0px 0px auto', display: 'block', padding: '16px' }}>
                  Radiateur electrique
                </span>
              </Link>
              <Link href="/chauffage/chaudiere-buches" style={{ flex: 1, aspectRatio: '9/12', border: '1px solid #eaeaea', borderRadius: '8px', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '8px', padding: '0px', background: 'white', overflow: 'hidden', color: 'black', gap: '0px' }}>
                <div style={{ background: 'url(/isolation-fenetres.png)', width: '100%', flex: 1, backgroundPosition: 'center', backgroundSize: 'cover' }} />
                <span style={{ flex: '0px 0px auto', display: 'block', padding: '16px' }}>
                  Chaudiere buches
                </span>
              </Link>
              <Link href="/chauffage/chaudiere-condensation" style={{ flex: 1, aspectRatio: '9/12', border: '1px solid #eaeaea', borderRadius: '8px', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '8px', padding: '0px', background: 'white', overflow: 'hidden', color: 'black', gap: '0px' }}>
                <div style={{ background: 'url(/isolation-fenetres.png)', width: '100%', flex: 1, backgroundPosition: 'center', backgroundSize: 'cover' }} />
                <span style={{ flex: '0px 0px auto', display: 'block', padding: '16px' }}>
                  Chaudiere condensation
                </span>
              </Link>
              <Link href="/chauffage/chaudiere-granules" style={{ flex: 1, aspectRatio: '9/12', border: '1px solid #eaeaea', borderRadius: '8px', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '8px', padding: '0px', background: 'white', overflow: 'hidden', color: 'black', gap: '0px' }}>
                <div style={{ background: 'url(/isolation-fenetres.png)', width: '100%', flex: 1, backgroundPosition: 'center', backgroundSize: 'cover' }} />
                <span style={{ flex: '0px 0px auto', display: 'block', padding: '16px' }}>
                  Chaudiere granules
                </span>
              </Link>
              <Link href="/chauffage/chaudiere-hybride" style={{ flex: 1, aspectRatio: '9/12', border: '1px solid #eaeaea', borderRadius: '8px', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '8px', padding: '0px', background: 'white', overflow: 'hidden', color: 'black', gap: '0px' }}>
                <div style={{ background: 'url(/isolation-fenetres.png)', width: '100%', flex: 1, backgroundPosition: 'center', backgroundSize: 'cover' }} />
                <span style={{ flex: '0px 0px auto', display: 'block', padding: '16px' }}>
                  Chaudiere hybride
                </span>
              </Link>
              <Link href="/chauffage/pac-air-air" style={{ flex: 1, aspectRatio: '9/12', border: '1px solid #eaeaea', borderRadius: '8px', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '8px', padding: '0px', background: 'white', overflow: 'hidden', color: 'black', gap: '0px' }}>
                <div style={{ background: 'url(/isolation-fenetres.png)', width: '100%', flex: 1, backgroundPosition: 'center', backgroundSize: 'cover' }} />
                <span style={{ flex: '0px 0px auto', display: 'block', padding: '16px' }}>
                  PAC air-air
                </span>
              </Link>
              <Link href="/chauffage/pac-air-eau" style={{ flex: 1, aspectRatio: '9/12', border: '1px solid #eaeaea', borderRadius: '8px', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '8px', padding: '0px', background: 'white', overflow: 'hidden', color: 'black', gap: '0px' }}>
                <div style={{ background: 'url(/isolation-fenetres.png)', width: '100%', flex: 1, backgroundPosition: 'center', backgroundSize: 'cover' }} />
                <span style={{ flex: '0px 0px auto', display: 'block', padding: '16px' }}>
                  PAC air-eau
                </span>
              </Link>
              <Link href="/chauffage/pac-geothermique" style={{ flex: 1, aspectRatio: '9/12', border: '1px solid #eaeaea', borderRadius: '8px', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '8px', padding: '0px', background: 'white', overflow: 'hidden', color: 'black', gap: '0px' }}>
                <div style={{ background: 'url(/isolation-fenetres.png)', width: '100%', flex: 1, backgroundPosition: 'center', backgroundSize: 'cover' }} />
                <span style={{ flex: '0px 0px auto', display: 'block', padding: '16px' }}>
                  PAC géothermique
                </span>
              </Link>
              <Link href="/chauffage/pac-hybride" style={{ flex: 1, aspectRatio: '9/12', border: '1px solid #eaeaea', borderRadius: '8px', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '8px', padding: '0px', background: 'white', overflow: 'hidden', color: 'black', gap: '0px' }}>
                <div style={{ background: 'url(/isolation-fenetres.png)', width: '100%', flex: 1, backgroundPosition: 'center', backgroundSize: 'cover' }} />
                <span style={{ flex: '0px 0px auto', display: 'block', padding: '16px' }}>
                  PAC hybride
                </span>
              </Link>
              <Link href="/chauffage/poele-buches" style={{ flex: 1, aspectRatio: '9/12', border: '1px solid #eaeaea', borderRadius: '8px', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '8px', padding: '0px', background: 'white', overflow: 'hidden', color: 'black', gap: '0px' }}>
                <div style={{ background: 'url(/isolation-fenetres.png)', width: '100%', flex: 1, backgroundPosition: 'center', backgroundSize: 'cover' }} />
                <span style={{ flex: '0px 0px auto', display: 'block', padding: '16px' }}>
                  Poele buches
                </span>
              </Link>
              <Link href="/chauffage/poele-granules" style={{ flex: 1, aspectRatio: '9/12', border: '1px solid #eaeaea', borderRadius: '8px', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '8px', padding: '0px', background: 'white', overflow: 'hidden', color: 'black', gap: '0px' }}>
                <div style={{ background: 'url(/isolation-fenetres.png)', width: '100%', flex: 1, backgroundPosition: 'center', backgroundSize: 'cover' }} />
                <span style={{ flex: '0px 0px auto', display: 'block', padding: '16px' }}>
                  Poele granules
                </span>
              </Link>
            </div>
          }
          { typeTab === 'solaire' &&
            <div style={{ flex: 3, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
              <Link href="/solaire/batterie-stockage-solaire" style={{ flex: 1, aspectRatio: '9/12', border: '1px solid #eaeaea', borderRadius: '8px', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '8px', padding: '0px', background: 'white', overflow: 'hidden', color: 'black', gap: '0px' }}>
                <div style={{ background: 'url(/isolation-fenetres.png)', width: '100%', flex: 1, backgroundPosition: 'center', backgroundSize: 'cover' }} />
                <span style={{ flex: '0px 0px auto', display: 'block', padding: '16px' }}>
                  Batterie stockage solaire
                </span>
              </Link>
              <Link href="/solaire/chauffe-eau-solaire" style={{ flex: 1, aspectRatio: '9/12', border: '1px solid #eaeaea', borderRadius: '8px', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '8px', padding: '0px', background: 'white', overflow: 'hidden', color: 'black', gap: '0px' }}>
                <div style={{ background: 'url(/isolation-fenetres.png)', width: '100%', flex: 1, backgroundPosition: 'center', backgroundSize: 'cover' }} />
                <span style={{ flex: '0px 0px auto', display: 'block', padding: '16px' }}>
                  Chauffe eau solaire
                </span>
              </Link>
              <Link href="/solaire/entretien-installation-solaire" style={{ flex: 1, aspectRatio: '9/12', border: '1px solid #eaeaea', borderRadius: '8px', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '8px', padding: '0px', background: 'white', overflow: 'hidden', color: 'black', gap: '0px' }}>
                <div style={{ background: 'url(/isolation-fenetres.png)', width: '100%', flex: 1, backgroundPosition: 'center', backgroundSize: 'cover' }} />
                <span style={{ flex: '0px 0px auto', display: 'block', padding: '16px' }}>
                  Entretien installation solaire
                </span>
              </Link>
              <Link href="/solaire/kit-solaire-autonome" style={{ flex: 1, aspectRatio: '9/12', border: '1px solid #eaeaea', borderRadius: '8px', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '8px', padding: '0px', background: 'white', overflow: 'hidden', color: 'black', gap: '0px' }}>
                <div style={{ background: 'url(/isolation-fenetres.png)', width: '100%', flex: 1, backgroundPosition: 'center', backgroundSize: 'cover' }} />
                <span style={{ flex: '0px 0px auto', display: 'block', padding: '16px' }}>
                  Kit solaire autonome
                </span>
              </Link>
              <Link href="/solaire/combles-perdues" style={{ flex: 1, aspectRatio: '9/12', border: '1px solid #eaeaea', borderRadius: '8px', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '8px', padding: '0px', background: 'white', overflow: 'hidden', color: 'black', gap: '0px' }}>
                <div style={{ background: 'url(/isolation-fenetres.png)', width: '100%', flex: 1, backgroundPosition: 'center', backgroundSize: 'cover' }} />
                <span style={{ flex: '0px 0px auto', display: 'block', padding: '16px' }}>
                  Ondulateur et optimiseur
                </span>
              </Link>
              <Link href="/solaire/panneaux-solaires-photovoltaiques" style={{ flex: 1, aspectRatio: '9/12', border: '1px solid #eaeaea', borderRadius: '8px', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '8px', padding: '0px', background: 'white', overflow: 'hidden', color: 'black', gap: '0px' }}>
                <div style={{ background: 'url(/isolation-fenetres.png)', width: '100%', flex: 1, backgroundPosition: 'center', backgroundSize: 'cover' }} />
                <span style={{ flex: '0px 0px auto', display: 'block', padding: '16px' }}>
                  Panneaux solaires photovoltaiques
                </span>
              </Link>
              <Link href="/solaire/systeme-solaire-combine" style={{ flex: 1, aspectRatio: '9/12', border: '1px solid #eaeaea', borderRadius: '8px', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '8px', padding: '0px', background: 'white', overflow: 'hidden', color: 'black', gap: '0px' }}>
                <div style={{ background: 'url(/isolation-fenetres.png)', width: '100%', flex: 1, backgroundPosition: 'center', backgroundSize: 'cover' }} />
                <span style={{ flex: '0px 0px auto', display: 'block', padding: '16px' }}>
                  Systeme solaire combiné
                </span>
              </Link>
            </div>
          }
          { typeTab === 'global' &&
            <div style={{ flex: 3, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
              <Link href="/global/audit-energetique" style={{ flex: 1, aspectRatio: '9/12', border: '1px solid #eaeaea', borderRadius: '8px', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '8px', padding: '0px', background: 'white', overflow: 'hidden', color: 'black', gap: '0px' }}>
                <div style={{ background: 'url(/isolation-fenetres.png)', width: '100%', flex: 1, backgroundPosition: 'center', backgroundSize: 'cover' }} />
                <span style={{ flex: '0px 0px auto', display: 'block', padding: '16px' }}>
                  Audit énergétique
                </span>
              </Link>
              <Link href="/global/bilan-energetique" style={{ flex: 1, aspectRatio: '9/12', border: '1px solid #eaeaea', borderRadius: '8px', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '8px', padding: '0px', background: 'white', overflow: 'hidden', color: 'black', gap: '0px' }}>
                <div style={{ background: 'url(/isolation-fenetres.png)', width: '100%', flex: 1, backgroundPosition: 'center', backgroundSize: 'cover' }} />
                <span style={{ flex: '0px 0px auto', display: 'block', padding: '16px' }}>
                  Bilan énergétique
                </span>
              </Link>
              <Link href="/global/coordination-travaux" style={{ flex: 1, aspectRatio: '9/12', border: '1px solid #eaeaea', borderRadius: '8px', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '8px', padding: '0px', background: 'white', overflow: 'hidden', color: 'black', gap: '0px' }}>
                <div style={{ background: 'url(/isolation-fenetres.png)', width: '100%', flex: 1, backgroundPosition: 'center', backgroundSize: 'cover' }} />
                <span style={{ flex: '0px 0px auto', display: 'block', padding: '16px' }}>
                  Coordination travaux
                </span>
              </Link>
              <Link href="/global/mon-accompagnateur-renov" style={{ flex: 1, aspectRatio: '9/12', border: '1px solid #eaeaea', borderRadius: '8px', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '8px', padding: '0px', background: 'white', overflow: 'hidden', color: 'black', gap: '0px' }}>
                <div style={{ background: 'url(/isolation-fenetres.png)', width: '100%', flex: 1, backgroundPosition: 'center', backgroundSize: 'cover' }} />
                <span style={{ flex: '0px 0px auto', display: 'block', padding: '16px' }}>
                  Mon accompagnateur Renov
                </span>
              </Link>
              <Link href="/global/phasing-travaux" style={{ flex: 1, aspectRatio: '9/12', border: '1px solid #eaeaea', borderRadius: '8px', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '8px', padding: '0px', background: 'white', overflow: 'hidden', color: 'black', gap: '0px' }}>
                <div style={{ background: 'url(/isolation-fenetres.png)', width: '100%', flex: 1, backgroundPosition: 'center', backgroundSize: 'cover' }} />
                <span style={{ flex: '0px 0px auto', display: 'block', padding: '16px' }}>
                  Phasing travaux
                </span>
              </Link>
              <Link href="/global/simulation-economies" style={{ flex: 1, aspectRatio: '9/12', border: '1px solid #eaeaea', borderRadius: '8px', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '8px', padding: '0px', background: 'white', overflow: 'hidden', color: 'black', gap: '0px' }}>
                <div style={{ background: 'url(/isolation-fenetres.png)', width: '100%', flex: 1, backgroundPosition: 'center', backgroundSize: 'cover' }} />
                <span style={{ flex: '0px 0px auto', display: 'block', padding: '16px' }}>
                  Simulation économies
                </span>
              </Link>
              <Link href="/global/travaux-renovation-globale" style={{ flex: 1, aspectRatio: '9/12', border: '1px solid #eaeaea', borderRadius: '8px', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '8px', padding: '0px', background: 'white', overflow: 'hidden', color: 'black', gap: '0px' }}>
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
  )
}