import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";

export function SplitWords({
  text,
  className,
  highlight,
  delay = 80,
}: {
  text: string;
  className?: string;
  highlight?: string;
  delay?: number;
}) {
  return (
    <span className={cn("inline", className)}>
      {text.split(" ").map((word, i) => {
        const clean = word.replace(/[.,!]/g, "");
        const isHi = highlight && clean.toLowerCase() === highlight.toLowerCase();
        return (
          <span
            key={`${word}-${i}`}
            className="split-word"
            style={{ animationDelay: `${i * delay}ms` } as CSSProperties}
          >
            {isHi ? <span className="gradient-word">{word}</span> : word}
            {i < text.split(" ").length - 1 ? "\u00A0" : null}
          </span>
        );
      })}
    </span>
  );
}
