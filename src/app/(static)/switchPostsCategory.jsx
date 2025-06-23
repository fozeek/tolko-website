'use client';

import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export default function SwitchPostsCategory() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = (term) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('category', term);
    } else {
      params.delete('category');
    }
    replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'row', gap: '8px' }}>
      <div onClick={() => handleSearch(null)} style={{ borderRadius: '8px', background: searchParams.get('category') === null ? '#ebe1ce' : '#f6f2eb', color: searchParams.get('category') === null ? 'black' : 'black', padding: '16px', cursor: 'pointer' }}>
        Tous
      </div>
      <div onClick={() => handleSearch('isolation')} style={{ borderRadius: '8px', background: searchParams.get('category') === 'isolation' ? '#ebe1ce' : '#f6f2eb', color: searchParams.get('category') === 'isolation' ? 'black' : 'black', padding: '16px', cursor: 'pointer' }}>
        Isolation
      </div>
      <div onClick={() => handleSearch('chauffage')} style={{ borderRadius: '8px', background: searchParams.get('category') === 'chauffage' ? '#ebe1ce' : '#f6f2eb', color: searchParams.get('category') === 'chauffage' ? 'black' : 'black', padding: '16px', cursor: 'pointer' }}>
        Chauffage
      </div>
      <div onClick={() => handleSearch('solaire')} style={{ borderRadius: '8px', background: searchParams.get('category') === 'solaire' ? '#ebe1ce' : '#f6f2eb', color: searchParams.get('category') === 'solaire' ? 'black' : 'black', padding: '16px', cursor: 'pointer' }}>
        Solaire
      </div>
      <div onClick={() => handleSearch('globale')} style={{ borderRadius: '8px', background: searchParams.get('category') === 'globale' ? '#ebe1ce' : '#f6f2eb', color: searchParams.get('category') === 'globale' ? 'black' : 'black', padding: '16px', cursor: 'pointer' }}>
        Rénovation Globale
      </div>
    </div>
  )
}