import supabase from "./supabase";

export async function getCabins() {
  let { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("Cabins not found");
  }

  return data;
}

export async function deleteCabin(id) {
  let { data, error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    // console.log("Error on delete", error);
    throw new Error(error.message);
  }

  return data;
}

// add a new cabin
export async function addCabin(information) {
  let { data, error } = await supabase.from("cabins").insert([information]);

  if (error) {
    throw new Error("Cannot add the new cabin");
  }

  return data;
}
