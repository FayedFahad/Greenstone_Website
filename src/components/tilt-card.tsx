import { LiveBorder } from "@/components/live-border";
import { cn } from "@/lib/utils";
import { useRef, type CSSProperties, type PointerEvent, type ReactNode } from "react";

export function TiltCard({
  children,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "article" | "li";
}) {
  const ref = useRef<HTMLDivElement>(null);

  function onMove(e: PointerEvent<HTMLElement>) {
    const el = ref.current;
    if (!el) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    el.style.setProperty("--rx", `${((0.5 - py) * 6.5).toFixed(2)}deg`);
    el.style.setProperty("--ry", `${((px - 0.5) * 6.5).toFixed(2)}deg`);
    el.style.setProperty("--spot-x", `${(px * 100).toFixed(1)}%`);
    el.style.setProperty("--spot-y", `${(py * 100).toFixed(1)}%`);
  }

  function onLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
    el.style.setProperty("--spot-x", "50%");
    el.style.setProperty("--spot-y", "50%");
  }

  return (
    <Tag
      ref={ref as never}
      className={cn("panel tilt-card", className)}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      style={{ "--rx": "0deg", "--ry": "0deg" } as CSSProperties}
    >
      <LiveBorder />
      {children}
    </Tag>
  );
}
