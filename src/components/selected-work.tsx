/** @jsxImportSource react */
import { projects, type Project } from "@/content/portfolio";
import { ProjectMedia } from "./project-media";
import { Arrow } from "./arrow";

export function ProjectEntry({ project }: { project: Project }) {
  return (
    <article className="project" aria-labelledby={`${project.id}-heading`}>
      <ProjectMedia media={project.media} />
      <div className="project-info">
        <div>
          <p className="project-kind">{project.kind}</p>
          <h3 id={`${project.id}-heading`}>{project.title}</h3>
        </div>
        <div className="project-description">
          <p className="project-summary">{project.summary}</p>
          <ul>
            {project.details.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
          <div className="project-actions">
            {project.demo.type === "available" && (
              <a className="text-link" href={project.demo.url}>
                Open {project.title} demo <Arrow />
              </a>
            )}
            <a className="text-link" href={project.sourceUrl}>
              View {project.title} source <Arrow />
            </a>
          </div>
          {project.demo.type === "unavailable" && (
            <p className="demo-note">{project.demo.note}</p>
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
