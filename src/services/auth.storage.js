const KEY = "auth_user";

export const authStorage = {
  isAuthed() {
    return Boolean(localStorage.getItem(KEY));
  },
  getUser() {
    const raw = localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : null;
  },
  setUser(user) {
    localStorage.setItem(KEY, JSON.stringify(user));
  },
  logout() {
    localStorage.removeItem(KEY);
  },
};
