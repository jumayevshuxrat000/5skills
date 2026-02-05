import { useMemo } from "react";
import { authStorage } from "../../services/auth.storage";
import { User, Star, BookOpen, Medal, LogOut, Edit3, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Glass tokens (Dashboard bilan bir xil vibe)
const glassCard =
  "rounded-2xl border backdrop-blur-2xl " +
  "bg-white/85 border-slate-200/60 " +
  "shadow-[0_18px_50px_rgba(2,6,23,0.08)] " +
  "dark:bg-white/[0.06] dark:border-white/10 dark:shadow-[0_18px_60px_rgba(0,0,0,0.55)]";

const glassInner =
  "rounded-xl border backdrop-blur-2xl " +
  "bg-white/75 border-slate-200/55 " +
  "dark:bg-white/[0.05] dark:border-white/10";

export default function Profile() {
  const navigate = useNavigate();
  const user = authStorage.getUser();

  const profile = useMemo(() => {
    return {
      name: user?.name || "John Doe",
      email: user?.email || "you@email.com",
      totalStars: 245,
      testsTaken: 28,
      avgBand: 7.5,
      progress: [
        { label: "Grammar Proficiency", value: 85, color: "bg-blue-500" },
        { label: "Reading Comprehension", value: 78, color: "bg-emerald-500" },
        { label: "Writing Skills", value: 72, color: "bg-violet-500" },
      ],
      achievements: [
        { title: "First Test", subtitle: "Unlocked" },
        { title: "Week Streak", subtitle: "Unlocked" },
        { title: "Perfect Score", subtitle: "Unlocked" },
      ],
      memberSince: "January 2026",
      status: "Active",
      streak: "7 days 🔥",
    };
  }, [user]);

  const logout = () => {
    authStorage.logout();
    navigate("/login", { replace: true });
  };

  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-0 -z-10 hidden dark:block">
        <div className="absolute -left-40 -top-32 h-[520px] w-[520px] rounded-full bg-blue-600/20 blur-[140px]" />
        <div className="absolute -right-48 top-10 h-[520px] w-[520px] rounded-full bg-indigo-500/15 blur-[160px]" />
        <div className="absolute left-1/3 -bottom-40 h-[560px] w-[560px] rounded-full bg-sky-500/10 blur-[180px]" />
      </div>

      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-5">
          <h1 className="text-3xl sm:text-4xl font-semibold text-slate-900 dark:text-white">
            My Profile
          </h1>
          <p className="text-slate-500 dark:text-white/60">
            Manage your account and view your progress
          </p>
        </div>

        {/* Layout */}
        <div className="mt-8 grid grid-cols-1 gap-14 lg:grid-cols-12">
          {/* LEFT CARD */}
          <div className={`lg:col-span-4 ${glassCard} p-6`}>
            <div className="flex flex-col gap-5 items-center text-center">
              {/* Avatar circle */}
              <div className="relative">
                <div className="h-24 w-24 rounded-full grid place-items-center bg-blue-600 text-white shadow-lg">
                  <User className="h-10 w-10" />
                </div>
                {/* tiny shine */}
                <div className="pointer-events-none absolute -left-6 -top-6 h-16 w-16 rounded-full bg-white/20 blur-2xl hidden dark:block" />
              </div>

              <h2 className="mt-4 text-xl font-semibold text-slate-900 dark:text-white">
                {profile.name}
              </h2>

              <button
                className="mt-2 inline-flex items-center gap-2 text-sm
                           text-slate-600 hover:text-slate-900
                           dark:text-white/60 dark:hover:text-white transition text-white!"
                onClick={() => {}}
              >
                <Edit3 className="h-4 w-4" color="white" />
                Edit Name
              </button>

              <div className="mt-3 flex items-center gap-2 text-sm text-slate-500 dark:text-white/60">
                <Mail className="h-4 w-4" />
                <span>{profile.email}</span>
              </div>

              <button
                onClick={logout}
                className={`mt-6 w-full ${glassInner} py-3 flex items-center justify-center gap-2
                            text-red-600 dark:text-red-300 hover:bg-red-50/40 dark:hover:bg-white/10 transition`}
              >
                <LogOut className="h-4 w-4" />
                Logout
              </button>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="lg:col-span-8 space-y-6">
            {/* Top Stats */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
              <MiniStat
                icon={<Star className="h-5 w-5 text-amber-400" />}
                value={profile.totalStars}
                label="Total Stars"
              />
              <MiniStat
                icon={<BookOpen className="h-5 w-5 text-blue-400" />}
                value={profile.testsTaken}
                label="Tests Taken"
              />
              <MiniStat
                icon={<Medal className="h-5 w-5 text-emerald-400" />}
                value={profile.avgBand}
                label="Average Band"
              />
            </div>

            {/* Progress Summary */}
            <div className={`${glassCard} p-6`}>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                Progress Summary
              </h3>

              <div className="mt-5 space-y-5">
                {profile.progress.map((p) => (
                  <div key={p.label}>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-600 dark:text-white/70">
                        {p.label}
                      </span>
                      <span className="font-semibold text-slate-900 dark:text-white">
                        {p.value}%
                      </span>
                    </div>

                    <div className={`mt-2 ${glassInner} h-3 overflow-hidden`}>
                      <div
                        className={`h-full ${p.color}`}
                        style={{ width: `${p.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className={`${glassCard} p-6`}>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                Achievements
              </h3>

              <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {profile.achievements.map((a) => (
                  <div
                    key={a.title}
                    className={`${glassInner} p-4 flex items-center gap-3`}
                  >
                    <div className="h-9 w-9 rounded-full grid place-items-center bg-amber-500 text-white">
                      <Medal className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 dark:text-white">
                        {a.title}
                      </p>
                      <p className="text-xs text-slate-500 dark:text-white/60">
                        {a.subtitle}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Account Information */}
            <div className={`${glassCard} p-6`}>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                Account Information
              </h3>

              <div className="mt-5 divide-y divide-slate-200/60 dark:divide-white/10">
                <InfoRow label="Member Since" value={profile.memberSince} />
                <InfoRow
                  label="Account Status"
                  value={
                    <span className="text-emerald-600 dark:text-emerald-300 font-semibold">
                      {profile.status}
                    </span>
                  }
                />
                <InfoRow label="Study Streak" value={profile.streak} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* mini stat card (top right) */
function MiniStat({ icon, value, label }) {
  return (
    <div className={`${glassCard} p-5`}>
      <div className="flex items-start justify-between">
        <div
          className={`${glassInner} h-10 w-10 rounded-2xl grid place-items-center`}
        >
          {icon}
        </div>
      </div>

      <div className="mt-4">
        <p className="text-2xl font-semibold text-slate-900 dark:text-white">
          {value}
        </p>
        <p className="text-xs text-slate-500 dark:text-white/60">{label}</p>
      </div>
    </div>
  );
}

function InfoRow({ label, value }) {
  return (
    <div className="py-4 flex items-center justify-between gap-4">
      <span className="text-sm text-slate-600 dark:text-white/60">{label}</span>
      <span className="text-sm text-slate-900 dark:text-white">{value}</span>
    </div>
  );
}
