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
              A comprehensive overview of my professional experience, skills, and accomplishments
            </p>
          </div>
          <a
            href="/Stennis_Smith_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.downloadButton}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
            </svg>
            Download PDF
          </a>
        </div>

        <div className={styles.resumeSections}>
          <section className={styles.resumeSection}>
            <h2>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
              Profile
            </h2>
            <p>
              Software Engineer specializing in backend systems, cloud infrastructure, and full-stack development. 
              Experienced in designing scalable architectures, implementing secure authentication systems, and 
              deploying cloud-native applications. Passionate about clean code, system design, and mentorship.
            </p>
          </section>

          <section className={styles.resumeSection}>
            <h2>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/>
              </svg>
              Technical Skills
            </h2>
            <div className={styles.skillsGrid}>
              <div className={styles.skillCategory}>
                <h3>Languages & Frameworks</h3>
                <ul>
                  <li>TypeScript / JavaScript (ES6+)</li>
                  <li>Node.js / Express</li>
                  <li>Python / Django</li>
                  <li>Java / Spring Boot</li>
                  <li>Go</li>
                </ul>
              </div>
              <div className={styles.skillCategory}>
                <h3>Cloud & Infrastructure</h3>
                <ul>
                  <li>AWS (EC2, S3, Lambda, RDS)</li>
                  <li>Terraform / CloudFormation</li>
                  <li>Docker / Kubernetes</li>
                  <li>CI/CD Pipelines</li>
                  <li>Serverless Architecture</li>
                </ul>
              </div>
              <div className={styles.skillCategory}>
                <h3>Databases</h3>
                <ul>
                  <li>PostgreSQL / MySQL</li>
                  <li>MongoDB / DynamoDB</li>
                  <li>Redis / Memcached</li>
                  <li>Database Design & Optimization</li>
                </ul>
              </div>
              <div className={styles.skillCategory}>
                <h3>Tools & Practices</h3>
                <ul>
                  <li>Git / GitHub Actions</li>
                  <li>REST / GraphQL APIs</li>
                  <li>Test-Driven Development</li>
                  <li>Agile / Scrum Methodologies</li>
                  <li>System Design & Architecture</li>
                </ul>
              </div>
            </div>
          </section>

          <section className={styles.resumeSection}>
            <h2>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
              </svg>
              Projects
            </h2>
            <div className={styles.projectHighlights}>
              <div className={styles.projectHighlight}>
                <h3>Authentication & Authorization Platform</h3>
                <p className={styles.projectDesc}>
                  Built a secure authentication system supporting multiple OAuth providers, 
                  implementing JWT-based sessions and role-based access control.
                </p>
                <span className={styles.techStack}>Node.js · TypeScript · PostgreSQL · Redis</span>
              </div>
              <div className={styles.projectHighlight}>
                <h3>Cloud Text-to-Speech Platform</h3>
                <p className={styles.projectDesc}>
                  Developed a serverless text-to-speech service using AWS Polly, 
                  with infrastructure managed through Terraform and automated deployments.
                </p>
                <span className={styles.techStack}>AWS · Terraform · Python · Lambda</span>
              </div>
              <div className={styles.projectHighlight}>
                <h3>Full-Stack Cloud Application</h3>
                <p className={styles.projectDesc}>
                  Created a full-stack application with React frontend and AWS backend services, 
                  implementing real-time features and automated CI/CD pipeline.
                </p>
                <span className={styles.techStack}>React · AWS Amplify · GraphQL · TypeScript</span>
              </div>
            </div>
          </section>

          <section className={styles.resumeSection}>
            <h2>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
              </svg>
              Education & Certifications
            </h2>
            <div className={styles.educationItem}>
              <h3>Bachelor of Science in Computer Science</h3>
              <p className={styles.institution}>University Name</p>
              <p className={styles.details}>Graduated with Honors · Relevant Coursework: Algorithms, Distributed Systems, Cloud Computing</p>
            </div>
            <div className={styles.educationItem}>
              <h3>AWS Certified Solutions Architect - Associate</h3>
              <p className={styles.institution}>Amazon Web Services</p>
              <p className={styles.details}>Validation of cloud architecture design and implementation skills</p>
            </div>
          </section>
        </div>
      </div>
    </Container>
  );
}