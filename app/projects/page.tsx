import Container from "../components/Container";
import styles from "./page.module.css";

export default function ProjectsPage() {
  const projects = [
    {
      title: "Authentication & Authorization Platform",
      status: "In Progress",
      statusColor: "var(--primary-color)",
      description:
        "A backend-focused authentication system supporting email/password login and OAuth providers (GitHub, Google). Emphasizes secure token handling, user management, and clean API design.",
      details: [
        "Secure JWT-based authentication flow",
        "Multi-provider OAuth 2.0 integration",
        "Role-based access control system",
        "Rate limiting and security headers",
        "PostgreSQL for user data storage",
      ],
      technologies: [
        "TypeScript",
        "Node.js",
        "Express",
        "PostgreSQL",
        "Redis",
        "OAuth 2.0",
      ],
      githubUrl: "https://github.com/Stennis1/devops-portfolio-project",
      liveUrl: null,
      featured: true,
    },
    {
      title: "Cloud Text-to-Speech Platform",
      status: "Completed",
      statusColor: "#10b981",
      description:
        "Cloud-based text-to-speech service using AWS Polly, managed through Terraform. Focuses on cloud resource provisioning, permissions, and deployment workflows.",
      details: [
        "Infrastructure-as-code with Terraform",
        "AWS Lambda for serverless processing",
        "S3 for audio file storage",
        "API Gateway for REST endpoints",
        "Cost optimization strategies",
      ],
      technologies: [
        "Python",
        "AWS Polly",
        "Terraform",
        "Lambda",
        "S3",
        "API Gateway",
      ],
      githubUrl: "https://github.com/Stennis1/tts-aws-cloud-project",
      liveUrl: "https://d1khe43zuwow7v.cloudfront.net/",
      featured: true,
    },
    {
      title: "Full-Stack Cloud Application",
      status: "Completed",
      statusColor: "#10b981",
      description:
        "Full-stack web application deployed using AWS Amplify, integrating frontend components with backend services. Highlights end-to-end development and deployment automation.",
      details: [
        "Serverless backend with AWS AppSync",
        "React frontend with TypeScript",
        "CI/CD pipeline with Amplify",
        "Real-time data synchronization",
        "Environment-based configuration",
      ],
      technologies: [
        "React",
        "TypeScript",
        "AWS Amplify",
        "GraphQL",
        "DynamoDB",
      ],
      githubUrl: "https://github.com/Stennis1/profilesapp",
      liveUrl: "https://main.dmx54kntsq6ft.amplifyapp.com/",
      featured: true,
    },
    {
      title: "Systems Design Service",
      status: "Planned",
      statusColor: "#6b7280",
      description:
        "Backend service exploring core systems design concepts: request routing, data modeling, rate limiting, and scalability. Prioritizes design clarity and trade-off analysis.",
      details: [
        "Distributed request routing",
        "Data partitioning strategies",
        "Rate limiting algorithms",
        "Caching layer implementation",
        "Monitoring and observability",
      ],
      technologies: ["Go", "Redis", "Kafka", "Prometheus", "Docker"],
      githubUrl: null,
      liveUrl: null,
      featured: false,
    },
  ];

  return (
    <Container>
      <div className={styles.projectsContent}>
        <div className={styles.projectsHeader}>
          <h1>Projects & Portfolio</h1>
          <p className={styles.subtitle}>
            A showcase of my work in backend systems, cloud infrastructure, and
            full-stack development
          </p>
        </div>

        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <div
              key={index}
              className={`${styles.projectCard} ${project.featured ? styles.featured : ""}`}
            >
              <div className={styles.projectHeader}>
                <div className={styles.projectTitleSection}>
                  <h2>{project.title}</h2>
                  <span
                    className={styles.statusBadge}
                    style={{
                      backgroundColor: `${project.statusColor}20`,
                      color: project.statusColor,
                    }}
                  >
                    {project.status}
                  </span>
                </div>

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.githubLink}
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    View Code
                  </a>
                )}
              </div>

              <p className={styles.projectDescription}>{project.description}</p>

              <div className={styles.projectDetails}>
                <h3>Key Features:</h3>
                <ul className={styles.detailsList}>
                  {project.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              </div>

              <div className={styles.projectFooter}>
                <div className={styles.technologies}>
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className={styles.techTag}>
                      {tech}
                    </span>
                  ))}
                </div>

                <div className={styles.projectLinks}>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${styles.linkButton} ${styles.secondary}`}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      GitHub
                    </a>
                  )}

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${styles.linkButton} ${styles.primary}`}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 15.889v-2.223s-3.78-.114-7 3.333c1.513-6.587 7-7.778 7-7.778v-2.221l5 4.425-5 4.464z" />
                      </svg>
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
