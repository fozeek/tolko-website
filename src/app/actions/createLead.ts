'use server';

import { createClient } from "../../utils/supabase/server";

export default async function createLead(data : any) {
  const supabase = await createClient();

  const { data : dataa, error } = await supabase.from("leads").insert({
    ...data,
    partner_id: null,
    status: 'pending',
    origin: 'https://tolko-website.vercel.app/form'
  }).select();


  if (error) {
    console.log('ERROR', error);
    return { send: false };
  }
  console.log('OGOGOGOG');

  return { send: true };
}