import { Arrow } from "./arrow";

const steps = [
  {
    title: "Discuss the idea",
    description:
      "Tell me what you need, who it’s for, and the problem you want to solve.",
  },
  {
    title: "Define the requirements",
    description:
      "Shape the idea into a practical scope and agree on what the build needs to do.",
  },
  {
    title: "Build and refine",
    description:
      "Develop the interface, circuit, or firmware, connecting the pieces where needed.",
  },
  {
    title: "Review it together",
    description:
      "Look at how the build works, discuss refinements, and agree on the next steps.",
  },
];

export function AboutProcess() {
  return (
    <section
      id="approach"
      className="approach section-space shell"
      aria-labelledby="approach-heading"
    >
      <div className="about-grid">
        <div>
          <h2 id="approach-heading">
            A person behind
            <br />
            every <span className="outlined-word">piece.</span>
          </h2>
          <div className="maker-mark" aria-hidden="true">
            <svg viewBox="0 0 140 140" fill="none">
              <path
                d="M25 20V120M115 20V120M25 70H115M48 120V83M92 20V57"
                stroke="currentColor"
                strokeWidth="12"
              />
              <circle
                cx="70"
                cy="70"
                r="64"
                stroke="currentColor"
                strokeWidth="1"
              />
            </svg>
            <span>
              Software meets
              <br />
              the physical world.
            </span>
          </div>
        </div>
        <div className="about-copy">
          <p className="personal-context">
            I’m Hans Santos.
            <br />
            Developer, maker, problem-solver.
          </p>
          <p>
            Based in Batangas, Philippines, I work across software and
            electronics. I’m interested in what happens when a useful interface
            meets a physical system — and in finding the pieces an idea needs to
            work.
          </p>
          <p>
            Whether it lives in a browser or on a circuit board, I approach a
            build with the same question: how can this solve a real problem?
          </p>
          <a href="#contact" className="text-link">
            Tell me what you’re thinking <Arrow />
          </a>
        </div>
      </div>
      <div className="process-heading">
        <h3>A clear way forward.</h3>
        <p>From the first conversation to the working pieces.</p>
      </div>
      <ol className="approach-steps">
        {steps.map((step, index) => (
          <li key={step.title}>
            <span className="step-number" aria-hidden="true">
              0{index + 1}
            </span>
            <h4>{step.title}</h4>
            <p>{step.description}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
