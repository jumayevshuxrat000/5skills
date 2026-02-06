import { useMemo, useState } from "react";
import {
  Clock,
  FileText,
  Sparkles,
  Target,
  CheckCircle2,
  PenLine,
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

export default function WritingExam() {
  const [timeLeft] = useState("59:59");
  const [task, setTask] = useState(1);
  const [text, setText] = useState("");

  const tasks = useMemo(
    () => ({
      1: {
        title: "Task 1: Letter Writing",
        prompt:
          "Write a letter to your manager requesting time off for a family event. Include the reason for your request, the dates you need, and how you will ensure your work is covered.",
        minWords: 150,
        placeholder: "Start writing your letter here...",
      },
      2: {
        title: "Task 2: Essay Writing",
        prompt:
          "Some people think schools should teach practical skills. Others believe academic subjects are more important. Discuss both views and give your opinion.",
        minWords: 250,
        placeholder: "Start writing your essay here...",
      },
    }),
    [],
  );

  const bands = useMemo(
    () => [
      { band: "Band 9.0", desc: "Expert user - Full operational command" },
      { band: "Band 8.0", desc: "Very good user - Fully operational" },
      { band: "Band 7.0", desc: "Good user - Operational command" },
      { band: "Band 6.0", desc: "Competent user - Effective command" },
      { band: "Band 5.0", desc: "Modest user - Partial command" },
    ],
    [],
  );

  const tips = useMemo(
    () => [
      "Plan before you write",
      "Use varied vocabulary",
      "Check grammar and spelling",
      "Stay on topic",
      "Manage your time wisely",
    ],
    [],
  );

  const current = tasks[task];
  const words = countWords(text);
  const needed = Math.max(0, current.minWords - words);

  return (
    <div className="relative">
      {/* Purple vibe background (dark only) */}
      <div className="pointer-events-none absolute inset-0 -z-10 hidden dark:block">
        <div className="absolute -left-44 -top-36 h-[520px] w-[520px] rounded-full bg-blue-600/12 blur-[150px]" />
        <div className="absolute -right-56 top-8 h-[560px] w-[560px] rounded-full bg-fuchsia-600/14 blur-[190px]" />
        <div className="absolute right-10 bottom-0 h-[520px] w-[520px] rounded-full bg-violet-600/18 blur-[200px]" />
        <div className="absolute left-1/2 -translate-x-1/2 -bottom-56 h-[780px] w-[780px] rounded-full bg-purple-700/20 blur-[220px]" />
      </div>

      <div className="mx-auto max-w-6xl">
        {/* Top timer bar */}
        <div
          className={`${glassCard} p-4 sm:p-5 flex items-center justify-between gap-4`}
        >
          <div className="flex items-center gap-3">
            <div
              className={`${glassInner} h-10 w-10 rounded-2xl grid place-items-center`}
            >
              <Clock className="h-5 w-5 text-violet-500 dark:text-violet-600" />
            </div>
            <div className="font-semibold text-slate-900 dark:text-white">
              {timeLeft}
            </div>
          </div>

          <div className="text-sm text-slate-500 dark:text-white/60">
            Writing Test - 2 Tasks
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-6">
          <div
            className={`${glassInner} p-1 rounded-2xl flex items-center gap-1`}
          >
            <TabButton active={task === 1} onClick={() => setTask(1)}>
              Task 1
            </TabButton>
            <TabButton active={task === 2} onClick={() => setTask(2)}>
              Task 2
            </TabButton>
          </div>
        </div>

        {/* Main grid */}
        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* LEFT: editor area */}
          <div className="lg:col-span-8 space-y-6">
            {/* Prompt card */}
            <div className={`${glassCard} p-6`}>
              <div className="flex items-start gap-3">
                <div
                  className={`${glassInner} h-10 w-10 rounded-2xl grid place-items-center`}
                >
                  <FileText className="h-5 w-5 text-violet-500 dark:text-violet-600" />
                </div>

                <div>
                  <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
                    {current.title}
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-white/60">
                    {current.prompt}
                  </p>

                  <p className="mt-4 text-xs text-slate-500 dark:text-white/45">
                    Minimum {current.minWords} words
                  </p>
                </div>
              </div>

              {/* Editor */}
              <div className="mt-5">
                <div
                  className={`${glassInner} p-4 sm:p-5 rounded-2xl transition duration-300 ease-out
                              focus-within:ring-2 focus-within:ring-violet-500/60 dark:focus-within:ring-violet-400/50`}
                >
                  <textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder={current.placeholder}
                    className="w-full min-h-[340px] bg-transparent outline-none resize-none
                               text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-white/35
                               leading-7"
                  />
                </div>

                {/* Footer counters */}
                <div className="mt-3 flex items-center justify-between text-xs">
                  <span className="text-orange-600 dark:text-orange-400 font-semibold">
                    {words} / {current.minWords} words
                  </span>
                  <span className="text-slate-500 dark:text-white/50">
                    {needed > 0
                      ? `${needed} more words needed`
                      : "Minimum reached ✅"}
                  </span>
                </div>
              </div>
            </div>

            {/* Submit */}
            <button
              className="w-full rounded-2xl py-4 font-semibold 
                         bg-gradient-to-r from-violet-600 to-fuchsia-600
                         shadow-[0_20px_60px_rgba(168,85,247,0.25)]
                         transition duration-300 ease-out
                         hover:shadow-[0_28px_90px_rgba(168,85,247,0.35)]
                         hover:-translate-y-[1px]
                         active:scale-[0.99]"
              onClick={() => {}}
            >
              Submit Writing Test
            </button>
          </div>

          {/* RIGHT: descriptors + tips */}
          <div className="lg:col-span-4 space-y-6">
            {/* Band descriptors */}
            <div className={`${glassCard} p-6`}>
              <div className="flex items-center gap-3">
                <div
                  className={`${glassInner} h-10 w-10 rounded-2xl grid place-items-center`}
                >
                  <Target className="h-5 w-5 text-violet-500 dark:text-violet-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  Band Score Descriptors
                </h3>
              </div>

              <div className="mt-5 space-y-4">
                {bands.map((b) => (
                  <div
                    key={b.band}
                    className={`${glassInner} px-4 py-3 rounded-2xl
                                transition duration-300 ease-out
                                hover:-translate-y-[1px] hover:bg-white/80 dark:hover:bg-white/[0.07]`}
                  >
                    <div className="text-sm font-semibold text-violet-600 dark:text-violet-600">
                      {b.band}
                    </div>
                    <div className="mt-1 text-xs text-slate-600 dark:text-white/55">
                      {b.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tips */}
            <div className={`${glassCard} p-6 relative overflow-hidden`}>
              {/* purple tint */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-violet-600/10 to-fuchsia-600/10" />

              <div className="relative flex items-center gap-3">
                <div
                  className={`${glassInner} h-10 w-10 rounded-2xl grid place-items-center`}
                >
                  <Sparkles className="h-5 w-5 text-violet-800 dark:text-violet-300" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  Writing Tips
                </h3>
              </div>

              <ul className="relative mt-4 space-y-3 text-sm text-slate-700 dark:text-white/70">
                {tips.map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-violet-600 dark:text-violet-300" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>

              <div className="relative mt-5 flex items-center gap-2 text-xs text-slate-500 dark:text-white/55">
                <PenLine className="h-4 w-4" />
                Keep it clear, structured, and on-topic.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* Tabs */
function TabButton({ active, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={`flex-1 rounded-2xl py-3 text-sm font-semibold transition duration-300 ease-out
        ${
          active
            ? "bg-white text-slate-900 dark:bg-white/10 dark:text-white shadow-[0_10px_30px_rgba(0,0,0,0.25)]"
            : "text-slate-600 hover:text-slate-900 hover:bg-white/70 dark:text-white/60 dark:hover:text-white dark:hover:bg-white/[0.06]"
        }`}
    >
      {children}
    </button>
  );
}

/* Utils */
function countWords(str) {
  const s = (str || "").trim();
  if (!s) return 0;
  return s.split(/\s+/).filter(Boolean).length;
}
