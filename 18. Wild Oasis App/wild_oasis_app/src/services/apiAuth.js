import { SupaBase_Url } from "../../config";
import supabase, { SUPABASE_URL } from "./supabase";

export async function signUp({ email, password, fullName }) {
  // console.log(email, password);
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName: fullName,
        avatar: "",
      },
    },
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function login({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw new Error(error.message);
  }

  // console.log("login", data);
  return data;
}

// Load the user data from the database
export async function getCurrentUser() {
  // check if there is an active session using data from local storage
  const { data: session } = await supabase.auth.getSession();
  // console.log("session", session);
  if (!session.session) return null;

  // refetch the user data from supabase
  const { data: user, error } = await supabase.auth.getUser();
  // console.log("user", user);

  if (error) {
    throw new Error(error.message);
  }

  // we return only the USER, not the whole session
  return user?.user;
}

export async function updateCurrentUser({ password, fullName, avatar }) {
  // console.log("password", password);
  // console.log("fullName", fullName);
  // console.log("avatar", avatar);

  // We are using the same Function to Update the Password OR the Name, that's why we have the 2 if's, to build the correct query depending on the OPTION
  let query = {};
  if (password) {
    query = { password };
  }

  if (fullName) {
    query = { data: { fullName } };
  }

  // 1. Update the passowd OR the name of the current user
  let { data, error } = await supabase.auth.updateUser(query);
  // console.log("data", data);

  // 3. If there is an avatar, we update the user with the Avatar Name
  // we create the image path
  if (avatar) {
    // 2. Upload the Avatar Image
    // create a unique name for the image
    const imageName = `avatar-${Math.random()}-${avatar.name}`;
    // console.log("avatar", avatar);
    let { error: storageError } = await supabase.storage
      .from("avatars")
      .upload(imageName, avatar);

    const imagePath = `${SUPABASE_URL}/storage/v1/object/public/avatars/${imageName}`;

    let { data: avatarData, error: avatarError } =
      await supabase.auth.updateUser({
        data: {
          avatar: imagePath,
        },
      });
    return avatarData;
  }

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();
  // console.log("error", error);
}
