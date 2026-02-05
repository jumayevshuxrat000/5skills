console.log("API BASE URL:", import.meta.env.VITE_API_BASE_URL);

export const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL || "").replace(
  /\/$/,
  "",
);

export async function apiFetch(path, options = {}) {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  const url = `${API_BASE_URL}${cleanPath}`;

  const res = await fetch(url, {
    headers: { "Content-Type": "application/json", ...(options.headers || {}) },
    ...options,
  });

  const text = await res.text().catch(() => "");

  if (!res.ok) {
    console.error("API ERROR:", res.status, url, text);
    throw new Error(text || `Request failed: ${res.status}`);
  }

  return text ? JSON.parse(text) : null;
}
