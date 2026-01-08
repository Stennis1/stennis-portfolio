import Container from "../components/Container";
import styles from "./page.module.css";

export default function AboutPage() {
  return (
    <Container>
      <div className={styles.aboutContent}>
        <div className={styles.aboutHeader}>
          <h1>About Me</h1>
          <p className={styles.subtitle}>
            Backend Systems & Cloud Infrastructure Specialist
          </p>
        </div>
        
        <div className={styles.aboutGrid}>
          <div className={styles.aboutMain}>
            <p className={styles.lead}>
              I'm a software engineer focused on building scalable backend systems, 
              cloud infrastructure, and full-stack applications. With a strong emphasis 
              on clean architecture and system design, I create solutions that are both 
              robust and maintainable.
            </p>
            
            <div className={styles.expertiseSection}>
              <h2>Areas of Expertise</h2>
              <div className={styles.expertiseGrid}>
                <div className={styles.expertiseCard}>
                  <h3>Backend Development</h3>
                  <p>Designing and implementing scalable APIs, authentication systems, and database architecture.</p>
                </div>
                <div className={styles.expertiseCard}>
                  <h3>Cloud Infrastructure</h3>
                  <p>AWS services, infrastructure-as-code with Terraform, and deployment automation.</p>
                </div>
                <div className={styles.expertiseCard}>
                  <h3>System Design</h3>
                  <p>Architecting distributed systems with focus on scalability, reliability, and security.</p>
                </div>
                <div className={styles.expertiseCard}>
                  <h3>Full-Stack Development</h3>
                  <p>End-to-end application development with modern frameworks and best practices.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className={styles.aboutSidebar}>
            <div className={styles.sidebarCard}>
              <h3>Technical Stack</h3>
              <ul className={styles.techList}>
                <li>TypeScript / JavaScript</li>
                <li>Node.js / Express</li>
                <li>Python / Django</li>
                <li>AWS (Polly, Amplify, Lambda)</li>
                <li>Terraform / Infrastructure-as-Code</li>
                <li>PostgreSQL / MongoDB</li>
                <li>Next.js / React</li>
                <li>Docker / Kubernetes</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}