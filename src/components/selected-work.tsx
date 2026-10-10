/** @jsxImportSource react */
import { projects, type Project } from "@/content/portfolio";
import { ProjectMedia } from "./project-media";
import { Arrow } from "./arrow";

export function ProjectEntry({ project }: { project: Project }) {
  return (
    <article
      className={`project project-${project.id}`}
      aria-labelledby={`${project.id}-heading`}
    >
      <div className="project-title">
        <h3 id={`${project.id}-heading`}>{project.title}</h3>
        <p className="project-kind">{project.kind}</p>
      </div>
      <div className="project-body">
        <ProjectMedia media={project.media} />
        <div className="project-description">
          <p className="project-summary">{project.summary}</p>
          <p className="project-purpose">{project.purpose}</p>
          <ul>
            {project.details.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
          <p className="project-stack">{project.technologies.join(" · ")}</p>
          <div className="project-actions">
            {project.demo.type === "available" && (
              <a className="text-link" href={project.demo.url}>
                Open {project.title} demo <Arrow />
              </a>
            )}
            {project.demo.type === "pending" && (
              <button
                className="text-link demo-placeholder"
                type="button"
                disabled
                aria-describedby={`${project.id}-demo-note`}
              >
                Open {project.title} demo <Arrow />
              </button>
            )}
            {project.videoUrl && (
              <a className="text-link" href={project.videoUrl}>
                Watch {project.title} motion video <Arrow />
              </a>
            )}
            <a className="text-link" href={project.sourceUrl}>
              View {project.title} source <Arrow />
            </a>
          </div>
          {project.demo.type !== "available" && (
            <p id={`${project.id}-demo-note`} className="demo-note">
              {project.demo.note}
            </p>
          )}
        </div>
      </div>
    </article>
  );
}

export function SelectedWork() {
  return (
    <div className="project-list">
      {projects.map((project) => (
        <ProjectEntry key={project.id} project={project} />
      ))}
    </div>
  );
}
