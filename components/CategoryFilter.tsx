"use client";

import { AppCategory, UNDO_CATEGORY_TAG } from "@/types/app";

export const CATEGORY_META: Record<
  Exclude<AppCategory, "All">,
  { emoji: string; color: string }
> = {
  [UNDO_CATEGORY_TAG]: { emoji: "🌴", color: "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300" },
  Weather:    { emoji: "🌧️", color: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300" },
  Utilities:  { emoji: "⚡", color: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300" },
  Govt:       { emoji: "🏛️", color: "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300" },
  Tools:      { emoji: "🛠️", color: "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300" },
  Fun:        { emoji: "🎉", color: "bg-pink-100 text-pink-700 dark:bg-pink-900/40 dark:text-pink-300" },
  News:       { emoji: "📰", color: "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300" },
  Transport:  { emoji: "🚌", color: "bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300" },
  Health:     { emoji: "🏥", color: "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300" },
  Education:  { emoji: "📚", color: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300" },
  Community:  { emoji: "👥", color: "bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300" },
  Jobs:       { emoji: "💼", color: "bg-sky-100 text-sky-700 dark:bg-sky-900/40 dark:text-sky-300" },
};

const ALL_CATEGORIES: AppCategory[] = [
  "All",
  UNDO_CATEGORY_TAG,
  "Weather",
  "Utilities",
  "Govt",
  "Transport",
  "News",
  "Tools",
  "Health",
  "Education",
  "Fun",
  "Community",
  "Jobs",
];

interface CategoryFilterProps {
  active: AppCategory;
  counts: Partial<Record<AppCategory, number>>;
  onChange: (cat: AppCategory) => void;
}

export default function CategoryFilter({ active, counts, onChange }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {ALL_CATEGORIES.map((cat) => {
        const count = cat === "All" ? counts["All"] : counts[cat];
        if (cat !== "All" && !count) return null;
        const isActive = active === cat;
        return (
          <button
            key={cat}
            onClick={() => onChange(cat)}
            className={`btn-filter ${isActive ? "btn-filter-active" : ""}`}
          >
            {cat !== "All" && (
              <span className="mr-1">{CATEGORY_META[cat as Exclude<AppCategory, "All">].emoji}</span>
            )}
            {cat}
            {count !== undefined && count > 0 && (
              <span className={`ml-1.5 text-xs px-1.5 py-0.5 rounded-full ${
                isActive
                  ? "bg-white/20 text-white"
                  : "bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400"
              }`}>
                {count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
