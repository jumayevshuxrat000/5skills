import { useMemo } from "react";
import { authStorage } from "../../services/auth.storage";
import {
  Crown,
  Medal,
  Trophy,
  Star,
  TrendingUp,
  User,
  Award,
  Target,
} from "lucide-react";

const glassCard =
  "rounded-2xl border backdrop-blur-2xl " +
  "bg-white/85 border-slate-200/60 " +
  "shadow-[0_18px_50px_rgba(2,6,23,0.08)] " +
  "dark:bg-white/[0.06] dark:border-white/10 dark:shadow-[0_18px_60px_rgba(0,0,0,0.55)]";

const glassInner =
  "rounded-xl border backdrop-blur-2xl " +
  "bg-white/75 border-slate-200/55 " +
  "dark:bg-white/[0.05] dark:border-white/10";

// Official podium colors
const PODIUM = {
  1: {
    label: "1st Place",
    ring: "ring-amber-400/60 dark:ring-amber-300/40",
    glow: "bg-amber-500/22",
    chip: "bg-amber-500 text-white",
    iconBg:
      "bg-gradient-to-br from-amber-400 to-amber-600 text-white shadow-[0_18px_50px_rgba(245,158,11,0.25)]",
    border: "border-amber-300/35 dark:border-amber-300/25",
    rowBg: "bg-amber-500/18 dark:bg-amber-500/14",
  },
  2: {
    label: "2nd Place",
    ring: "ring-slate-400/60 dark:ring-white/20",
    glow: "bg-slate-300/22",
    chip: "bg-slate-300 text-slate-900",
    iconBg:
      "bg-gradient-to-br from-slate-200 to-slate-400 text-slate-900 dark:text-white shadow-[0_18px_50px_rgba(148,163,184,0.18)]",
    border: "border-slate-200 dark:border-white/10",
    rowBg: "bg-slate-200/55 dark:bg-white/10",
  },
  3: {
    label: "3rd Place",
    ring: "ring-orange-400/60 dark:ring-orange-300/35",
    glow: "bg-orange-500/18",
    chip: "bg-orange-600 text-white",
    iconBg:
      "bg-gradient-to-br from-orange-500 to-amber-700 text-white shadow-[0_18px_50px_rgba(234,88,12,0.18)]",
    border: "border-orange-300/30 dark:border-orange-300/20",
    rowBg: "bg-orange-500/14 dark:bg-orange-500/12",
  },
};

export default function Ranking() {
  const me = authStorage.getUser();
  const myName = (me?.name || "You").trim();

  const top3 = useMemo(
    () => [
      { place: 2, name: "Mr Shukhat", stars: 884 },
      { place: 1, name: "Miss Iroda", stars: 892 },
      { place: 3, name: "Soliha", stars: 721 },
    ],
    [],
  );

  const rows = useMemo(
    () => [
      {
        rank: 1,
        name: "Miss Iroda",
        you: myName === "Miss Iroda",
        stars: 892,
        avg: 8.5,
        tests: 45,
      },
      {
        rank: 2,
        name: "Mr Shukhat",
        you: myName === "Mr Shukhat",
        stars: 884,
        avg: 8.2,
        tests: 42,
      },
      {
        rank: 3,
        name: "Soliha",
        you: myName === "Soliha",
        stars: 721,
        avg: 8.0,
        tests: 38,
      },
      {
        rank: 4,
        name: "David Kim",
        you: myName === "David Kim",
        stars: 658,
        avg: 7.8,
        tests: 35,
      },
      {
        rank: 5,
        name: "Jessica Williams",
        you: myName === "Jessica Williams",
        stars: 612,
        avg: 7.6,
        tests: 33,
      },
      {
        rank: 6,
        name: "James Anderson",
        you: myName === "James Anderson",
        stars: 587,
        avg: 7.5,
        tests: 31,
      },
      {
        rank: 7,
        name: "Maria Garcia",
        you: myName === "Maria Garcia",
        stars: 543,
        avg: 7.3,
        tests: 29,
      },
      {
        rank: 8,
        name: "Robert Taylor",
        you: myName === "Robert Taylor",
        stars: 512,
        avg: 7.2,
        tests: 27,
      },
      {
        rank: 9,
        name: "Lisa Martinez",
        you: myName === "Lisa Martinez",
        stars: 489,
        avg: 7.1,
        tests: 26,
      },
      {
        rank: 10,
        name: "John Wilson",
        you: myName === "John Wilson",
        stars: 467,
        avg: 7.0,
        tests: 25,
      },
    ],
    [myName],
  );

  return (
    <div className="relative">
      {/* Dark Aura: blue + red bottom glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 hidden dark:block">
        <div className="absolute -left-44 -top-36 h-[520px] w-[520px] rounded-full bg-blue-600/18 blur-[140px]" />
        <div className="absolute -right-56 top-8 h-[560px] w-[560px] rounded-full bg-indigo-500/12 blur-[170px]" />
        <div className="absolute left-1/2 -translate-x-1/2 -bottom-56 h-[720px] w-[720px] rounded-full bg-red-500/16 blur-[180px]" />
        <div className="absolute left-24 bottom-0 h-[420px] w-[420px] rounded-full bg-orange-500/10 blur-[180px]" />
      </div>

      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="flex flex-col gap-1">
          <h1 className="text-3xl sm:text-4xl font-semibold text-slate-900 dark:text-white">
            Leaderboard
          </h1>
          <p className="text-slate-500 dark:text-white/60">
            Top performers at 5Skills Learning Center
          </p>
        </div>

        {/* Podium */}
        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
          {top3.map((p) => (
            <PodiumCard
              key={p.place}
              place={p.place}
              name={p.name}
              stars={p.stars}
            />
          ))}
        </div>

        {/* Full Rankings */}
        <div className={`mt-6 ${glassCard} p-6 relative overflow-hidden`}>
          {/* subtle sweep shine */}
          <div className="pointer-events-none absolute -left-24 top-8 h-24 w-[420px] rotate-[-12deg] bg-white/10 blur-2xl hidden dark:block" />

          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
            Full Rankings
          </h2>

          {/* Table header */}
          <div className="mt-4 hidden md:grid grid-cols-[90px_1fr_140px_140px_140px] gap-3 px-4 text-xs text-slate-500 dark:text-white/55">
            <div>Rank</div>
            <div>Student</div>
            <div className="text-center">Stars</div>
            <div className="text-center">Avg Score</div>
            <div className="text-center">Total Tests</div>
          </div>

          <div className="mt-3 space-y-3">
            {rows.map((r) => (
              <RankingRow key={r.rank} row={r} />
            ))}
          </div>
        </div>

        {/* About */}
        <div className={`mt-6 ${glassCard} p-6`}>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            About the Leaderboard
          </h3>
          <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-white/60">
            The leaderboard ranks all students based on their total earned
            stars. Compete with fellow learners and strive for the top position.
          </p>
          <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-white/60">
            Rankings will be updated automatically after each completed test
            (we’ll connect real data later).
          </p>
        </div>
      </div>
    </div>
  );
}

function PodiumCard({ place, name, stars }) {
  const p = PODIUM[place];
  const isFirst = place === 1;

  const Icon = place === 1 ? Crown : place === 2 ? Medal : Trophy;

  return (
    <div
      className={`${glassCard} p-6 flex flex-col items-center text-center relative overflow-hidden
                  transition duration-300 ease-out
                  hover:-translate-y-1 hover:shadow-[0_30px_90px_rgba(0,0,0,0.45)]
                  ${isFirst ? "md:-translate-y-2" : ""}`}
    >
      {/* Glow blob */}
      <div
        className={`pointer-events-none absolute -top-20 -right-20 h-52 w-52 rounded-full blur-[80px] opacity-90 ${p.glow}`}
      />
      {/* Glass shine */}
      <div className="pointer-events-none absolute -left-24 top-6 h-28 w-[380px] rotate-[-14deg] bg-white/10 blur-2xl hidden dark:block" />

      {/* Medal circle */}
      <div
        className={`relative h-16 w-16 rounded-full grid place-items-center ring-2 ${p.ring} ${p.iconBg}`}
      >
        <Icon className="h-7 w-7" />
      </div>

      <div className="mt-4 text-sm text-slate-500 dark:text-white/60">
        {p.label}
      </div>
      <div className="mt-1 font-semibold text-slate-900 dark:text-white">
        {name}
      </div>

      <div className="mt-3 inline-flex items-center gap-2 font-semibold text-amber-700 dark:text-amber-300">
        <Star className="h-4 w-4" />
        {stars}
      </div>
    </div>
  );
}

function RankingRow({ row }) {
  const top = row.rank <= 3 ? PODIUM[row.rank] : null;

  const rowBg = top ? top.rowBg : "bg-slate-50/60 dark:bg-white/[0.04]";
  const rowBorder = top ? top.border : "border-slate-100 dark:border-white/10";

  const youOutline = row.you
    ? "ring-2 ring-blue-500/70 dark:ring-blue-400/60"
    : "";
  const hoverFX =
    "transition duration-250 ease-out hover:-translate-y-[1px] hover:bg-white/70 dark:hover:bg-white/[0.06]";

  // Rank icon (NO emoji)
  const RankIcon =
    row.rank === 1
      ? Crown
      : row.rank === 2
        ? Medal
        : row.rank === 3
          ? Trophy
          : null;

  return (
    <div
      className={`${glassInner} ${rowBg} border ${rowBorder} ${youOutline} ${hoverFX} px-4 py-4 rounded-xl`}
    >
      {/* Desktop */}
      <div className="hidden md:grid grid-cols-[90px_1fr_140px_140px_140px] gap-3 items-center">
        {/* Rank */}
        <div className="flex items-center gap-2 text-slate-700 dark:text-white/70">
          {RankIcon ? (
            <div className="inline-flex items-center gap-2 font-semibold">
              <RankIcon className="h-4 w-4 text-amber-400" />
              <span className="text-sm">#{row.rank}</span>
            </div>
          ) : (
            <span className="font-semibold text-sm">#{row.rank}</span>
          )}
        </div>

        {/* Student */}
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-full grid place-items-center bg-slate-200 text-slate-700 dark:bg-white/10 dark:text-white">
            <User className="h-4 w-4" />
          </div>

          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-900 dark:text-white">
              {row.name}
            </span>
            {row.you && (
              <span className="text-[11px] px-2 py-0.5 rounded-full bg-blue-600 text-white">
                You
              </span>
            )}
          </div>
        </div>

        {/* Stars */}
        <div className="flex items-center justify-center gap-2 font-semibold text-amber-700 dark:text-amber-300">
          <Star className="h-4 w-4" />
          {row.stars}
        </div>

        {/* Avg Score */}
        <div className="flex items-center justify-center gap-2 font-semibold text-blue-700 dark:text-blue-300">
          <Target className="h-4 w-4" />
          {row.avg}
        </div>

        {/* Tests */}
        <div className="flex items-center justify-center gap-2 font-semibold text-emerald-700 dark:text-emerald-300">
          <TrendingUp className="h-4 w-4" />
          {row.tests} tests
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="font-semibold text-slate-700 dark:text-white/75">
            {RankIcon ? (
              <div className="flex items-center gap-2">
                <RankIcon className="h-4 w-4 text-amber-400" />
                <span>#{row.rank}</span>
              </div>
            ) : (
              `#${row.rank}`
            )}
          </div>

          <div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-slate-900 dark:text-white">
                {row.name}
              </span>
              {row.you && (
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-blue-600 text-white">
                  You
                </span>
              )}
            </div>

            <div className="mt-1 flex items-center gap-3 text-xs text-slate-600 dark:text-white/60">
              <span className="flex items-center gap-1 text-amber-700 dark:text-amber-300">
                <Star className="h-3.5 w-3.5" /> {row.stars}
              </span>
              <span className="flex items-center gap-1 text-blue-700 dark:text-blue-300">
                <Award className="h-3.5 w-3.5" /> {row.avg}
              </span>
              <span className="flex items-center gap-1 text-emerald-700 dark:text-emerald-300">
                <TrendingUp className="h-3.5 w-3.5" /> {row.tests}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
