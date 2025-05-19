import Link from "next/link";

import Markdown from "react-markdown";
import './markdown.scss';

const md = `
### Pourquoi l’isolation des fenêtres est-elle si importante ?

Les fenêtres jouent un rôle crucial dans l’isolation thermique et acoustique de votre logement. Mal isolées, elles peuvent être responsables de **10 à 15 % des pertes de chaleur** dans une habitation. Cela signifie que même si vos murs, vos combles ou votre toiture sont bien isolés, des fenêtres vieillissantes ou peu performantes peuvent compromettre l’efficacité énergétique de l’ensemble.

L’hiver, la chaleur s’échappe rapidement par les vitrages simples ou les menuiseries mal ajustées. L’été, la chaleur pénètre plus facilement, rendant votre intérieur inconfortable et augmentant l’usage de la climatisation. Dans les deux cas, cela se traduit par une **augmentation de vos factures énergétiques**.

### Les différents types de fenêtres isolantes

Il existe plusieurs solutions pour améliorer l’isolation de vos fenêtres :

* **Le double vitrage** : Composé de deux vitres séparées par une lame d’air ou de gaz argon, il est aujourd’hui un standard. Il réduit considérablement les pertes de chaleur et les nuisances sonores.

* **Le triple vitrage** : Encore plus performant, notamment dans les régions froides, il offre une isolation maximale mais nécessite une bonne orientation (sud, sud-est) pour éviter les pertes de luminosité et de chaleur passive.

* **Les fenêtres à isolation renforcée (VIR)** : Elles intègrent un traitement spécifique sur le vitrage, ce qui améliore leur performance thermique tout en conservant la transparence du verre.

### Le rôle essentiel des menuiseries

L’isolation ne dépend pas uniquement du vitrage. Les **cadres des fenêtres** (appelés aussi menuiseries) doivent eux aussi être performants. Bois, PVC, aluminium avec rupture de pont thermique : chaque matériau a ses avantages.

* **Le PVC** est très répandu, bon marché et offre une bonne isolation.
* **Le bois**, plus noble, est un excellent isolant naturel mais demande un entretien régulier.
* **L’aluminium**, plus fin et moderne, doit impérativement intégrer une rupture de pont thermique pour ne pas être un pont de froid.

Une fenêtre mal posée ou avec un cadre non adapté peut annuler les bénéfices d’un bon vitrage. C’est pourquoi **la qualité de la pose est déterminante**.

### Les bénéfices d’une bonne isolation des fenêtres

Investir dans des fenêtres performantes, c’est améliorer plusieurs aspects de votre logement :

* **Réduction des factures d’énergie** : Moins de chauffage en hiver, moins de climatisation en été.
* **Confort thermique** : Fini les sensations de paroi froide ou les courants d’air.
* **Confort acoustique** : Les bruits extérieurs sont nettement atténués.
* **Valorisation du bien immobilier** : Des fenêtres neuves et efficaces augmentent la valeur de votre logement.
* **Réduction de l’empreinte carbone** : Moins d’énergie consommée, c’est aussi moins de CO₂ rejeté dans l’atmosphère.

### Des aides pour vous accompagner dans vos travaux

Bonne nouvelle : des dispositifs financiers peuvent **réduire considérablement le coût de vos travaux** d’isolation des fenêtres.

Parmi eux :

* **MaPrimeRénov’**
* **L’éco-prêt à taux zéro**
* **La TVA réduite à 5,5 %**
* **Les certificats d’économie d’énergie (CEE)**

Ces aides sont conditionnées au choix d’un professionnel RGE (Reconnu Garant de l’Environnement) pour la fourniture et la pose. Cela garantit la qualité des travaux et leur conformité aux exigences réglementaires.

### Conclusion : une priorité accessible et rentable

L’isolation des fenêtres est souvent une **première étape simple et rapide** pour améliorer l’efficacité énergétique de votre logement. Elle ne nécessite pas de gros travaux, peut s’intégrer dans un projet global de rénovation, et commence à porter ses fruits dès les premiers jours.

C’est un investissement **rentable, durable, et bénéfique** pour votre confort, votre portefeuille… et pour la planète.
`;

export default function IsolationFenetre() {
  return (
    <main>
      <div style={{ maxWidth: '1120px', width: '100%', margin: '0px auto', border: '1px solid #f6f6f6', borderTop: 'none', borderRadius: '0px 0px 8px 8px', padding: '8px 16px', fontSize: '0.9em', color: 'grey', background: '#F9F9F9' }}>
        <Link href="/">Accueil</Link> • Isolation • Isolation fenêtres
      </div>
      <div style={{ padding: '16px' }}>
        <h1 style={{ maxWidth: '1120px', width: '100%', margin: '0px auto', display: 'flex', gap: '16px', color: 'black' }}>
          Isolation fenêtres
        </h1>
      </div>
      <div style={{ maxWidth: '1120px', width: '100%', margin: '0px auto', borderRadius: '8px', aspectRatio: '16/7', overflow: 'hidden', display: 'flex', position: 'relative', padding: '16px' }}>
        <div style={{ backgroundImage: 'url(/isolation-fenetres.png)', zIndex: 10, minWidth: '100%', height: '100%', backgroundSize: 'cover', position: 'absolute', top: '0px', left: '0px', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat' }} />
      </div>
      <div style={{ padding: '32px 16px' }}>
        <div style={{ maxWidth: '1120px', width: '100%', margin: '0px auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <h2 style={{ fontSize: '2.4em' }}>Isolation des fenêtres : un levier essentiel pour votre confort et vos économies d’énergie</h2>
          <div style={{ display: 'flex', gap: '16px', position: 'relative' }}>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px', position: 'sticky', top: '0px' }}>
              <div style={{ display: 'grid', flexDirection: 'column', gap: '8px', gridTemplateColumns: 'repeat(2, 1fr)' }}>
                <div style={{ aspectRatio: 1, textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px', background: 'black', color: 'white', padding: '16px', cursor: 'pointer' }}>
                  Maison
                </div>
                <div style={{ aspectRatio: 1, textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px', background: '#F9F9F9', color: 'black', padding: '16px', cursor: 'pointer' }}>
                  Appartement
                </div>
                <div style={{ aspectRatio: 1, textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px', background: '#F9F9F9', color: 'black', padding: '16px', cursor: 'pointer' }}>
                  Solaire
                </div>
                <div style={{ aspectRatio: 1, textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px', background: '#F9F9F9', color: 'black', padding: '16px', cursor: 'pointer' }}>
                  Rénovation Globale
                </div>
              </div>
              <Link href="/form" style={{ borderRadius: '8px', background: 'black', textAlign: 'center', color: 'white', padding: '16px', cursor: 'pointer' }}>
                J'estime mon bien
              </Link>
            </div>
            <div className="markdown-body" style={{ flex: 3, gap: '16px' }}>
              <Markdown>{md}</Markdown>
            </div>
          </div>
        </div>
      </div>
      <div style={{ padding: '32px 16px' }}>
        <div style={{ maxWidth: '1120px', width: '100%', margin: '0px auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <h2 style={{ fontSize: '2.4em' }}>Dernières actualitées</h2>
          <div style={{ display: 'flex', gap: '16px', flexDirection: 'column' }}>
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
  )
}