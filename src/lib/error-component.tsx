import type { ErrorComponentProps } from "@tanstack/react-router";
import { TriangleAlert } from "lucide-react";

export function AppErrorComponent({ error }: ErrorComponentProps) {
  return (
    <main className="grid min-h-[60vh] place-items-center px-6 text-center">
      <div>
        <span className="mx-auto mb-3 grid size-12 place-items-center rounded-2xl bg-moss/15 text-moss-ink">
          <TriangleAlert className="size-6" strokeWidth={2} />
        </span>
        <h1 className="text-2xl">Something went wrong</h1>
        <p className="mx-auto mt-2 max-w-md text-sm text-muted">
          {error.message || "An unexpected error occurred. Try reloading the page."}
        </p>
      </div>
    </main>
  );
}
