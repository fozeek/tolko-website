'use client';

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function Events() {
  const pathname = usePathname();

  useEffect(() => {
    fetch(`/api/events`, {
      method: 'POST',
      body: JSON.stringify({
        url: pathname,
      })
    })
  }, [pathname]);


  return (
    <></>
  )
}