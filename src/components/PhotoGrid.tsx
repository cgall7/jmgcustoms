"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import photoSizes from "@/data/photo-sizes.json";
import photoAliases from "@/data/photo-aliases.json";

export function PhotoGrid({
  photos: suppliedPhotos,
  alt,
  priority = false,
  layout = "editorial",
}: {
  photos: string[];
  alt: string;
  priority?: boolean;
  layout?: "editorial" | "curated";
}) {
  const aliases = photoAliases as Record<string, string>;
  const photos = [...new Map(suppliedPhotos.map(src => [aliases[src] ?? src, src])).values()];
  const dimensions = photoSizes as Record<string, {width: number; height: number}>;
  const dialog = useRef<HTMLDialogElement>(null);
  const [active, setActive] = useState(0);
  const move = (delta: number) =>
    setActive((i) => (i + delta + photos.length) % photos.length);
  return (
    <>
      <div className={`mt-8 grid gap-6 sm:grid-cols-2 ${layout === "curated" ? "curated-gallery" : ""}`}>
        {photos.map((src, i) => (
          <button
            key={`${src}-${i}`}
            type="button"
            className={`gallery-photo relative block w-full overflow-hidden ${i === 0 ? "sm:col-span-2" : ""}`}
            onClick={() => {
              setActive(i);
              dialog.current?.showModal();
            }}
            aria-label={`Enlarge ${alt}, photograph ${i + 1}`}
          >
            <Image
              src={src}
              alt={`${alt} — photograph ${i + 1}`}
              width={dimensions[src]?.width ?? 1600}
              height={dimensions[src]?.height ?? 1200}
              quality={90}
              className="h-auto max-h-[78vh] w-full object-contain"
              sizes={i === 0 ? "(min-width: 1280px) 1232px, calc(100vw - 48px)" : "(min-width: 640px) 50vw, 100vw"}
              loading={priority && i === 0 ? "eager" : "lazy"}
            />

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
            className="photo-close"
            aria-label="Close photo"
            onClick={() => dialog.current?.close()}
          >
            ×
          </button>
        </div>
        <div className="relative h-[70dvh] cursor-zoom-out" onClick={() => dialog.current?.close()}>
          <Image
            src={photos[active]}
            alt={`${alt} — photograph ${active + 1}`}
            fill
            sizes="95vw"
            unoptimized
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
