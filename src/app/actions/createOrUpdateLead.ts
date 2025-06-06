'use server';

import { createClient } from "../../utils/supabase/server";

export default async function createOrUpdateLead(data : any, step: string) {
  const supabase = await createClient();
  if (data.id) {
    const { data : leads, error } = await supabase.from("leads").update({
      ...data,
      partner_id: null,
      status: step === 'end' ? 'finished' : 'pending',
      origin: 'https://tolko-website.vercel.app/form'
    })
    .eq('id', data.id)
    .select();
  
    if (error) {
      console.log('ERROR', error);
      return { send: false };
    }

    return { leadId: leads[0]?.id };
  } else {
    const { data : leads, error } = await supabase.from("leads").insert({
      ...data,
      partner_id: null,
      status: 'pending',
      origin: 'https://tolko-website.vercel.app/form'
    }).select();
  
    if (error) {
      console.log('ERROR', error);
      return { send: false };
    }

    return { leadId: leads[0]?.id };
  }
}