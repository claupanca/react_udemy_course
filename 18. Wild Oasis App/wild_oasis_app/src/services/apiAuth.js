import supabase from "./supabase";

export async function login({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

// Load the user data from the database
export async function getCurrentUser() {
  // check if there is an active session using data from local storage
  const { data: session } = await supabase.auth.getSession();
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