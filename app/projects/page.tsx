export default function ProjectsPage() {
  return (
    <main>
      <h1>Projects</h1>

      <section>
        <h2>Authentication & Authorization Platform</h2>
        <p><strong>Status:</strong> In Progress</p>
        <p>
          A backend-focused authentication system supporting email/password
          login and OAuth providers such as GitHub and Google. The project
          emphasizes secure token handling, user management, and clean API
          design.
        </p>
        <p>
          This system is being developed with real-world security and scalability
          considerations, including proper database modeling and extensible
          authorization logic.
        </p>
      </section>

      <section>
        <h2>Cloud Text-to-Speech Platform</h2>
        <p><strong>Status:</strong> Completed</p>
        <p>
          A cloud-based text-to-speech service built using AWS Polly and managed
          through infrastructure-as-code with Terraform. The project focuses on
          cloud resource provisioning, permissions, and deployment workflows.
        </p>
        <p>
          This project demonstrates practical experience with AWS services and
          designing cloud-native systems using declarative infrastructure.
        </p>
      </section>

      <section>
        <h2>Full-Stack Cloud Application</h2>
        <p><strong>Status:</strong> Completed</p>
        <p>
          A full-stack web application deployed using AWS Amplify, integrating
          frontend components with backend services. The project highlights
          end-to-end development, deployment automation, and environment
          configuration.
        </p>
      </section>

      <section>
        <h2>Systems Design Service</h2>
        <p><strong>Status:</strong> Planned</p>
        <p>
          A backend service designed to explore core systems design concepts such
          as request routing, data modeling, rate limiting, and scalability. The
          implementation will prioritize design clarity and trade-off analysis
          before coding.
        </p>
      </section>
    </main>
  );
}
