import { useMemo, useState } from "react";
import { Clock, BookOpen, CheckCircle2, HelpCircle } from "lucide-react";

const glassCard =
  "rounded-2xl border backdrop-blur-2xl " +
  "bg-white/85 border-slate-200/60 " +
  "shadow-[0_18px_50px_rgba(2,6,23,0.08)] " +
  "dark:bg-white/[0.06] dark:border-white/10 dark:shadow-[0_18px_60px_rgba(0,0,0,0.55)]";

const glassInner =
  "rounded-xl border backdrop-blur-2xl " +
  "bg-white/75 border-slate-200/55 " +
  "dark:bg-white/[0.05] dark:border-white/10";

export default function ReadingExam() {
  const [timeLeft] = useState("59:40");
  const [answers, setAnswers] = useState({});

  const passage = useMemo(
    () => ({
      title: "Passage",
      text: `Climate change is one of the most pressing issues facing our planet today. The Earth's average temperature has risen by approximately 1.1 degrees Celsius since the late 19th century, with most of this warming occurring in the past 40 years. This increase may seem small, but it has already had significant impacts on our environment.

The primary cause of recent climate change is human activity, particularly the burning of fossil fuels like coal, oil, and natural gas. When these fuels are burned, they release carbon dioxide and other greenhouse gases into the atmosphere. These gases trap heat from the sun, creating a "greenhouse effect" that warms the planet.

The consequences of climate change are far-reaching and affect every corner of the globe. Rising temperatures are causing ice sheets and glaciers to melt, leading to rising sea levels that threaten coastal communities. Weather patterns are becoming more extreme, with more frequent and severe hurricanes, droughts, and heatwaves. These changes are disrupting ecosystems, forcing many species to adapt, migrate, or face extinction.

However, there is still hope. Scientists agree that if we act now to reduce greenhouse gas emissions, we can limit the worst effects of climate change. This requires a global effort involving governments, businesses, and individuals. Renewable energy sources like solar and wind power offer clean alternatives to fossil fuels. Energy efficiency improvements in buildings and transportation can significantly reduce emissions. Additionally, protecting and restoring forests, which absorb carbon dioxide, is crucial.

Individual actions matter too. Simple steps like using public transportation, reducing energy consumption at home, and choosing sustainable products can collectively make a significant difference. The fight against climate change requires everyone's participation, but the rewards—a healthier planet for future generations—are well worth the effort.`,
    }),
    [],
  );

  const questions = useMemo(
    () => [
      {
        id: 1,
        q: "According to the passage, what is the primary cause of recent climate change?",
        options: [
          "Natural changes in the Earth's orbit",
          "Human activity and burning fossil fuels",
          "Volcanic eruptions",
          "Changes in ocean currents",
        ],
      },
      {
        id: 2,
        q: "What does the passage say greenhouse gases do?",
        options: [
          "Reflect sunlight back into space",
          "Trap heat and warm the planet",
          "Cool the atmosphere",
          "Create rainstorms",
        ],
      },
      {
        id: 3,
        q: "Which of the following is mentioned as an effect of climate change?",
        options: [
          "Decreasing sea levels",
          "More frequent extreme weather",
          "More stable ecosystems",
          "Shorter summers",
        ],
      },
      {
        id: 4,
        q: "What role do forests play in fighting climate change, according to the passage?",
        options: [
          "They produce oxygen",
          "They absorb carbon dioxide",
          "They prevent flooding",
          "They cool the atmosphere",
        ],
      },
      {
        id: 5,
        q: "The author’s tone in the final paragraph can best be described as:",
        options: ["Pessimistic", "Neutral", "Hopeful", "Angry"],
      },
      {
        id: 6,
        q: "What is suggested as a clean alternative to fossil fuels?",
        options: [
          "Coal power",
          "Renewable energy like solar and wind",
          "Diesel transportation",
          "More oil production",
        ],
      },
      {
        id: 7,
        q: "What can individuals do to help, according to the passage?",
        options: [
          "Only governments can fix it",
          "Reduce energy use and choose sustainable products",
          "Stop using all electricity immediately",
          "Avoid recycling",
        ],
      },
      {
        id: 8,
        q: "Which statement best summarizes the passage?",
        options: [
          "Climate change is unavoidable and nothing helps",
          "Climate change is caused by humans, but action can reduce harm",
          "Climate change is mostly caused by volcanoes",
          "Climate change is only a local problem",
        ],
      },
    ],
    [],
  );

  const answeredCount = Object.keys(answers).length;

  return (
    <div className="relative">
      {/* Green glow background (dark only) */}
      <div className="pointer-events-none absolute inset-0 -z-10 hidden dark:block">
        <div className="absolute -left-56 -top-40 h-[620px] w-[620px] rounded-full bg-emerald-500/14 blur-[190px]" />
        <div className="absolute -right-60 top-10 h-[660px] w-[660px] rounded-full bg-green-500/10 blur-[210px]" />
        <div className="absolute right-10 bottom-0 h-[560px] w-[560px] rounded-full bg-emerald-600/14 blur-[220px]" />
        <div className="absolute left-1/2 -translate-x-1/2 -bottom-64 h-[900px] w-[900px] rounded-full bg-lime-500/10 blur-[240px]" />
      </div>

      <div className="sticky top-0 z-30">
        <div className="mx-auto max-w-6xl pt-4">
          <div
            className={`${glassCard} px-5 py-4 flex items-center justify-between`}
          >
            <div className="flex items-center gap-3">
              <div
                className={`${glassInner} h-10 w-10 rounded-2xl grid place-items-center`}
              >
                <Clock className="h-5 w-5 text-emerald-500 dark:text-emerald-300" />
              </div>
              <div className="font-semibold text-slate-900 dark:text-white">
                {timeLeft}
              </div>
            </div>

            <div className="text-sm text-slate-500 dark:text-white/60">
              Reading Test — {answeredCount}/{questions.length} answered
            </div>
          </div>
        </div>
      </div>

      {/* Main layout */}
      <div className="mx-auto max-w-6xl pt-6 pb-10">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-[96px]">
              <div className={`${glassCard} p-6`}>
                <div className="flex items-center gap-3">
                  <div
                    className={`${glassInner} h-10 w-10 rounded-2xl grid place-items-center`}
                  >
                    <BookOpen className="h-5 w-5 text-emerald-500 dark:text-emerald-300" />
                  </div>
                  <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
                    {passage.title}
                  </h2>
                </div>

                {/* Scrollable passage inside fixed card */}
                <div className="mt-4">
                  <div
                    className={`${glassInner} p-4 rounded-2xl max-h-[62vh] overflow-auto
                                text-sm leading-7 text-slate-700 dark:text-white/70
                                scroll-smooth`}
                  >
                    {passage.text.split("\n\n").map((para, idx) => (
                      <p key={idx} className={idx === 0 ? "" : "mt-5"}>
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ✅ Questions: scroll area */}
          <div className="lg:col-span-7">
            <div
              className={`${glassCard} p-6 lg:h-[calc(100vh-150px)] lg:overflow-auto`}
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div
                    className={`${glassInner} h-10 w-10 rounded-2xl grid place-items-center`}
                  >
                    <HelpCircle className="h-5 w-5 text-emerald-500 dark:text-emerald-300" />
                  </div>
                  <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
                    Questions
                  </h2>
                </div>

                <div className="text-xs text-slate-500 dark:text-white/60">
                  Choose one answer for each question
                </div>
              </div>

              <div className="mt-5 space-y-5">
                {questions.map((q, idx) => (
                  <QuestionCard
                    key={q.id}
                    index={idx + 1}
                    question={q}
                    value={answers[q.id]}
                    onChange={(optIdx) =>
                      setAnswers((prev) => ({ ...prev, [q.id]: optIdx }))
                    }
                  />
                ))}
              </div>

              {/* Submit */}
              <div className="mt-6">
                <button
                  className="w-full rounded-2xl py-4 font-semibold text-white
                             bg-gradient-to-r from-emerald-600 to-green-600
                             shadow-[0_20px_60px_rgba(16,185,129,0.20)]
                             transition duration-300 ease-out
                             hover:shadow-[0_28px_90px_rgba(16,185,129,0.30)]
                             hover:-translate-y-[1px]
                             active:scale-[0.99]"
                  onClick={() => {}}
                >
                  Submit Test
                </button>

                <div className="mt-3 flex items-center justify-between text-xs text-slate-500 dark:text-white/55">
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 dark:text-emerald-300" />
                    {answeredCount} answered
                  </span>
                  <span>{questions.length - answeredCount} remaining</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* (optional) bottom spacing */}
      </div>
    </div>
  );
}

function QuestionCard({ index, question, value, onChange }) {
  return (
    <div
      className={`${glassInner} p-5 rounded-2xl relative overflow-x-hidden
                  transition duration-300 ease-out
                  hover:-translate-y-[1px] hover:bg-white/80 dark:hover:bg-white/[0.07]`}
    >
      <div className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full bg-emerald-500/10 blur-[80px] opacity-0 hover:opacity-100" />

      <div className="text-sm font-semibold text-slate-900 dark:text-white">
        Question {index}
      </div>

      <div className="mt-2 text-sm leading-6 text-slate-700 dark:text-white/70">
        {question.q}
      </div>

      <div className="mt-4 space-y-3">
        {question.options.map((opt, i) => {
          const selected = value === i;

          return (
            <button
              key={opt}
              type="button"
              onClick={() => onChange(i)}
              className={`w-full text-left rounded-2xl px-4 py-4
                          border transition duration-250 ease-out
                          ${
                            selected
                              ? "border-emerald-400/50 dark:border-emerald-300/35 bg-emerald-500/10 dark:bg-emerald-500/10 shadow-[0_16px_50px_rgba(16,185,129,0.10)]"
                              : "border-slate-200/70 dark:border-white/10 bg-white/50 dark:bg-white/[0.03] hover:bg-white/80 dark:hover:bg-white/[0.06]"
                          }`}
            >
              <div className="flex items-center gap-3">
                <span
                  className={`h-4 w-4 rounded-full border grid place-items-center transition
                    ${
                      selected
                        ? "border-emerald-400 dark:border-emerald-300"
                        : "border-slate-300 dark:border-white/20"
                    }`}
                >
                  <span
                    className={`h-2 w-2 rounded-full transition ${
                      selected
                        ? "bg-emerald-500 dark:bg-emerald-300"
                        : "bg-transparent"
                    }`}
                  />
                </span>

                <span className="text-sm font-medium text-slate-900 dark:text-white">
                  {opt}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
