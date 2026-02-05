import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authStorage } from "../../services/auth.storage";
import { validateSession } from "../../services/auth.service";
 import DashboardSection from "./DashboardSection";

export default function Dashboard() {
  const navigate = useNavigate();
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const check = async () => {
      const localUser = authStorage.getUser();

      try {
        await validateSession(localUser);
        setChecking(false);
      } catch {
        authStorage.logout();
        navigate("/login", { replace: true });
      }
    };

    check();
  }, [navigate]);

  if (checking) {
    return (
      <div className="relative min-h-[60vh] flex items-center justify-center">
        <div className="pointer-events-none absolute inset-0 -z-10 hidden dark:block">
          <div className="absolute -left-40 -top-32 h-[520px] w-[520px] rounded-full bg-blue-600/20 blur-[140px]" />
          <div className="absolute -right-48 top-10 h-[520px] w-[520px] rounded-full bg-indigo-500/15 blur-[160px]" />
          <div className="absolute left-1/3 -bottom-40 h-[560px] w-[560px] rounded-full bg-sky-500/10 blur-[180px]" />
        </div>

        <div
          className="rounded-2xl px-6 py-4 backdrop-blur-xl
                        bg-white dark:bg-white/5
                        border border-slate-100 dark:border-white/10
                        shadow-[0_10px_25px_rgba(15,23,42,0.08)] dark:shadow-none
                        text-slate-700 dark:text-white/80"
        >
          Checking session...
        </div>
      </div>
    );
  }

  return <DashboardSection />;
}
