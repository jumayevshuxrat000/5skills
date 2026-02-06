import { apiFetch } from "./api";

const ENDPOINT = "/user";

async function fetchAllUsersSafe() {
  const list = await apiFetch(ENDPOINT); 
  return Array.isArray(list) ? list : [];
}

async function findByEmail(email) {
  const list = await fetchAllUsersSafe();
  const target = (email || "").toLowerCase().trim();
  return (
    list.find((u) => (u?.email || "").toLowerCase().trim() === target) || null
  );
}

export async function registerUser({ name, email, password }) {
  const existing = await findByEmail(email);
  if (existing) throw new Error("This email is already registered.");

  // create
  return apiFetch(ENDPOINT, {
    method: "POST",
    body: JSON.stringify({ name, email, password }),      
  });
}

export async function loginUser({ email, password }) {
  const user = await findByEmail(email);

  if (!user) throw new Error("User not found.");
  if (user.password !== password) throw new Error("Wrong password.");

  return user;
}

export async function validateSession(localUser) {
  if (!localUser?.id) throw new Error("No session");
  const fresh = await apiFetch(`${ENDPOINT}/${localUser.id}`);
  if (!fresh?.id) throw new Error("Session invalid");
  return fresh;
}
