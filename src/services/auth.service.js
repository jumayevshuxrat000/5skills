import { apiFetch } from "./api";

const ENDPOINT = "/user";

/**
 * REGISTER
 * - email mavjudligini tekshiradi
 * - yangi user yaratadi
 */
export async function registerUser({ name, email, password }) {
  const existing = await apiFetch(
    `${ENDPOINT}?email=${encodeURIComponent(email)}`,
  );

  if (Array.isArray(existing) && existing.length > 0) {
    throw new Error("This email is already registered.");
  }

  return apiFetch(ENDPOINT, {
    method: "POST",
    body: JSON.stringify({ name, email, password }),
  });
}

/**
 * LOGIN
 * - email orqali user topadi
 * - password tekshiradi
 */
export async function loginUser({ email, password }) {
  const found = await apiFetch(
    `${ENDPOINT}?email=${encodeURIComponent(email)}`,
  );

  const user = Array.isArray(found) ? found[0] : null;

  if (!user) throw new Error("User not found.");
  if (user.password !== password) throw new Error("Wrong password.");

  return user;
}

export async function getUserById(id) {
  if (!id) throw new Error("User ID is required.");
  return apiFetch(`${ENDPOINT}/${id}`);
}

export async function validateSession(localUser) {
  if (!localUser?.id) {
    throw new Error("No local user session.");
  }

  return getUserById(localUser.id);
}
