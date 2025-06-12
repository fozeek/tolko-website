'use client';

import Link from 'next/link';
import './page.scss'
import { Sour_Gummy } from "next/font/google";
// import { Picker } from '@/components/form/picker';
import { useEffect, useState } from 'react';
import createOrUpdateLead from '../actions/createOrUpdateLead';
import { Picker } from '../../components/form/picker';
// import { Picker } from '@/components/form/picker';

const sourGummy = Sour_Gummy({
  display: "swap",
  subsets: ["latin"],
});

export default function Form() {
  const [data, setData] = useState({
    type: '',
  });
  const [step, setStep] = useState('user');
  const [isLoading, setIsLoading] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    async function save() {
      const { leadId } = await createOrUpdateLead(data, step);
      setData(prevData => ({ ...prevData, id: leadId }))
    }

    save();
  }, [step]);
  
  function prev() {
    setStep(prevStep => {
      if (prevStep === 'project.1') {
        return 'user';
      }
      if (prevStep === 'project.2') {
        return 'project.1';
      }
      if (prevStep === 'project.3') {
        return 'project.2';
      }
      if (prevStep === 'project.4') {
        return 'project.3';
      }
      if (prevStep === 'project.5') {
        return 'project.4';
      }
      if (prevStep === 'project.6') {
        return 'project.5';
      }

      return prevStep;
    })
  }

  if (saved) {
    return (
      <div className="form">
        <header>
          <Link href={'/'} className={`logo ${sourGummy.className}`}>
            Rénovation énergetique
          </Link>
        </header>
        <main style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          Vous allez être contacter par un professionel
        </main>
      </div>
    )
  }

  if (isLoading === true) {
    return (
      <div className="form">
        <header>
          <Link href={'/'} className={`logo ${sourGummy.className}`}>
            Rénovation énergetique
          </Link>
        </header>
        <main style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          Enregistrement
        </main>
      </div>
    )
  }

  return (
    <div className="form">
      <header>
        <Link href={'/'} className={`logo`}>
          Rénovation énergétique
        </Link>
      </header>
      <main>
        <div className="progress">
          <div style={{ width: `${{ 'user': 20, 'project.1': 30, 'project.2': 40, 'project.3': 50, 'project.4': 60, 'project.5': 70, 'project.6': 80, 'end': 100 }[step]}%` }}></div>
        </div>
        { step !== 'end' && step !== 'user' &&
          <div>
            <button onClick={prev} style={{ background: 'transparent', fontSize: '1em', padding: '16px', border: 'none', cursor: 'pointer' }}>&lsaquo; Précedent</button>
          </div>
        }
        { step === 'user' &&
          <div className="step" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            Dites nous en plus sur vous :

            <div style={{ display: 'flex', gap: '16px' }}>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <label htmlFor="" style={{ fontWeight: 700 }}>Nom</label>
                <input value={data.lastname} required onChange={event => setData(prevData => ({ ...prevData, lastname: event.target.value }))} type="text" style={{ width: '100%', padding: '16px', fontSize: '1em', borderRadius: '8px', background: 'white', border: '1px solid #eaeaea' }} />
              </div>

              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <label htmlFor="" style={{ fontWeight: 700 }}>Prénom</label>
                <input value={data.firstname} required onChange={event => setData(prevData => ({ ...prevData, firstname: event.target.value }))} type="text" style={{ width: '100%', padding: '16px', fontSize: '1em', borderRadius: '8px', background: 'white', border: '1px solid #eaeaea' }} />
              </div>
            </div>

            <div style={{ display: 'flex', gap: '16px' }}>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <label htmlFor="" style={{ fontWeight: 700 }}>Code postal</label>
                <input value={data.zipcode} required onChange={event => setData(prevData => ({ ...prevData, zipcode: event.target.value }))} style={{ width: '100%', padding: '16px', fontSize: '1em', borderRadius: '8px', background: 'white', border: '1px solid #eaeaea' }} />
              </div>

              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <label htmlFor="" style={{ fontWeight: 700 }}>Ville</label>
                <input value={data.city} required onChange={event => setData(prevData => ({ ...prevData, city: event.target.value }))} style={{ width: '100%', padding: '16px', fontSize: '1em', borderRadius: '8px', background: 'white', border: '1px solid #eaeaea' }} />
              </div>
            </div>

            <div style={{ display: 'flex', gap: '16px' }}>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <label htmlFor="" style={{ fontWeight: 700 }}>Email</label>
                <input value={data.email} type="email" required onChange={event => setData(prevData => ({ ...prevData, email: event.target.value }))} style={{ width: '100%', padding: '16px', fontSize: '1em', borderRadius: '8px', background: 'white', border: '1px solid #eaeaea' }} />
              </div>

              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <label htmlFor="" style={{ fontWeight: 700 }}>Téléphone</label>
                <input value={data.phone} type="phone" required onChange={event => setData(prevData => ({ ...prevData, phone: event.target.value }))} style={{ width: '100%', padding: '16px', fontSize: '1em', borderRadius: '8px', background: 'white', border: '1px solid #eaeaea' }} />
              </div>
            </div>

            <button onClick={() => {
              setStep('project.1')
            }}>Suivant</button>

            {/* <form action={create}>
              <button>Envoyer</button>
            </form> */}
          </div>
        }
        { step === 'project.1' &&
          <div className="step">
            Votre projet concerne :

            <Picker>
              <Picker.Choice label="Une maison" value="home" onPick={(value) => {
                setData(prevData => ({ ...prevData, home: value }))
                setStep('project.2')
              }} />
              <Picker.Choice label="Un appartement" value="apt" onPick={(value) => {
                setData(prevData => ({ ...prevData, home: value }))
                setStep('project.2')
              }} />
            </Picker>
          </div>
        }
        { step === 'project.2' &&
          <div className="step">
            La construction de ce logement date de :

            <Picker>
              <Picker.Choice label="Moins de 2 ans" value="less2" onPick={(value) => {
                setData(prevData => ({ ...prevData, build_year: value }))
                setStep('project.3')
              }} />
              <Picker.Choice label="Entre 2 et 15 ans" value="btwn2&15" onPick={(value) => {
                setData(prevData => ({ ...prevData, build_year: value }))
                setStep('project.3')
              }} />
              <Picker.Choice label="Plus de 15 ans" value="15more" onPick={(value) => {
                setData(prevData => ({ ...prevData, build_year: value }))
                setStep('project.3')
              }} />
            </Picker>
          </div>
        }
        { step === 'project.3' &&
          <div className="step">
            Quelle est sa classe energétique :

            <Picker>
              <Picker.Choice label="Étiquette A" value="a" onPick={(value) => {
                setData(prevData => ({ ...prevData, energy_category: value }))
                setStep('project.4')
              }} />
              <Picker.Choice label="Étiquette B" value="b" onPick={(value) => {
                setData(prevData => ({ ...prevData, energy_category: value }))
                setStep('project.4')
              }} />
              <Picker.Choice label="Étiquette C" value="c" onPick={(value) => {
                setData(prevData => ({ ...prevData, energy_category: value }))
                setStep('project.4')
              }} />
              <Picker.Choice label="Étiquette D" value="d" onPick={(value) => {
                setData(prevData => ({ ...prevData, energy_category: value }))
                setStep('project.4')
              }} />
              <Picker.Choice label="Étiquette E" value="e" onPick={(value) => {
                setData(prevData => ({ ...prevData, energy_category: value }))
                setStep('project.4')
              }} />
              <Picker.Choice label="Étiquette F" value="f" onPick={(value) => {
                setData(prevData => ({ ...prevData, energy_category: value }))
                setStep('project.4')
              }} />
              <Picker.Choice label="Étiquette G" value="g" onPick={(value) => {
                setData(prevData => ({ ...prevData, energy_category: value }))
                setStep('project.4')
              }} />
              <Picker.Choice label="Je ne sais pas" value="unknown" onPick={(value) => {
                setData(prevData => ({ ...prevData, energy_category: value }))
                setStep('project.4')
              }} />
            </Picker>
          </div>
        }
        { step === 'project.4' &&
          <div className="step">
            Quel type de travaux envisagez-vous ? 

            <Picker>
              <Picker.Choice label="Isolation" value="isolation" onPick={(value) => {
                setData(prevData => ({ ...prevData, type: value }))
                setStep('project.5')
              }} />
              <Picker.Choice label="Rénovation" value="renovation" onPick={(value) => {
                setData(prevData => ({ ...prevData, type: value }))
                setStep('project.5')
              }} />
              <Picker.Choice label="Solaire" value="solaire" onPick={(value) => {
                setData(prevData => ({ ...prevData, type: value }))
                setStep('project.5')
              }} />
              <Picker.Choice label="Rénovation globale" value="globale" onPick={(value) => {
                setData(prevData => ({ ...prevData, type: value }))
                setStep('end')
              }} />
            </Picker>
          </div>
        }
        { step === 'project.5' &&
          <>
            { data.type === 'isolation' &&
              <div className="step">
                Quel type de travaux envisagez-vous ? 

                <Picker>
                  <Picker.Choice label="Isolation des combles" value="Isolation des combles" onPick={(value) => {
                    setData(prevData => ({ ...prevData, work: value }))
                    setStep('project.6')
                  }} />
                  <Picker.Choice label="Isolation des murs" value="Isolation des murs" onPick={(value) => {
                    setData(prevData => ({ ...prevData, work: value }))
                    setStep('project.6')
                  }} />
                  <Picker.Choice label="Isolation des planchers & sols" value="Isolation des planchers & sols" onPick={(value) => {
                    setData(prevData => ({ ...prevData, work: value }))
                    setStep('project.6')
                  }} />
                  <Picker.Choice label="Autres travaux" value="Autres travaux" onPick={(value) => {
                    setData(prevData => ({ ...prevData, work: value }))
                    setStep('project.6')
                  }} />
                </Picker>
              </div>
            }
            { data.type === 'chauffage' &&
              <div className="step">
                Quel type de travaux envisagez-vous ? 

                <Picker>
                  <Picker.Choice label="Pompes à chaleur" value="Pompes à chaleur" onPick={(value) => {
                    setData(prevData => ({ ...prevData, work: value }))
                    setStep('project.6')
                  }} />
                  <Picker.Choice label="Chaudières" value="Chaudières" onPick={(value) => {
                    setData(prevData => ({ ...prevData, work: value }))
                    setStep('project.6')
                  }} />
                  <Picker.Choice label="Poêles (buches ou granulés)" value="Poêles (buches ou granulés)" onPick={(value) => {
                    setData(prevData => ({ ...prevData, work: value }))
                    setStep('project.6')
                  }} />
                  <Picker.Choice label="Autres systèmes" value="Autres systèmes" onPick={(value) => {
                    setData(prevData => ({ ...prevData, work: value }))
                    setStep('project.6')
                  }} />
                </Picker>
              </div>
            }
            { data.type === 'solaire' &&
              <div className="step">
                Quel type de travaux envisagez-vous ? 

                <Picker>
                  <Picker.Choice label="Production d’électricité (autoconsommation ou revente)" value="Production d’électricité (autoconsommation ou revente)" onPick={(value) => {
                    setData(prevData => ({ ...prevData, work: value }))
                    setStep('end')
                  }} />
                  <Picker.Choice label="Chauffe-eau solaire individuel (CESI)" value="Chauffe-eau solaire individuel (CESI)" onPick={(value) => {
                    setData(prevData => ({ ...prevData, work: value }))
                    setStep('end')
                  }} />
                  <Picker.Choice label="Chauffage et eau chaude solaire (SSC)" value="Chauffage et eau chaude solaire (SSC)" onPick={(value) => {
                    setData(prevData => ({ ...prevData, work: value }))
                    setStep('end')
                  }} />
                  <Picker.Choice label="Kits solaires pour sites isolés / dépendances" value="Kits solaires pour sites isolés / dépendances" onPick={(value) => {
                    setData(prevData => ({ ...prevData, work: value }))
                    setStep('end')
                  }} />
                  <Picker.Choice label="Stockage d’énergie solaire (batterie lithium)" value="Stockage d’énergie solaire (batterie lithium)" onPick={(value) => {
                    setData(prevData => ({ ...prevData, work: value }))
                    setStep('end')
                  }} />
                  <Picker.Choice label="Optimisation photovoltaïque" value="Optimisation photovoltaïque" onPick={(value) => {
                    setData(prevData => ({ ...prevData, work: value }))
                    setStep('end')
                  }} />
                  <Picker.Choice label="Maintenance & nettoyage des panneaux" value="Maintenance & nettoyage des panneaux" onPick={(value) => {
                    setData(prevData => ({ ...prevData, work: value }))
                    setStep('end')
                  }} />
                </Picker>
              </div>
            }
          </>
        }
        { step === 'project.6' &&
          <>
            { data.type === 'isolation' && data.work === 'Isolation des combles' &&
              <div className="step">
                Quel type de travaux envisagez-vous ? 

                <Picker>
                  <Picker.Choice label="Isolation des combles perdus" value="Isolation des combles perdus" onPick={(value) => {
                    setData(prevData => ({ ...prevData, subWork: value }))
                    setStep('end')
                  }} />
                  <Picker.Choice label="Isolation des combles aménageables" value="Isolation des combles aménageables" onPick={(value) => {
                    setData(prevData => ({ ...prevData, subWork: value }))
                    setStep('end')
                  }} />
                  <Picker.Choice label="Isolation toiture terrasse" value="Isolation toiture terrasse" onPick={(value) => {
                    setData(prevData => ({ ...prevData, subWork: value }))
                    setStep('end')
                  }} />
                </Picker>
              </div>
            }
            { data.type === 'isolation' && data.work === 'Isolation des murs' &&
              <div className="step">
                Quel type de travaux envisagez-vous ? 

                <Picker>
                  <Picker.Choice label="Isolation thermique par l’extérieur (ITE)" value="Isolation thermique par l’extérieur (ITE)" onPick={(value) => {
                    setData(prevData => ({ ...prevData, subWork: value }))
                    setStep('end')
                  }} />
                  <Picker.Choice label="Isolation intérieure des murs" value="Isolation intérieure des murs" onPick={(value) => {
                    setData(prevData => ({ ...prevData, subWork: value }))
                    setStep('end')
                  }} />
                </Picker>
              </div>
            }
            { data.type === 'isolation' && data.work === 'Isolation des planchers & sols' &&
              <div className="step">
                Quel type de travaux envisagez-vous ? 

                <Picker>
                  <Picker.Choice label="Isolation des planchers bas" value="Isolation des planchers bas" onPick={(value) => {
                    setData(prevData => ({ ...prevData, subWork: value }))
                    setStep('end')
                  }} />
                  <Picker.Choice label="Isolation des sols et dalle béton" value="Isolation des sols et dalle béton" onPick={(value) => {
                    setData(prevData => ({ ...prevData, subWork: value }))
                    setStep('end')
                  }} />
                </Picker>
              </div>
            }
            { data.type === 'isolation' && data.work === 'Autres travaux' &&
              <div className="step">
                Quel type de travaux envisagez-vous ? 

                <Picker>
                  <Picker.Choice label="Remplacement fenêtres isolantes (double/triple vitrage)" value="Remplacement fenêtres isolantes (double/triple vitrage)" onPick={(value) => {
                    setData(prevData => ({ ...prevData, subWork: value }))
                    setStep('end')
                  }} />
                  <Picker.Choice label="Ventilation mécanique contrôlée (VMC) double flux" value="Ventilation mécanique contrôlée (VMC) double flux" onPick={(value) => {
                    setData(prevData => ({ ...prevData, subWork: value }))
                    setStep('end')
                  }} />
                  <Picker.Choice label="Portes d’entrée isolantes thermiques" value="Portes d’entrée isolantes thermiques" onPick={(value) => {
                    setData(prevData => ({ ...prevData, subWork: value }))
                    setStep('end')
                  }} />
                  <Picker.Choice label="Traitement des ponts thermiques" value="Traitement des ponts thermiques" onPick={(value) => {
                    setData(prevData => ({ ...prevData, subWork: value }))
                    setStep('end')
                  }} />
                </Picker>
              </div>
            }

            { data.type === 'chauffage' && data.work === 'Pompes à chaleur' &&
              <div className="step">
                Quel type de travaux envisagez-vous ? 

                <Picker>
                  <Picker.Choice label="Pompe à chaleur air/air" value="Pompe à chaleur air/air" onPick={(value) => {
                    setData(prevData => ({ ...prevData, subWork: value }))
                    setStep('end')
                  }} />
                  <Picker.Choice label="Pompe à chaleur air/eau" value="Pompe à chaleur air/eau" onPick={(value) => {
                    setData(prevData => ({ ...prevData, subWork: value }))
                    setStep('end')
                  }} />
                  <Picker.Choice label="Pompe à chaleur géothermique" value="Pompe à chaleur géothermique" onPick={(value) => {
                    setData(prevData => ({ ...prevData, subWork: value }))
                    setStep('end')
                  }} />
                  <Picker.Choice label="PAC hybride avec chaudière en relève" value="PAC hybride avec chaudière en relève" onPick={(value) => {
                    setData(prevData => ({ ...prevData, subWork: value }))
                    setStep('end')
                  }} />
                </Picker>
              </div>
            }
            { data.type === 'chauffage' && data.work === 'Chaudières' &&
              <div className="step">
                Quel type de travaux envisagez-vous ? 

                <Picker>
                  <Picker.Choice label="Chaudière à condensation (gaz ou fioul)" value="Chaudière à condensation (gaz ou fioul)" onPick={(value) => {
                    setData(prevData => ({ ...prevData, subWork: value }))
                    setStep('end')
                  }} />
                  <Picker.Choice label="Chaudière à granulés bois" value="Chaudière à granulés bois" onPick={(value) => {
                    setData(prevData => ({ ...prevData, subWork: value }))
                    setStep('end')
                  }} />
                  <Picker.Choice label="Chaudière à bûches" value="Chaudière à bûches" onPick={(value) => {
                    setData(prevData => ({ ...prevData, subWork: value }))
                    setStep('end')
                  }} />
                  <Picker.Choice label="Chaudière hybride connectée" value="Chaudière hybride connectée" onPick={(value) => {
                    setData(prevData => ({ ...prevData, subWork: value }))
                    setStep('end')
                  }} />
                </Picker>
              </div>
            }
            { data.type === 'chauffage' && data.work === 'Poêles (buches ou granulés)' &&
              <div className="step">
                Quel type de travaux envisagez-vous ? 

                <Picker>
                  <Picker.Choice label="Poêle à granulés programmable" value="Poêle à granulés programmable" onPick={(value) => {
                    setData(prevData => ({ ...prevData, subWork: value }))
                    setStep('end')
                  }} />
                  <Picker.Choice label="Poêle à bûches à haut rendement" value="Poêle à bûches à haut rendement" onPick={(value) => {
                    setData(prevData => ({ ...prevData, subWork: value }))
                    setStep('end')
                  }} />
                </Picker>
              </div>
            }
            { data.type === 'chauffage' && data.work === 'Autres systèmes' &&
              <div className="step">
                Quel type de travaux envisagez-vous ? 

                <Picker>
                  <Picker.Choice label="Insert de cheminée performant" value="Insert de cheminée performant" onPick={(value) => {
                    setData(prevData => ({ ...prevData, subWork: value }))
                    setStep('end')
                  }} />
                  <Picker.Choice label="Chauffe-eau thermodynamique" value="Chauffe-eau thermodynamique" onPick={(value) => {
                    setData(prevData => ({ ...prevData, subWork: value }))
                    setStep('end')
                  }} />
                  <Picker.Choice label="Radiateurs électriques à inertie" value="Radiateurs électriques à inertie" onPick={(value) => {
                    setData(prevData => ({ ...prevData, subWork: value }))
                    setStep('end')
                  }} />
                  <Picker.Choice label="Plancher chauffant hydraulique ou électrique" value="Plancher chauffant hydraulique ou électrique" onPick={(value) => {
                    setData(prevData => ({ ...prevData, subWork: value }))
                    setStep('end')
                  }} />
                </Picker>
              </div>
            }
          </>
        }
        { step === 'end' &&
          <div className="step" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            Un professionnel vous contactera rapidement
          </div>
        }
      </main>
      <footer>
        &copy; 2025 Rénovation énergetique
      </footer>
    </div>
  )
}