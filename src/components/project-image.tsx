/** @jsxImportSource react */
"use client";
import Image from "next/image";
import { useState } from "react";
import type { ProjectMedia } from "@/content/portfolio";

type ImageMedia = Extract<ProjectMedia, { type: "image" }>;
export function ProjectImage({ media }: { media: ImageMedia }) {
  const [failed, setFailed] = useState(false);
  return (
    <div
      className="project-image"
      style={{ aspectRatio: `${media.width} / ${media.height}` }}
    >
      {failed ? (
        <p className="media-fallback">
          The project image couldn’t load. You can still read about the build
          and explore its source below.
        </p>
      ) : (
        <Image
          src={media.src}
          width={media.width}
          height={media.height}
          alt={media.alt}
          sizes="(max-width: 900px) 91vw, (min-width: 1800px) 1000px, 60vw"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}
