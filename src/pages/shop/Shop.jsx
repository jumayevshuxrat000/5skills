import { useMemo, useState } from "react";
import {
  Star,
  ShoppingBag,
  Tag,
  Gift,
  Book,
  PenTool,
  NotebookPen,
  Shirt,
  Coffee,
  Flame,
  Target,
  CheckCircle2,
  ArrowRight,
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

export default function Shop() {
  // design-only: keyin backendga ulaymiz
  const [stars] = useState(138);

  const products = useMemo(
    () => [
      {
        id: "mug",
        category: "Accessories",
        title: "5Skills Mug",
        desc: "Premium ceramic mug with 5Skills branding",
        cost: 150,
        icon: Coffee,
        accent: "amber",
      },
      {
        id: "shirt",
        category: "Apparel",
        title: "5Skills T-Shirt",
        desc: "Comfortable cotton t-shirt, available in multiple sizes",
        cost: 300,
        icon: Shirt,
        accent: "emerald",
      },
      {
        id: "grammar-book",
        category: "Books",
        title: "English Grammar Book",
        desc: "Comprehensive guide to English grammar",
        cost: 250,
        icon: Book,
        accent: "blue",
      },
      {
        id: "pen-set",
        category: "Stationery",
        title: "Premium Pen Set",
        desc: "Set of 3 high-quality writing pens",
        cost: 100,
        icon: PenTool,
        accent: "cyan",
      },
      {
        id: "vocab",
        category: "Books",
        title: "Vocabulary Workbook",
        desc: "Interactive workbook to expand your vocabulary",
        cost: 200,
        icon: NotebookPen,
        accent: "violet",
      },
      {
        id: "notebook",
        category: "Stationery",
        title: "Study Notebook",
        desc: "High-quality notebook for your study notes",
        cost: 120,
        icon: NotebookPen,
        accent: "orange",
      },
    ],
    [],
  );

  return (
    <div className="relative">
      {/* Dark Aura (blue/indigo top + brown/orange bottom like screenshot) */}
      <div className="pointer-events-none absolute inset-0 -z-10 hidden dark:block">
        <div className="absolute -left-44 -top-36 h-[520px] w-[520px] rounded-full bg-blue-600/18 blur-[140px]" />
        <div className="absolute -right-56 top-8 h-[560px] w-[560px] rounded-full bg-indigo-500/12 blur-[170px]" />
        <div className="absolute left-1/2 -translate-x-1/2 -bottom-56 h-[760px] w-[760px] rounded-full bg-amber-500/16 blur-[190px]" />
        <div className="absolute right-20 -bottom-24 h-[520px] w-[520px] rounded-full bg-orange-600/10 blur-[200px]" />
        <div className="absolute left-24 bottom-0 h-[420px] w-[420px] rounded-full bg-red-500/8 blur-[200px]" />
      </div>

      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="flex flex-col gap-1">
          <h1 className="text-3xl sm:text-4xl font-semibold text-slate-900 dark:text-white">
            Rewards Shop
          </h1>
          <p className="text-slate-500 dark:text-white/60">
            Exchange your stars for amazing rewards
          </p>
        </div>

        {/* Balance bar */}
        <div className={`mt-8 ${glassCard} p-6 relative overflow-hidden`}>
          <div className="pointer-events-none absolute -left-24 top-6 h-28 w-[420px] rotate-[-12deg] bg-white/10 blur-2xl hidden dark:block" />

          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm text-slate-600 dark:text-white/60">
                Your Balance
              </p>

              <div className="mt-2 flex items-center gap-3">
                <div className="h-10 w-10 rounded-2xl grid place-items-center bg-amber-500/20 text-amber-700 dark:bg-amber-500/15 dark:text-amber-300 border border-amber-300/30 dark:border-amber-300/20">
                  <Star className="h-5 w-5" />
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
                    {stars}
                  </span>
                  <span className="text-slate-500 dark:text-white/60">
                    Stars
                  </span>
                </div>
              </div>
            </div>

            <div
              className={`${glassInner} h-12 w-12 rounded-2xl grid place-items-center`}
            >
              <ShoppingBag className="h-6 w-6 text-blue-600 dark:text-blue-300" />
            </div>
          </div>
        </div>

        {/* Products grid */}
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} balance={stars} />
          ))}
        </div>

        {/* How to earn more stars */}
        <div className={`mt-8 ${glassCard} p-6`}>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
            How to Earn More Stars
          </h2>

          <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-3">
            <HintCard
              icon={<CheckCircle2 className="h-5 w-5 text-blue-400" />}
              title="Complete Tests"
              desc="Earn up to 18 stars per test"
            />
            <HintCard
              icon={<Target className="h-5 w-5 text-emerald-400" />}
              title="High Scores"
              desc="Better scores = more stars"
            />
            <HintCard
              icon={<Flame className="h-5 w-5 text-orange-400" />}
              title="Daily Practice"
              desc="Consistent practice earns bonus stars"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductCard({ product, balance }) {
  const Icon = product.icon;
  const affordable = balance >= product.cost;

  const accentGlow =
    product.accent === "amber"
      ? "bg-amber-500/18"
      : product.accent === "emerald"
        ? "bg-emerald-500/16"
        : product.accent === "blue"
          ? "bg-blue-500/16"
          : product.accent === "cyan"
            ? "bg-cyan-500/14"
            : product.accent === "violet"
              ? "bg-violet-500/14"
              : "bg-orange-500/14";

  const accentText =
    product.accent === "amber"
      ? "text-amber-300"
      : product.accent === "emerald"
        ? "text-emerald-300"
        : product.accent === "blue"
          ? "text-blue-300"
          : product.accent === "cyan"
            ? "text-cyan-300"
            : product.accent === "violet"
              ? "text-violet-300"
              : "text-orange-300";

  return (
    <div
      className={`${glassCard} p-6 relative overflow-hidden group
                  transition duration-300 ease-out
                  hover:-translate-y-1 hover:shadow-[0_32px_90px_rgba(0,0,0,0.45)]`}
    >
      {/* card glow */}
      <div
        className={`pointer-events-none absolute -top-24 -right-24 h-60 w-60 rounded-full blur-[90px] opacity-90 ${accentGlow}`}
      />
      {/* shiny sweep */}
      <div className="pointer-events-none absolute -left-32 top-10 h-28 w-[420px] rotate-[-14deg] bg-white/10 blur-2xl hidden dark:block opacity-0 group-hover:opacity-100 transition duration-300" />

      {/* Icon */}
      <div className="flex items-center justify-between">
        <div
          className={`${glassInner} h-12 w-12 rounded-2xl grid place-items-center`}
        >
          <Icon className={`h-6 w-6 ${accentText}`} />
        </div>

        <div
          className={`${glassInner} px-3 py-1.5 text-xs text-slate-600 dark:text-white/60 inline-flex items-center gap-2`}
        >
          <Tag className="h-3.5 w-3.5" />
          {product.category}
        </div>
      </div>

      {/* Title */}
      <div className="mt-5">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          {product.title}
        </h3>
        <p className="mt-2 text-sm text-slate-600 dark:text-white/60 leading-6">
          {product.desc}
        </p>
      </div>

      {/* Bottom row */}
      <div className="mt-6 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 font-semibold text-amber-700 dark:text-amber-300">
          <Star className="h-4 w-4" />
          {product.cost}
        </div>

        <button
          className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold
                      transition duration-300 ease-out
                      ${
                        affordable
                          ? "bg-blue-600 text-white hover:bg-blue-500 hover:shadow-[0_18px_40px_rgba(37,99,235,0.35)] active:scale-[0.98]"
                          : "bg-slate-200 text-slate-500 dark:bg-white/10 dark:text-white/35 cursor-not-allowed"
                      }`}
          disabled={!affordable}
          onClick={() => {}}
        >
          {affordable ? (
            <>
              Exchange
              <ArrowRight className="h-4 w-4" />
            </>
          ) : (
            "Not Enough"
          )}
        </button>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/10 to-transparent dark:from-black/35" />
    </div>
  );
}

function HintCard({ icon, title, desc }) {
  return (
    <div
      className={`${glassInner} p-5 transition duration-300 ease-out hover:-translate-y-[2px] hover:bg-white/80 dark:hover:bg-white/[0.06]`}
    >
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-2xl grid place-items-center bg-white/60 dark:bg-white/5 border border-slate-200/50 dark:border-white/10">
          {icon}
        </div>
        <div>
          <p className="font-semibold text-slate-900 dark:text-white">
            {title}
          </p>
          <p className="text-sm text-slate-600 dark:text-white/60">{desc}</p>
        </div>
      </div>
    </div>
  );
}
