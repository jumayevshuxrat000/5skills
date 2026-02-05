import { NavLink, useNavigate } from "react-router-dom";
import { authStorage } from "../../services/auth.storage";
import Logo from "../../assets/5skilsspng.png";
import { useTheme } from "../../hooks/useTheme";

const linkBase =
  "px-3 py-2 rounded-lg font-medium transition " +
  "text-slate-600 hover:text-slate-900 hover:bg-slate-100 " +
  "dark:text-white/70 dark:hover:text-white dark:hover:bg-white/10";

const linkActive =
  "px-3 py-2 rounded-lg font-medium transition " +
  "bg-blue-600 text-white hover:bg-blue-600 hover:text-white";

export default function Navbar() {
  const navigate = useNavigate();
  const user = authStorage.getUser();
  const { theme, toggleTheme } = useTheme();

  const logout = () => {
    authStorage.logout();
    navigate("/login", { replace: true });
  };

  return (
    <header className="w-full bg-white dark:bg-[#05070F] border-b border-slate-200 dark:border-white/10">
      <div className="h-16 px-6 flex items-center justify-between">
        {/* Left: logo */}
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-xl bg-blue-600 grid place-items-center text-white font-bold overflow-hidden">
            <img src={Logo} alt="5Skills Examer Logo" className="h-8 w-8" />
          </div>

          <div className="font-semibold text-blue-600 dark:text-blue-400 text-lg">
            Examer
          </div>
        </div>

        {/* Center: nav */}
        <nav className="flex items-center gap-2">
          <NavItem to="/dashboard" label="Dashboard" />
          <NavItem to="/grammar" label="Grammar" />
          <NavItem to="/reading" label="Reading" />
          <NavItem to="/writing" label="Writing" />
          <NavItem to="/shop" label="Shop" />
          <NavItem to="/ranking" label="Ranking" />
          <NavItem to="/profile" label="Profile" />
        </nav>

        {/* Right: stars + theme + avatar + logout */}
        <div className="flex items-center gap-3">
          {/* Stars pill */}
          <div
            className="flex items-center gap-2 px-4 h-10 rounded-full
                          bg-amber-100 text-amber-800 border border-amber-200
                          dark:bg-amber-300/10 dark:text-amber-200 dark:border-amber-300/20"
          >
            <span>⭐</span>
            <span className="font-semibold">0</span>
          </div>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="h-10 w-10 rounded-full grid place-items-center transition
                       hover:bg-slate-100 dark:hover:bg-white/10
                       text-slate-700 dark:text-white"
            title="Toggle theme"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? "🌞" : "🌙"}
          </button>

          {/* Profile Avatar (theme button dan keyin) */}
          <button
            onClick={() => navigate("/profile")}
            className="h-10 w-10 rounded-full overflow-hidden transition
                       border border-slate-200 hover:ring-2 hover:ring-blue-200
                       dark:border-white/10 dark:hover:ring-blue-400/30"
            title="Profile"
          >
            <div
              className="h-full w-full grid place-items-center font-semibold
                            bg-slate-200 text-slate-600
                            dark:bg-white/10 dark:text-white"
            >
              {(user?.name?.[0] || "U").toUpperCase()}
            </div>
          </button>

          {/* Logout */}
          <button
            onClick={logout}
            className="px-3 h-10 rounded-lg transition
                       bg-slate-900 text-white hover:opacity-90
                       dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
}

function NavItem({ to, label }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? linkActive : linkBase)}
      end={to === "/dashboard"}
    >
      {label}
    </NavLink>
  );
}
