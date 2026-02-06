import { useMemo, useState } from "react";
import {
  Clock,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";

/* ===== shared glass styles ===== */
const glass =
  "rounded-2xl border backdrop-blur-2xl " +
  "bg-white/85 border-slate-200/60 " +
  "shadow-[0_20px_60px_rgba(2,6,23,0.08)] " +
  "dark:bg-white/[0.06] dark:border-white/10 dark:shadow-[0_25px_80px_rgba(0,0,0,0.6)]";

const glassInner =
  "rounded-xl border backdrop-blur-2xl " +
  "bg-white/70 border-slate-200/60 " +
  "dark:bg-white/[0.05] dark:border-white/10";

export default function GrammarExam() {
  const [time] = useState("19:47");
  const [current, setCurrent] = useState(6); // Question 7 (0-based)
  const [answers, setAnswers] = useState({});

  const questions = useMemo(
    () => [
      {
        q: "By the time you arrive, I ____ dinner.",
        options: [
          "finish",
          "will finish",
          "will have finished",
          "finished",
        ],
      },
      {
        q: "She ____ to London three times this year.",
        options: ["went", "has been", "has gone", "was"],
      },
      {
        q: "If I ____ more time, I would help you.",
        options: ["have", "had", "will have", "am having"],
      },
      {
        q: "He asked me where I ____ from.",
        options: ["come", "came", "will come", "coming"],
      },
      {
        q: "The work ____ by tomorrow.",
        options: ["completes", "will complete", "will be completed", "completed"],
      },
      {
        q: "I didn’t know she ____ already left.",
        options: ["has", "had", "have", "was"],
      },
      {
        q: "By next week, they ____ the project.",
        options: [
          "finish",
          "will finish",
          "will have finished",
          "finished",
        ],
      },
      {
        q: "He speaks as if he ____ everything.",
        options: ["knows", "knew", "had known", "has known"],
      },
      {
        q: "We ____ for an hour when it started raining.",
        options: ["walked", "were walking", "had been walking", "are walking"],
      },
      {
        q: "This is the first time I ____ sushi.",
        options: ["eat", "ate", "have eaten", "had eaten"],
      },
    ],
    [],
  );

  const progress = ((current + 1) / questions.length) * 100;

  return (
    <div className="relative min-h-[calc(100vh-64px)] overflow-hidden">
      {/* 🔵 gradient background */}
      <div className="pointer-events-none absolute inset-0 -z-10 hidden dark:block">
        <div className="absolute -left-40 -top-32 h-[600px] w-[600px] rounded-full bg-blue-600/15 blur-[180px]" />
        <div className="absolute -right-48 top-20 h-[700px] w-[700px] rounded-full bg-indigo-600/12 blur-[220px]" />
        <div className="absolute left-1/2 -translate-x-1/2 -bottom-64 h-[900px] w-[900px] rounded-full bg-sky-500/10 blur-[260px]" />
      </div>

      <div className="mx-auto max-w-5xl px-4 pt-6 pb-10">
        {/* ===== Timer + progress ===== */}
        <div className={`${glass} px-6 py-4`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Clock className="h-5 w-5 text-blue-500" />
              <span className="font-semibold text-slate-900 dark:text-white">
                {time}
              </span>
            </div>
            <span className="text-sm text-slate-500 dark:text-white/60">
              Question {current + 1} of {questions.length}
            </span>
          </div>

          <div className="mt-3 h-2 w-full rounded-full bg-slate-200/60 dark:bg-white/10 overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-blue-500 to-sky-400 transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* ===== Question card ===== */}
        <div className={`${glass} mt-6 p-8`}>
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 dark:text-white">
            {questions[current].q}
          </h2>

          <div className="mt-6 space-y-4">
            {questions[current].options.map((opt, i) => {
              const selected = answers[current] === i;
              return (
                <button
                  key={opt}
                  onClick={() =>
                    setAnswers((p) => ({ ...p, [current]: i }))
                  }
                  className={`w-full text-left rounded-xl px-5 py-4 border transition
                    ${
                      selected
                        ? "border-blue-500/50 bg-blue-500/10 shadow-[0_10px_40px_rgba(59,130,246,0.15)]"
                        : "border-slate-200/60 dark:border-white/10 bg-white/50 dark:bg-white/[0.03] hover:bg-white/80 dark:hover:bg-white/[0.06]"
                    }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`h-4 w-4 rounded-full border grid place-items-center
                        ${
                          selected
                            ? "border-blue-500"
                            : "border-slate-300 dark:border-white/20"
                        }`}
                    >
                      {selected && (
                        <span className="h-2 w-2 rounded-full bg-blue-500" />
                      )}
                    </span>
                    <span className="font-medium text-slate-900 dark:text-white">
                      {opt}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Prev / Next */}
          <div className="mt-8 flex items-center justify-between">
            <button
              onClick={() => setCurrent((c) => Math.max(0, c - 1))}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-300/50
                         text-slate-700 dark:text-white/80 dark:border-white/10
                         hover:bg-white/70 dark:hover:bg-white/[0.06] transition"
            >
              <ChevronLeft className="h-4 w-4" />
              Previous
            </button>

            <button
              onClick={() =>
                setCurrent((c) => Math.min(questions.length - 1, c + 1))
              }
              className="flex items-center gap-2 px-6 py-2 rounded-lg
                         bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              Next
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* ===== Question overview ===== */}
        <div className={`${glass} mt-6 p-6`}>
          <div className="text-sm font-medium text-slate-600 dark:text-white/60 mb-3">
            Question Overview
          </div>

          <div className="flex flex-wrap gap-3">
            {questions.map((_, i) => {
              const active = i === current;
              const done = answers[i] !== undefined;

              return (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-10 w-10 rounded-xl grid place-items-center font-medium transition
                    ${
                      active
                        ? "bg-blue-600 text-white"
                        : done
                        ? "bg-emerald-500/15 text-emerald-600 dark:text-emerald-300"
                        : "bg-slate-100 dark:bg-white/[0.04] text-slate-600 dark:text-white/70"
                    }`}
                >
                  {i + 1}
                </button>
              );
            })}
          </div>
        </div>

        {/* optional submit */}
        <div className="mt-6">
          <button
            className="w-full rounded-2xl py-4 font-semibold text-white
                       bg-gradient-to-r from-blue-600 to-indigo-600
                       shadow-[0_25px_80px_rgba(59,130,246,0.35)]
                       hover:shadow-[0_35px_120px_rgba(59,130,246,0.45)]
                       transition"
          >
            Submit Grammar Test
          </button>

          <div className="mt-3 flex items-center justify-center gap-2 text-xs text-slate-500 dark:text-white/50">
            <CheckCircle2 className="h-4 w-4 text-emerald-500" />
            {Object.keys(answers).length} of {questions.length} answered
          </div>
        </div>
      </div>
    </div>
  );
}
