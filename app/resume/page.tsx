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
              A focused overview of my experience in cloud infrastructure,
              DevOps, and platform engineering
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
              Software and Cloud Engineer with experience designing
              cloud-native infrastructure, automating deployments, building
              CI/CD pipelines, and deploying containerized applications on AWS
              and cloud environments. Strong foundation in Linux
              administration, Infrastructure as Code, cloud networking, and
              platform reliability.
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
                <h3>Programming</h3>
                <ul>
                  <li>Node.js / TypeScript</li>
                  <li>Python</li>
                  <li>Flutter / Dart</li>
                  <li>SQL</li>
                </ul>
              </div>

              <div className={styles.skillCategory}>
                <h3>Backend & APIs</h3>
                <ul>
                  <li>REST APIs / RESTful API Design</li>
                  <li>FastAPI</li>
                  <li>Authentication & Authorization</li>
                  <li>System Design</li>
                  <li>Distributed Systems</li>
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
                <h3>Cloud & Infrastructure</h3>
                <ul>
                  <li>AWS (EC2, S3, Lambda, IAM, CloudFront, API Gateway)</li>
                  <li>Terraform</li>
                  <li>CloudFormation</li>
                </ul>
              </div>

              <div className={styles.skillCategory}>
                <h3>CI/CD & Containers</h3>
                <ul>
                  <li>GitHub Actions</li>
                  <li>AWS CodePipeline / CodeDeploy</li>
                  <li>Docker / Kubernetes</li>
                </ul>
              </div>

              <div className={styles.skillCategory}>
                <h3>Databases</h3>
                <ul>
                  <li>MySQL</li>
                  <li>DynamoDB</li>
                  <li>Redis</li>
                </ul>
              </div>

              <div className={styles.skillCategory}>
                <h3>Monitoring & Observability</h3>
                <ul>
                  <li>AWS CloudWatch (Logs, Metrics, Alarms)</li>
                </ul>
              </div>

              <div className={styles.skillCategory}>
                <h3>Networking</h3>
                <ul>
                  <li>TCP/IP, DNS</li>
                  <li>HTTP/HTTPS, TLS</li>
                </ul>
              </div>

              <div className={styles.skillCategory}>
                <h3>Operating Systems</h3>
                <ul>
                  <li>Linux Administration (Ubuntu)</li>
                  <li>Bash Scripting</li>
                  <li>System Administration</li>
                </ul>
              </div>

              <div className={styles.skillCategory}>
                <h3>AI & Tooling</h3>
                <ul>
                  <li>AI-Assisted Development</li>
                  <li>Prompt Engineering</li>
                  <li>AI Output Validation</li>
                </ul>
              </div>

              <div className={styles.skillCategory}>
                <h3>Version Control</h3>
                <ul>
                  <li>Git</li>
                  <li>GitHub</li>
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
                <h3>AI Customer Service Agent</h3>
                <p className={styles.institution}>March 2026</p>
                <p className={styles.projectDesc}>
                  Designed and developed an AI-powered customer service
                  assistant that provides intelligent, context-aware responses
                  to customer inquiries using a Large Language Model. Built
                  backend APIs to manage conversation flows, session context,
                  and AI inference for real-time interactions, and applied
                  prompt engineering to improve response accuracy and
                  consistency.
                </p>
                <span className={styles.techStack}>
                  LLM APIs · Backend APIs · Prompt Engineering
                </span>
              </div>

              <div className={styles.projectHighlight}>
                <h3>AI Resume Analyzer</h3>
                <p className={styles.institution}>February 2026</p>
                <p className={styles.projectDesc}>
                  AI-powered application that analyzes resumes against job
                  descriptions, generating match scores, skill gaps, and
                  actionable recommendations using LLM APIs. Built a FastAPI
                  backend to orchestrate LLM inference with structured JSON
                  outputs suitable for production systems.
                </p>
                <span className={styles.techStack}>
                  FastAPI · Python · LLM APIs · Prompt Engineering
                </span>
              </div>

              <div className={styles.projectHighlight}>
                <h3>Text-Organizer – Linux Desktop Utility Tool</h3>
                <p className={styles.institution}>January 2026</p>
                <p className={styles.projectDesc}>
                  Built a lightweight offline desktop application for text
                  transformation workflows and distributed it as an AppImage
                  for cross-distribution compatibility without installation.
                </p>
                <span className={styles.techStack}>
                  Python · Linux · AppImage · PyInstaller · linuxdeploy
                </span>
              </div>

              <div className={styles.projectHighlight}>
                <h3>Text-to-Speech Application</h3>
                <p className={styles.institution}>September 2025</p>
                <p className={styles.projectDesc}>
                  Developed a scalable serverless application using AWS Polly,
                  Lambda, API Gateway, S3, and CloudFront, with infrastructure
                  deployment automated through Terraform. Designed IAM roles
                  and least-privilege access policies for secure
                  service-to-service communication.
                </p>
                <span className={styles.techStack}>
                  AWS Polly · Lambda · API Gateway · CloudFront · S3 ·
                  Terraform
                </span>
              </div>

              <div className={styles.projectHighlight}>
                <h3>Full Stack Application</h3>
                <p className={styles.institution}>August 2025</p>
                <p className={styles.projectDesc}>
                  Deployed a full-stack application via AWS Amplify with
                  serverless authentication logic designed to scale to 10K+
                  users using Lambda and DynamoDB, including on-demand
                  capacity and partition key design for horizontal scaling.
                </p>
                <span className={styles.techStack}>
                  AWS Amplify · AppSync · Lambda · DynamoDB
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
                <h3>Freelance Software & Cloud Engineer</h3>
                <p className={styles.institution}>January 2026 - Present</p>
                <p className={styles.projectDesc}>
                  Develop full-stack web applications and backend services for
                  client projects using modern JavaScript frameworks, design
                  RESTful APIs and database schemas, and support AI-related
                  initiatives through data validation and workflow
                  optimization.
                </p>
              </div>

              <div className={styles.projectHighlight}>
                <h3>Software Engineer, OwnKey</h3>
                <p className={styles.institution}>July 2025 - December 2025</p>
                <p className={styles.projectDesc}>
                  Collaborated cross-functionally with backend, QA, and
                  operations teams in Agile sprints to deliver scalable,
                  production-ready features. Optimized REST API data flows and
                  frontend performance through caching, and launched key
                  product features (video shorts, interactive listings) that
                  increased average session duration by 25%.
                </p>
              </div>

              <div className={styles.projectHighlight}>
                <h3>Software Engineer, Solar Taxi</h3>
                <p className={styles.institution}>
                  October 2024 - February 2025
                </p>
                <p className={styles.projectDesc}>
                  Created high-fidelity Figma prototypes for key user flows,
                  reducing frontend development time by 50%, and contributed
                  to product design and usability improvements to enhance user
                  interaction and adoption.
                </p>
              </div>

              <div className={styles.projectHighlight}>
                <h3>
                  IT Officer, Ministry of Environment, Science, Technology and
                  Innovation
                </h3>
                <p className={styles.institution}>May 2024 - July 2024</p>
                <p className={styles.projectDesc}>
                  Resolved technical issues and improved system performance,
                  reducing resolution time by 40%, and performed
                  organization-wide IT audits assessing system performance,
                  asset utilization, and compliance standards.
                </p>
              </div>

              <div className={styles.projectHighlight}>
                <h3>IT Support / Systems Administration, Ghana Commodity Exchange</h3>
                <p className={styles.institution}>August 2023 - April 2024</p>
                <p className={styles.projectDesc}>
                  Managed and optimized internal systems for reliability and
                  operational efficiency, automated administrative workflows,
                  and analyzed large datasets to build Power BI dashboards for
                  data-driven decision-making.
                </p>
              </div>

              <div className={styles.projectHighlight}>
                <h3>ICT/Computing Tutor, Winners Family School</h3>
                <p className={styles.institution}>April 2020 - June 2025</p>
                <p className={styles.projectDesc}>
                  Lectured ICT and Computing curriculum to high school
                  students, designed lesson plans tailored to varying skill
                  levels, and prepared students for BECE ICT examinations
                  through clear, exam-focused instruction.
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
                  <li>AWS Certified Developer - Associate</li>
                  <li>AWS Solutions Architect Certification - Associate</li>
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
            </div>
          </section>
        </div>
      </div>
    </Container>
  );
}
