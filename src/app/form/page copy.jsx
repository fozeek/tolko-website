'use client';

import Link from 'next/link';
import './page.scss'
import { Sour_Gummy } from "next/font/google";
// import { Picker } from '@/components/form/picker';
import { useState } from 'react';
import createLead from '../actions/createLead';
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
  const [step, setStep] = useState('work');
  const [isLoading, setIsLoading] = useState(false);
  const [saved, setSaved] = useState(false);

  async function create() {
    setIsLoading(true);
    await createLead(data);
    setIsLoading(true);
    setSaved(true);
  }

  if (saved) {
    return (
      <div className="form">
        <header>
          <Link href={'/'} className={`logo ${sourGummy.className}`}>
            Tolko
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
            Tolko
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
        <Link href={'/'} className={`logo ${sourGummy.className}`}>
          Tolko
        </Link>
      </header>
      <main>
        <div className="progress">
          <div style={{ width: `${{ home: 20, hot: 40, wall: 60, water: 80, user: 100 }[step]}%` }}></div>
        </div>
        { step === 'work' &&
          <div className="step">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique, beatae accusantium aliquid fugit delectus doloribus inventore! Sapiente necessitatibus sit, nisi dicta quos magnam, inventore ut nesciunt repellat molestiae modi a!

            <Picker>
              <Picker.Choice label="Isolation" value="Isolation" onPick={(value) => {
                setData(prevData => ({ ...prevData, type: value }))
                setStep('home')
              }} />
              <Picker.Choice label="Renovation" value="Renovation" onPick={(value) => {
                setData(prevData => ({ ...prevData, type: value }))
                setStep('home')
              }} />
              <Picker.Choice label="Solaire" value="Solaire" onPick={(value) => {
                setData(prevData => ({ ...prevData, type: value }))
                setStep('home')
              }} />
              <Picker.Choice label="Connaître mes aides" value="Connaître mes aides" onPick={(value) => {
                setData(prevData => ({ ...prevData, type: value }))
                setStep('home')
              }} />
            </Picker>
          </div>
        }
        { step === 'home' &&
          <div className="step" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique, beatae accusantium aliquid fugit delectus doloribus inventore! Sapiente necessitatibus sit, nisi dicta quos magnam, inventore ut nesciunt repellat molestiae modi a!

            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <label htmlFor="" style={{ fontWeight: 700 }}>Superficie de la maison</label>
              <input value={data.house_area} onChange={event => setData(prevData => ({ ...prevData, house_area: event.target.value }))} type="number" style={{ width: '100%', padding: '16px', fontSize: '1em', borderRadius: '8px', background: 'white', border: '1px solid #eaeaea' }} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <label htmlFor="" style={{ fontWeight: 700 }}>Hauteur de la maison</label>
              <input value={data.house_height} onChange={event => setData(prevData => ({ ...prevData, house_height: event.target.value }))} type="number" style={{ width: '100%', padding: '16px', fontSize: '1em', borderRadius: '8px', background: 'white', border: '1px solid #eaeaea' }} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <label htmlFor="" style={{ fontWeight: 700 }}>Adresse</label>
              <input value={data.house_address} onChange={event => setData(prevData => ({ ...prevData, house_address: event.target.value }))} type="text" style={{ width: '100%', padding: '16px', fontSize: '1em', borderRadius: '8px', background: 'white', border: '1px solid #eaeaea' }} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <label htmlFor="" style={{ fontWeight: 700 }}>Type d'habitation</label>
              <input value={data.house_type} onChange={event => setData(prevData => ({ ...prevData, house_type: event.target.value }))} type="text" style={{ width: '100%', padding: '16px', fontSize: '1em', borderRadius: '8px', background: 'white', border: '1px solid #eaeaea' }} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <label htmlFor="" style={{ fontWeight: 700 }}>Année de construction</label>
              <input value={data.house_year} onChange={event => setData(prevData => ({ ...prevData, house_year: event.target.value }))} type="number" style={{ width: '100%', padding: '16px', fontSize: '1em', borderRadius: '8px', background: 'white', border: '1px solid #eaeaea' }} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <label htmlFor="" style={{ fontWeight: 700 }}>Nombre de pièces</label>
              <input value={data.house_floors_count} onChange={event => setData(prevData => ({ ...prevData, house_floors_count: event.target.value }))} type="number" style={{ width: '100%', padding: '16px', fontSize: '1em', borderRadius: '8px', background: 'white', border: '1px solid #eaeaea' }} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <label htmlFor="" style={{ fontWeight: 700 }}>Nombre d’étages</label>
              <input value={data.house_rooms_count} onChange={event => setData(prevData => ({ ...prevData, house_rooms_count: event.target.value }))} type="number" style={{ width: '100%', padding: '16px', fontSize: '1em', borderRadius: '8px', background: 'white', border: '1px solid #eaeaea' }} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <label htmlFor="" style={{ fontWeight: 700 }}>Nombre de salles de bain</label>
              <input value={data.house_baths_count} onChange={event => setData(prevData => ({ ...prevData, house_baths_count: event.target.value }))} type="number" style={{ width: '100%', padding: '16px', fontSize: '1em', borderRadius: '8px', background: 'white', border: '1px solid #eaeaea' }} />
            </div>

            <button onClick={() => {
              setStep('hot')
            }}>Suivant</button>
          </div>
        }
        { step === 'hot' &&
          <div className="step" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique, beatae accusantium aliquid fugit delectus doloribus inventore! Sapiente necessitatibus sit, nisi dicta quos magnam, inventore ut nesciunt repellat molestiae modi a!

            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <label htmlFor="" style={{ fontWeight: 700 }}>Energie de chauffage</label>
              <input value={data.heating_energy} onChange={event => setData(prevData => ({ ...prevData, heating_energy: event.target.value }))} type="text" style={{ width: '100%', padding: '16px', fontSize: '1em', borderRadius: '8px', background: 'white', border: '1px solid #eaeaea' }} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <label htmlFor="" style={{ fontWeight: 700 }}>Système de chauffage</label>
              <input value={data.heating_system} onChange={event => setData(prevData => ({ ...prevData, heating_system: event.target.value }))} type="text" style={{ width: '100%', padding: '16px', fontSize: '1em', borderRadius: '8px', background: 'white', border: '1px solid #eaeaea' }} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <label htmlFor="" style={{ fontWeight: 700 }}>Age du système de chauffage</label>
              <input value={data.heating_year} onChange={event => setData(prevData => ({ ...prevData, heating_year: event.target.value }))} type="text" style={{ width: '100%', padding: '16px', fontSize: '1em', borderRadius: '8px', background: 'white', border: '1px solid #eaeaea' }} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <label htmlFor="" style={{ fontWeight: 700 }}>Nombre de radiateurs</label>
              <input value={data.heating_radiators_count} onChange={event => setData(prevData => ({ ...prevData, heating_radiators_count: event.target.value }))} type="number" style={{ width: '100%', padding: '16px', fontSize: '1em', borderRadius: '8px', background: 'white', border: '1px solid #eaeaea' }} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <label htmlFor="" style={{ fontWeight: 700 }}>Type de radiateurs</label>
              <input value={data.heating_radiators_type} onChange={event => setData(prevData => ({ ...prevData, heating_radiators_type: event.target.value }))} type="text" style={{ width: '100%', padding: '16px', fontSize: '1em', borderRadius: '8px', background: 'white', border: '1px solid #eaeaea' }} />
            </div>

            <button onClick={() => {
              setStep('wall')
            }}>Suivant</button>
          </div>
        }
        { step === 'wall' &&
          <div className="step" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            Tes murs sont secs ?

            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <label htmlFor="" style={{ fontWeight: 700 }}>Type d’isolation</label>
              <input value={data.insulation_type} onChange={event => setData(prevData => ({ ...prevData, insulation_type: event.target.value }))} type="text" style={{ width: '100%', padding: '16px', fontSize: '1em', borderRadius: '8px', background: 'white', border: '1px solid #eaeaea' }} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <label htmlFor="" style={{ fontWeight: 700 }}>Etat de l’isolation des murs (intérieur)</label>
              <input value={data.insulation_interior_condition} onChange={event => setData(prevData => ({ ...prevData, insulation_interior_condition: event.target.value }))} type="text" style={{ width: '100%', padding: '16px', fontSize: '1em', borderRadius: '8px', background: 'white', border: '1px solid #eaeaea' }} />
            </div>

            <button onClick={() => {
              setStep('water')
            }}>Suivant</button>
          </div>
        }
        { step === 'water' &&
          <div className="step" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            Tu te douches à l'eau froide ?

            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <label htmlFor="" style={{ fontWeight: 700 }}>Appareil de production d’eau-chaude</label>
              <input value={data.hot_water_production_device} onChange={event => setData(prevData => ({ ...prevData, hot_water_production_device: event.target.value }))} type="text" style={{ width: '100%', padding: '16px', fontSize: '1em', borderRadius: '8px', background: 'white', border: '1px solid #eaeaea' }} />
            </div>

            <button onClick={() => {
              setStep('user')
            }}>Suivant</button>
          </div>
        }
        { step === 'user' &&
          <div className="step" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            Dernières finso importantes !

            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <label htmlFor="" style={{ fontWeight: 700 }}>Prénom</label>
              <input value={data.firstname} onChange={event => setData(prevData => ({ ...prevData, firstname: event.target.value }))} type="text" style={{ width: '100%', padding: '16px', fontSize: '1em', borderRadius: '8px', background: 'white', border: '1px solid #eaeaea' }} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <label htmlFor="" style={{ fontWeight: 700 }}>Nom</label>
              <input value={data.lastname} onChange={event => setData(prevData => ({ ...prevData, lastname: event.target.value }))} type="text" style={{ width: '100%', padding: '16px', fontSize: '1em', borderRadius: '8px', background: 'white', border: '1px solid #eaeaea' }} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <label htmlFor="" style={{ fontWeight: 700 }}>Email</label>
              <input value={data.email} type="email" required onChange={event => setData(prevData => ({ ...prevData, email: event.target.value }))} style={{ width: '100%', padding: '16px', fontSize: '1em', borderRadius: '8px', background: 'white', border: '1px solid #eaeaea' }} />
            </div>

            <form action={create}>
              <button>Envoyer</button>
            </form>
          </div>
        }
      </main>
      <footer>
        &copy; 2025 Tolko
      </footer>
    </div>
  )
}