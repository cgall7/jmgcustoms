"use client";
import Image from "next/image";
import { useRef, useState } from "react";

export function PhotoGrid({
  photos,
  alt,
  priority = false,
}: {
  photos: string[];
  alt: string;
  priority?: boolean;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [active, setActive] = useState(0);
  const move = (delta: number) =>
    setActive((i) => (i + delta + photos.length) % photos.length);
  return (
    <>
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {photos.map((src, i) => (
          <button
            key={`${src}-${i}`}
            type="button"
            className={`relative block w-full bg-[#eeeae2] ${i === 0 ? "aspect-[4/3] sm:col-span-2 sm:aspect-[16/10]" : "aspect-[4/3]"}`}
            onClick={() => {
              setActive(i);
              dialog.current?.showModal();
            }}
            aria-label={`Enlarge ${alt}, photograph ${i + 1}`}
          >
            <Image
              src={src}
              alt={`${alt} — photograph ${i + 1}`}
              fill
              className="object-contain"
              sizes={i === 0 ? "(min-width: 1280px) 1232px, calc(100vw - 48px)" : "(min-width: 640px) 50vw, 100vw"}
              loading={priority && i === 0 ? "eager" : "lazy"}
            />
            <span className="absolute bottom-3 right-3 bg-background px-3 py-1 text-xs text-foreground">
              View full photo +
            </span>
          </button>
        ))}
      </div>
      <dialog
        ref={dialog}
        className="photo-dialog"
        aria-label={`${alt} photo viewer`}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") move(1);
          if (e.key === "ArrowLeft") move(-1);
        }}
        onClick={(e) => {
          if (e.target === e.currentTarget) dialog.current?.close();
        }}
        onClose={() => {
          document.body.style.overflow = "";
        }}
      >
        <div className="flex items-center justify-between gap-4 p-4">
          <p aria-live="polite">
            {alt} · {active + 1} / {photos.length}
          </p>
          <button
            type="button"
            autoFocus
            className="button"
            onClick={() => dialog.current?.close()}
          >
            Close ×
          </button>
        </div>
        <div className="relative h-[70dvh]">
          <Image
            src={photos[active]}
            alt={`${alt} — photograph ${active + 1}`}
            fill
            sizes="95vw"
            className="object-contain"
          />
        </div>
        <div className="flex justify-center gap-4 p-4">
          <button type="button" className="button" onClick={() => move(-1)}>
            ← Previous
          </button>
          <button type="button" className="button" onClick={() => move(1)}>
            Next →
          </button>
        </div>
      </dialog>
    </>
  );
}
