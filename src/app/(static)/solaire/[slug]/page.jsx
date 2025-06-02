import { createClient } from "../../../../utils/supabase/server";
import PageForm from "../../../../components/pageForm";

async function fetchPage(slug) {  
  const supabase = await createClient();

  const query = supabase
    .from('pages')
    .select(`
      *
    `)
    // @todo pagination
    .eq('slug', slug).maybeSingle();

  const { data, error } = await query;

  console.log('ERROR', error);

  return data || [];
}

export default async function IsolationFenetre({ params }) {
  const { slug } = await params;
  const page = await fetchPage(`solaire/${slug}`);
  
  return (
    <PageForm page={page} />
  )
}