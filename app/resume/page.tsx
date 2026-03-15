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
              Software Engineer focused on backend systems, cloud
              infrastructure, AI-assisted product development, and practical
              software delivery. Experienced across full-stack development,
              API design, cloud deployments, and developer tooling, with a
              strong interest in reliability, system design, and maintainable
              engineering.
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
                  <li>JavaScript / TypeScript</li>
                  <li>Python</li>
                  <li>Flutter / Dart</li>
                  <li>SQL</li>
                </ul>
              </div>

              <div className={styles.skillCategory}>
                <h3>Backend & APIs</h3>
                <ul>
                  <li>Node.js / Express</li>
                  <li>FastAPI</li>
                  <li>RESTful API Design</li>
                  <li>Authentication & Authorization</li>
                </ul>
              </div>

              <div className={styles.skillCategory}>
                <h3>Frontend</h3>
                <ul>
                  <li>React</li>
                  <li>Next.js (App Router)</li>
                  <li>Flutter</li>
                  <li>Responsive UI Development</li>
                </ul>
              </div>

              <div className={styles.skillCategory}>
                <h3>Cloud & DevOps</h3>
                <ul>
                  <li>AWS (EC2, S3, Lambda, IAM, CloudFront, API Gateway)</li>
                  <li>Terraform</li>
                  <li>GitHub Actions</li>
                  <li>Docker / Kubernetes</li>
                </ul>
              </div>

              <div className={styles.skillCategory}>
                <h3>Databases & Systems</h3>
                <ul>
                  <li>MySQL</li>
                  <li>DynamoDB</li>
                  <li>Redis</li>
                  <li>System Administration</li>
                </ul>
              </div>

              <div className={styles.skillCategory}>
                <h3>AI & Tooling</h3>
                <ul>
                  <li>AI-Assisted Development</li>
                  <li>Prompt Engineering</li>
                  <li>AI Output Validation</li>
                  <li>Git / GitHub</li>
                </ul>
              </div>

              <div className={styles.skillCategory}>
                <h3>Design & Workflow</h3>
                <ul>
                  <li>UI / UX Design</li>
                  <li>Figma Prototyping</li>
                  <li>Agile Collaboration</li>
                  <li>Responsive Design</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Project Experience */}
          <section className={styles.resumeSection}>
            <h2>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
              Project Experience
            </h2>

            <div className={styles.projectHighlights}>
              <div className={styles.projectHighlight}>
                <h3>AI Resume Analyzer</h3>
                <p className={styles.institution}>January 2026</p>
                <p className={styles.projectDesc}>
                  Built an AI-powered web application that analyzes resumes
                  against job descriptions and returns a match score, missing
                  skills, and actionable improvement suggestions.
                </p>
                <span className={styles.techStack}>
                  Next.js · FastAPI · Python · LLM APIs · Vercel · Render
                </span>
              </div>

              <div className={styles.projectHighlight}>
                <h3>Customer Service AI Agent</h3>
                <p className={styles.institution}>February 2026</p>
                <p className={styles.projectDesc}>
                  Built a LangChain-based customer support agent with
                  retrieval-augmented responses from a local knowledge base,
                  optional API tooling for order workflows, and both CLI and
                  Streamlit interfaces.
                </p>
                <span className={styles.techStack}>
                  Python · LangChain · OpenAI API · ChromaDB · Streamlit ·
                  Render
                </span>
              </div>

              <div className={styles.projectHighlight}>
                <h3>Text-Organizer Linux Desktop Utility</h3>
                <p className={styles.institution}>January 2026</p>
                <p className={styles.projectDesc}>
                  Developed a lightweight Linux desktop application for offline
                  text transformation and packaged it as an AppImage for
                  portable distribution across Linux systems.
                </p>
                <span className={styles.techStack}>
                  Python · Linux · AppImage · PyInstaller · linuxdeploy
                </span>
              </div>

              <div className={styles.projectHighlight}>
                <h3>Text-to-Speech Application</h3>
                <p className={styles.institution}>September 2025</p>
                <p className={styles.projectDesc}>
                  Built a serverless text-to-speech web application using AWS
                  Polly, Lambda, API Gateway, CloudFront, and S3, with
                  infrastructure provisioned through Terraform.
                </p>
                <span className={styles.techStack}>
                  AWS Polly · Lambda · API Gateway · CloudFront · S3 ·
                  Terraform
                </span>
              </div>

              <div className={styles.projectHighlight}>
                <h3>Full-Stack Cloud Application</h3>
                <p className={styles.institution}>August 2025</p>
                <p className={styles.projectDesc}>
                  Deployed a full-stack application with AWS Amplify, AppSync,
                  Lambda, and DynamoDB, focusing on deployment automation,
                  serverless architecture, and scalable data design.
                </p>
                <span className={styles.techStack}>
                  AWS Amplify · AppSync · Lambda · DynamoDB · React ·
                  TypeScript
                </span>
              </div>

              <div className={styles.projectHighlight}>
                <h3>DevOps and Containerization Technologies</h3>
                <p className={styles.institution}>July 2025</p>
                <p className={styles.projectDesc}>
                  Worked on containerized deployment workflows using Docker,
                  Kubernetes, Amazon ECR, Amazon ECS, and load balancing to
                  support reliable application delivery in cloud environments.
                </p>
                <span className={styles.techStack}>
                  Docker · Kubernetes · Amazon ECR · Amazon ECS · ALB · AWS
                </span>
              </div>
            </div>
          </section>

          {/* Experience */}
          <section className={styles.resumeSection}>
            <h2>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2z" />
              </svg>
              Experience
            </h2>

            <div className={styles.projectHighlights}>
              <div className={styles.projectHighlight}>
                <h3>Junior Software Engineer, OwnKey</h3>
                <p className={styles.institution}>July 2025 - December 2025</p>
                <p className={styles.projectDesc}>
                  Developed Flutter features including video shorts and
                  interactive property listings, collaborated across backend,
                  testing, and operations teams, and improved REST API data
                  flows, caching, and frontend responsiveness.
                </p>
              </div>

              <div className={styles.projectHighlight}>
                <h3>Graduate Software Engineer, Solar Taxi</h3>
                <p className={styles.institution}>
                  October 2024 - February 2025
                </p>
                <p className={styles.projectDesc}>
                  Delivered a charging locator application with a small team,
                  designed high-fidelity Figma prototypes, and contributed to a
                  website redesign that achieved strong accessibility results.
                </p>
              </div>

              <div className={styles.projectHighlight}>
                <h3>
                  Assistant IT Officer, Ministry of Environment, Science,
                  Technology and Innovation
                </h3>
                <p className={styles.institution}>May 2024 - July 2024</p>
                <p className={styles.projectDesc}>
                  Diagnosed and resolved technical support requests, supported
                  day-to-day IT operations, and helped improve response times
                  and service quality for end users.
                </p>
              </div>

              <div className={styles.projectHighlight}>
                <h3>IT Support (Systems Administration), Ghana Commodity Exchange</h3>
                <p className={styles.institution}>August 2023 - April 2024</p>
                <p className={styles.projectDesc}>
                  Supported and optimized IT infrastructure, led security
                  awareness efforts, and automated routine administrative tasks
                  to improve operational efficiency.
                </p>
              </div>
            </div>
          </section>

          {/* Education */}
          <section className={styles.resumeSection}>
            <h2>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
              </svg>
              Education
            </h2>

            <div className={styles.educationItem}>
              <h3>MBA, Management Information Systems</h3>
              <p className={styles.institution}>
                University of Ghana Business School
              </p>
              <p className={styles.details}>Accra, Ghana · February 2025</p>
            </div>

            <div className={styles.educationItem}>
              <h3>Bachelor of Science in Information Technology</h3>
              <p className={styles.institution}>University of Ghana</p>
              <p className={styles.details}>Accra, Ghana · July 2021</p>
            </div>
          </section>

          {/* Certifications */}
          <section className={styles.resumeSection}>
            <h2>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 15.39 8.24 17.66l1-4.28-3.32-2.88 4.38-.38L12 6l1.7 4.12 4.38.38-3.32 2.88 1 4.28z" />
              </svg>
              Certifications
            </h2>

            <div className={styles.skillsGrid}>
              <div className={styles.skillCategory}>
                <h3>Cloud & Security</h3>
                <ul>
                  <li>AWS Certified Solutions Architect - Associate</li>
                  <li>AWS Knowledge: Cloud Essentials</li>
                  <li>CC (Certified in Cybersecurity), ISC2</li>
                </ul>
              </div>

              <div className={styles.skillCategory}>
                <h3>Software & Product</h3>
                <ul>
                  <li>Frontend Web Development, ALX Africa</li>
                  <li>Backend Web Development, ALX Africa</li>
                  <li>Project Management, Cambridge Center of Excellence</li>
                </ul>
              </div>

              <div className={styles.skillCategory}>
                <h3>Professional Development</h3>
                <ul>
                  <li>ALX Freelancer Academy, ALX Ventures</li>
                  <li>
                    ALX Ventures Gig-at-a-Startup Programme (Prototype
                    Designer)
                  </li>
                  <li>
                    Professional Development for the Digital Age, ALX Africa
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Container>
  );
}
