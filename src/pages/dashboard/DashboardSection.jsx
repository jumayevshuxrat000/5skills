import { useMemo } from "react";
import { NavLink } from "react-router-dom";
import { authStorage } from "../../services/auth.storage";
import { Book, BookOpenIcon, Clock, Stars, Target } from "lucide-react";

const glassCard =
  "rounded-2xl border backdrop-blur-2xl " +
  "bg-white/85 border-slate-200/60 " +
  "shadow-[0_18px_50px_rgba(2,6,23,0.08)] " +
  "dark:bg-white/[0.06] dark:border-white/10 dark:shadow-[0_18px_60px_rgba(0,0,0,0.55)]";

const glassInner =
  "rounded-xl border backdrop-blur-2xl " +
  "bg-white/75 border-slate-200/55 " +
  "dark:bg-white/[0.05] dark:border-white/10";

function accentGlow(accent) {
  switch (accent) {
    case "blue":
      return "bg-blue-500/25";
    case "emerald":
      return "bg-emerald-500/20";
    case "amber":
      return "bg-amber-500/20";
    case "violet":
      return "bg-violet-500/20";
    default:
      return "bg-blue-500/20";
  }
}

function accentText(accent) {
  switch (accent) {
    case "blue":
      return "text-blue-600 dark:text-blue-300";
    case "emerald":
      return "text-emerald-600 dark:text-emerald-300";
    case "amber":
      return "text-amber-600 dark:text-amber-300";
    case "violet":
      return "text-violet-600 dark:text-violet-300";
    default:
      return "text-blue-600 dark:text-blue-300";
  }
}

function accentLine(accent) {
  switch (accent) {
    case "blue":
      return "bg-gradient-to-r from-blue-500/60 to-cyan-400/35";
    case "emerald":
      return "bg-gradient-to-r from-emerald-500/55 to-lime-400/30";
    case "amber":
      return "bg-gradient-to-r from-amber-500/55 to-orange-400/30";
    case "violet":
      return "bg-gradient-to-r from-violet-500/55 to-fuchsia-400/30";
    default:
      return "bg-gradient-to-r from-blue-500/60 to-cyan-400/35";
  }
}

export default function DashboardSection() {
  const user = authStorage.getUser();
  const userName = user?.name || "Student";

  const stats = useMemo(
    () => [
      {
        title: "Total Tests",
        value: 0,
        icon: <BookOpenIcon className="h-6 w-6" />,
        hint: "All completed tests",
        accent: "blue",
      },
      {
        title: "Average Band",
        value: 0,
        icon: <Target className="h-6 w-6" />,
        hint: "Estimated IELTS band",
        accent: "emerald",
      },
      {
        title: "Total Stars",
        value: 0,
        icon: <Stars className="h-6 w-6" />,
        hint: "Earned rewards",
        accent: "amber",
      },
      {
        title: "Study Time",
        value: "42h",
        icon: <Clock className="h-6 w-6" />,
        hint: "Total active time",
        accent: "violet",
      },
    ],
    [],
  );

  const weeklyBands = useMemo(
    () => [
      { day: "Mon", band: 6.4 },
      { day: "Tue", band: 6.9 },
      { day: "Wed", band: 7.3 },
      { day: "Thu", band: 7.0 },
      { day: "Fri", band: 7.9 },
      { day: "Sat", band: 7.8 },
      { day: "Sun", band: 8.5 },
    ],
    [],
  );

  const recent = useMemo(
    () => [
      { type: "Grammar", when: "2 hours ago", band: 8.5, stars: 15 },
      { type: "Reading", when: "1 day ago", band: 7.5, stars: 12 },
      { type: "Writing", when: "2 days ago", band: 7.0, stars: 10 },
      { type: "Grammar", when: "3 days ago", band: 8.0, stars: 14 },
    ],
    [],
  );

  return (
    <div className="relative">
      {/* Aura glow (dark only) */}
      <div className="pointer-events-none absolute inset-0 -z-10 hidden dark:block">
        <div className="absolute -left-40 -top-32 h-[520px] w-[520px] rounded-full bg-blue-600/20 blur-[140px]" />
        <div className="absolute -right-48 top-10 h-[520px] w-[520px] rounded-full bg-indigo-500/15 blur-[160px]" />
        <div className="absolute left-1/3 -bottom-40 h-[560px] w-[560px] rounded-full bg-sky-500/10 blur-[180px]" />
      </div>

      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="flex flex-col gap-1">
          <h1 className="text-3xl sm:text-4xl font-semibold text-slate-900 dark:text-white">
            Welcome back, {userName}! <span className="ml-1">👋</span>
          </h1>
          <p className="text-slate-500 dark:text-white/60">
            Continue your journey to English mastery
          </p>
        </div>

        {/* Stat cards (FIGMA-STYLE) */}
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.title}
              className={`${glassCard} p-6 relative overflow-hidden`}
            >
              {/* accent glow */}
              <div
                className={`absolute -top-20 -right-20 h-44 w-44 rounded-full blur-[72px] opacity-80 ${accentGlow(
                  s.accent,
                )}`}
              />
              {/* subtle shine */}
              <div className="absolute inset-0 opacity-0 dark:opacity-100">
                <div className="absolute -left-20 top-6 h-24 w-72 rotate-[-12deg] bg-white/10 blur-2xl" />
              </div>

              <div className="relative flex items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  {/* icon badge */}
                  <div
                    className={`${glassInner} h-12 w-12 rounded-2xl grid place-items-center ${accentText(
                      s.accent,
                    )}`}
                  >
                    <span className="text-xl">{s.icon}</span>
                  </div>

                  <div>
                    <p className="text-sm text-slate-600 dark:text-white/60">
                      {s.title}
                    </p>
                    <p className="mt-1 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
                      {s.value}
                    </p>
                  </div>
                </div>

                {/* hint pill */}
                <div
                  className={`${glassInner} px-3 py-2 text-xs text-slate-600 dark:text-white/55 max-w-[150px]`}
                >
                  {s.hint}
                </div>
              </div>

              {/* accent line */}
              <div
                className={`mt-5 h-[3px] w-full rounded-full ${accentLine(s.accent)}`}
              />
            </div>
          ))}
        </div>

        {/* Chart + Recent */}
        <div className="mt-6 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {/* Weekly Progress */}
          <div className={`lg:col-span-2 ${glassCard} p-6`}>
            <div className="flex items-start justify-between gap-3">
              <div>
                <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
                  Weekly Progress
                </h2>
                <p className="mt-1 text-sm text-slate-600 dark:text-white/60">
                  Your band score trend this week
                </p>
              </div>

              <div
                className={`${glassInner} px-3 py-2 text-xs text-slate-600 dark:text-white/55`}
              >
                Last 7 days
              </div>
            </div>

            <div className="mt-5">
              <SimpleBarChart data={weeklyBands} />
            </div>
          </div>

          {/* Recent Activity */}
          <div className={`${glassCard} p-6`}>
            <div className="flex items-start justify-between gap-3">
              <div>
                <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
                  Recent Activity
                </h2>
                <p className="mt-1 text-sm text-slate-600 dark:text-white/60">
                  Latest test attempts
                </p>
              </div>

              <div
                className={`${glassInner} px-3 py-2 text-xs text-slate-600 dark:text-white/55`}
              >
                Live
              </div>
            </div>

            <div className="mt-4 space-y-4">
              {recent.map((r, idx) => (
                <div
                  key={idx}
                  className={`${glassInner} px-4 py-3 flex items-center justify-between`}
                >
                  <div>
                    <p className="font-medium text-slate-900 dark:text-white">
                      {r.type}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-white/60">
                      {r.when}
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="font-semibold text-blue-600 dark:text-blue-400">
                      {r.band}
                    </p>
                    <p className="text-xs text-amber-600 dark:text-amber-400">
                      ⭐ +{r.stars}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Start Practice */}
        <div className="mt-8">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
            Start Practice
          </h2>

          <div className="mt-4 grid grid-cols-1 gap-5 md:grid-cols-3">
            <PracticeCard
              backgroundColor="bg-blue-50 dark:bg-blue-900/20"
              title="Grammar Test"
              desc="Start a new practice session"
              icon={<Book className="h-6 w-6" />}
              to="/grammar"
            />
            <PracticeCard
              title="Reading Test"
              desc="Start a new practice session"
              icon={<BookOpenIcon className="h-6 w-6" />}
              to="/reading"
            />
            <PracticeCard
              title="Writing Test"
              desc="Start a new practice session"
              icon={<Book className="h-6 w-6" />}
              to="/writing"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function SimpleBarChart({ data }) {
  const max = 9;

  return (
    <div className="w-full">
      <div className={`${glassInner} relative p-4 overflow-hidden`}>
        <div className="pointer-events-none absolute -left-24 -top-16 h-44 w-72 rotate-[-18deg] bg-white/10 blur-2xl hidden dark:block" />

        <div className="pointer-events-none absolute inset-4 hidden dark:block">
          <div className="h-full w-full grid grid-rows-4">
            <div className="border-b border-white/10" />
            <div className="border-b border-white/10" />
            <div className="border-b border-white/10" />
            <div className="border-b border-white/10" />
          </div>
        </div>
        <div className="relative flex items-end gap-3 h-56">
          {data.map((d) => {
            const h = Math.max(0, Math.min(1, d.band / max)) * 100;
            return (
              <div
                key={d.day}
                className="flex-1 flex flex-col items-center gap-2"
              >
                <div className="w-full h-full flex items-end">
                  <div
                    className="w-full rounded-xl bg-blue-500 relative overflow-hidden"
                    style={{ height: `${h}%` }}
                    title={`${d.day}: ${d.band}`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/0 to-white/25" />
                  </div>
                </div>
                <div className="text-xs text-slate-500 dark:text-white/60">
                  {d.day}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-3 flex justify-between text-xs text-slate-400 dark:text-white/40">
        <span>0</span>
        <span>3</span>
        <span>6</span>
        <span>9</span>
      </div>
    </div>
  );
}

function PracticeCard({ title, desc, icon, to }) {
  return (
    <NavLink
      to={to}
      className={`${glassCard} p-6 hover:translate-y-[-2px] transition`}
    >
      <div className="flex items-start gap-4">
        <div
          className={`${glassInner} h-12 w-12 rounded-2xl grid place-items-center`}
        >
          <span className="text-xl">{icon}</span>
        </div>
        <div>
          <p className="font-semibold text-slate-900 dark:text-white">
            {title}
          </p>
          <p className="mt-1 text-sm text-slate-500 dark:text-white/60">
            {desc}
          </p>
        </div>
      </div>
    </NavLink>
  );
}
