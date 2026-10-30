"use client";
import type { ReactNode, FormEvent } from "react";
import { useState } from "react";

export function InquiryForm({ children }: { children: ReactNode }) {
  const [prepared, setPrepared] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const fields = new FormData(event.currentTarget);
    const body = Array.from(fields.entries())
      .map(([key, value]) => `${key}: ${value}`)
      .join("\n\n");
    window.location.href = `mailto:hello@jmgcustoms.com?subject=${encodeURIComponent("Custom project inquiry")}&body=${encodeURIComponent(body)}`;
    setPrepared(true);
  }
  return (
    <form className="mt-12 space-y-6" onSubmit={submit}>
      {children}
      {prepared && (
        <p role="status" className="text-sm text-foreground/70">
          Your email draft is ready to open. Please send it from your email app.
          If no draft appeared, email hello@jmgcustoms.com directly; your
          details remain in this form.
        </p>
      )}
    </form>
  );
}
