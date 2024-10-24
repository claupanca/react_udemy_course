import supabase, { SUPABASE_URL } from "./supabase";

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

// add a new cabin / Update an existing cabin
export async function addEditCabin(information, editID) {
  // console.log("information", information);
  // we create a UNIQUE NAME for the image
  const imageName = `${Math.random()}-${information.image.name}`.replace(
    "/",
    ""
  );

  const imagePath = `${SUPABASE_URL}/storage/v1/object/public/cabin-images/${imageName}`;

  //https://umlhmirnlpnzhcqjsrbz.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg

  // We check for the editID. If present, we edit, if not, we create
  if (editID) {
    let { data, error } = await supabase
      .from("cabins")
      .update({ ...information, image: imagePath })
      .eq("id", editID);

    if (error) {
      throw new Error("Cannot edit the cabin");
    }

    return data;
  } else {
    // 1. Create Cabin
    let { data, error } = await supabase
      .from("cabins")
      .insert([{ ...information, image: imagePath }]);

    if (error) {
      throw new Error("Cannot add the new cabin");
    }

    // 2. Upload the image
    const { storageError } = await supabase.storage
      .from("cabin-images")
      .upload(imageName, information.image);

    // 3. Delete the cabin if there was an error uploading the image
    if (storageError) {
      console.log("upload error - delete cabin");
      deleteCabin(information.id);
    }

    return data;
  }
}
