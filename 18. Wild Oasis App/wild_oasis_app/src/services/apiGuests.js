import supabase from "./supabase";

export async function getGuests() {
  const { data, error } = await supabase.from("guests").select("*");

  if (error) throw new Error("Failed to fetch users");

  return data;
}
