/** @jsxImportSource react */
import type { ProjectMedia as Media } from "@/content/portfolio";
import { ProjectImage } from "./project-image";
import { SmartDrawerDiagram } from "./smart-drawer-diagram";

export function ProjectMedia({ media }: { media: Media }) {
  if (media.type === "text")
    return (
      <div className="text-evidence">
        <p>{media.note}</p>
      </div>
    );
  return (
    <figure>
      {media.type === "image" ? (
        <ProjectImage key={media.src} media={media} />
      ) : (
        <SmartDrawerDiagram />
      )}
      <figcaption>{media.caption}</figcaption>
    </figure>
  );
}
