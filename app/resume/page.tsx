import Container from "../components/Container";
import styles from "./page.module.css";

export default function ResumePage() {
  return (
    <Container>
      <div className={styles.resumeContent}>
        <div className={styles.resumeHeader}>
          <div className={styles.headerContent}>
            <h1>Resume</h1>
            <p className={styles.subtitle}>
              A focused overview of my experience, technical skills, and
              engineering projects
            </p>
          </div>
          <a
            href="/Stennis_Smith_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.downloadButton}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
            </svg>
            Download PDF
          </a>
        </div>

        <div className={styles.resumeSections}>
          {/* Profile */}
          <section className={styles.resumeSection}>
            <h2>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
              Profile
            </h2>
            <p>
              Software Engineer focused on backend systems, cloud infrastructure,
              and practical AI integration. Experienced in designing APIs,
              building production-ready services, packaging developer tools, and
              deploying applications with real-world constraints. Strong
              interest in system design, reliability, and clean, maintainable
              code.
            </p>
          </section>

          {/* Technical Skills */}
          <section className={styles.resumeSection}>
            <h2>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2z" />
              </svg>
              Technical Skills
            </h2>

            <div className={styles.skillsGrid}>
              <div className={styles.skillCategory}>
                <h3>Languages</h3>
                <ul>
                  <li>JavaScript (ES6+) / TypeScript</li>
                  <li>Python</li>
                  <li>SQL</li>
                  <li>Java (familiar)</li>
                </ul>
              </div>

              <div className={styles.skillCategory}>
                <h3>Backend & APIs</h3>
                <ul>
                  <li>Node.js / Express</li>
                  <li>FastAPI</li>
                  <li>RESTful API Design</li>
                  <li>Authentication & Authorization (JWT, OAuth 2.0)</li>
                </ul>
              </div>

              <div className={styles.skillCategory}>
                <h3>Frontend</h3>
                <ul>
                  <li>React</li>
                  <li>Next.js (App Router)</li>
                  <li>Tailwind CSS</li>
                  <li>Responsive Design</li>
                </ul>
              </div>

              <div className={styles.skillCategory}>
                <h3>Cloud & Infrastructure</h3>
                <ul>
                  <li>AWS (EC2, S3, Lambda, RDS, API Gateway)</li>
                  <li>Terraform</li>
                  <li>Serverless Architectures</li>
                  <li>CI/CD Pipelines</li>
                </ul>
              </div>

              <div className={styles.skillCategory}>
                <h3>Databases & Caching</h3>
                <ul>
                  <li>PostgreSQL</li>
                  <li>DynamoDB</li>
                  <li>Redis</li>
                </ul>
              </div>

              <div className={styles.skillCategory}>
                <h3>AI & Tooling</h3>
                <ul>
                  <li>LLM APIs & Prompt Engineering</li>
                  <li>Structured JSON AI Outputs</li>
                  <li>Linux Tooling & App Packaging</li>
                  <li>Git / GitHub</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Projects */}
          <section className={styles.resumeSection}>
            <h2>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
              Selected Projects
            </h2>

            <div className={styles.projectHighlights}>
              <div className={styles.projectHighlight}>
                <h3>AI Resume Analyzer</h3>
                <p className={styles.projectDesc}>
                  Built and deployed a full-stack AI application that analyzes
                  resumes against job descriptions and returns a match score,
                  missing skills, and actionable improvement suggestions using
                  structured LLM output.
                </p>
                <span className={styles.techStack}>
                  Next.js · FastAPI · Python · LLM APIs · Vercel · Render
                </span>
              </div>

              <div className={styles.projectHighlight}>
                <h3>Text Organizer</h3>
                <p className={styles.projectDesc}>
                  Developed a lightweight Linux desktop utility for offline text
                  transformation and packaged it as an AppImage for portable
                  distribution across Linux systems.
                </p>
                <span className={styles.techStack}>
                  Python · Linux · AppImage · PyInstaller
                </span>
              </div>

              <div className={styles.projectHighlight}>
                <h3>Cloud Text-to-Speech Platform</h3>
                <p className={styles.projectDesc}>
                  Implemented a serverless text-to-speech service using AWS
                  Polly, with infrastructure provisioned via Terraform and
                  optimized for cost and scalability.
                </p>
                <span className={styles.techStack}>
                  AWS · Terraform · Python · Lambda · S3
                </span>
              </div>
            </div>
          </section>

          {/* Education */}
          <section className={styles.resumeSection}>
            <h2>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
              </svg>
              Education & Certifications
            </h2>

            <div className={styles.educationItem}>
              <h3>MBA, Management Information Systems</h3>
              <p className={styles.institution}>
                University of Ghana Business School
              </p>
            </div>

            <div className={styles.educationItem}>
              <h3>Bachelor of Science in Information Technology</h3>
              <p className={styles.institution}>University of Ghana</p>
            </div>

            <div className={styles.educationItem}>
              <h3>AWS Certified Solutions Architect – Associate</h3>
              <p className={styles.institution}>Amazon Web Services</p>
            </div>
          </section>
        </div>
      </div>
    </Container>
  );
}
