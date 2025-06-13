import { createClient } from '@/utils/supabase/server';

export default async function KadarGizi() {
  const supabase = await createClient();
  const { data: Kadar_Gizi } = await supabase.from('Kadar_Gizi').select('id_makanan');
  return <h1>{JSON.stringify(Kadar_Gizi, null,2 )}</h1>
}