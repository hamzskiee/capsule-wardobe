export const CONFIG = {
  SB_URL: "https://ccdyhiayttnxjxfdylxj.supabase.co", // Ganti dengan URL Supabase kamu
  SB_KEY: "sb_publishable_r1IkNOSObq2i68uoyzljuA_H6AvBjZg", // Ganti dengan Anon Key kamu
  PROJECT_NAME: "capsule",
  OWNER: "salmadwptr-bit",
};

// Inisialisasi client Supabase
export const supabase = window.supabase.createClient(CONFIG.SB_URL, CONFIG.SB_KEY);