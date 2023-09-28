import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://qzkslfclmehpocmeqrru.supabase.co'
// const supabaseKey = process.env.SUPABASE_KEY
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF6a3NsZmNsbWVocG9jbWVxcnJ1Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5NTYzMzE3NCwiZXhwIjoyMDExMjA5MTc0fQ.GX4RIaAi1eKjF8cpTxQgCpbvIWfdiEA_7bYvdxagc7w'
export const supabase = createClient(supabaseUrl, supabaseKey)