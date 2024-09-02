import { createClient } from "@supabase/supabase-js";
import { SupaBase_Key, SupaBase_Url } from "../../config";

const SUPABASE_KEY = SupaBase_Key();
const SUPABASE_URL = SupaBase_Url();

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

export default supabase;

// // console.log("supabase", supabase);
// async function fetchData() {
//   const { data, error } = await supabase.from("bookings").select("*");

//   if (error) console.log("error", error);
//   if (data) console.log("data", data);
// }

// fetchData();
