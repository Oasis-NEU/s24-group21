import { createClient } from "@supabase/supabase-js";
const sb_url = "https://ygykbrjupcecysywcdet.supabase.co";
const sb_key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlneWticmp1cGNlY3lzeXdjZGV0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg4MTY2MzksImV4cCI6MjAyNDM5MjYzOX0.RJLZpVR_xP09NUMZWVWdxz6VlUiuwfNmAhHTEnPMXmY";
// const sb_url: string = import.meta.env.VITE_SB_URL;
// const sb_key: string = import.meta.env.VITE_SB_KEY;
export const supabase = createClient(sb_url, sb_key);