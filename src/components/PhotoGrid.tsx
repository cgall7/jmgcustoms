import Image from "next/image";

export function PhotoGrid({
  photos,
  alt,
  priority = false,
}: {
  photos: string[];
  alt: string;
  priority?: boolean;
}) {
  return (
    <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
      {photos.map((src, i) => (
        <div
          key={src}
          className="relative aspect-square overflow-hidden rounded-md bg-wood/10"
        >
          <Image
            src={src}
            alt={`${alt} ${i + 1}`}
            fill
            className="object-cover"
            sizes="(min-width: 640px) 33vw, 50vw"
            priority={priority && i < 3}
          />
        </div>
      ))}
    </div>
  );
}
