import Link from 'next/link';
import Container from './components/Container';
import styles from './page.module.css';

export default function HomePage() {
  return (
    <Container>
      <div className={styles.homeContent}>
        <div className={styles.heroSection}>
          <h1 className={styles.heroTitle}>
            Backend Systems &<br />
            <span className={styles.highlight}>Cloud Infrastructure</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Software Engineer specializing in scalable systems, secure authentication, 
            and cloud-native applications. I build robust backend architectures that power 
            exceptional digital experiences.
          </p>
          
          <div className={styles.heroActions}>
            <Link href="/projects" className={styles.primaryButton}>
              View My Work
            </Link>
            <Link href="/contact" className={styles.secondaryButton}>
              Get in Touch
            </Link>
          </div>
        </div>

        <div className={styles.featuredSection}>
          <div className={styles.sectionHeader}>
            <h2>Featured Expertise</h2>
            <p>Areas where I bring the most value to engineering teams</p>
          </div>
          
          <div className={styles.expertiseGrid}>
            <div className={styles.expertiseCard}>
              <div className={styles.expertiseIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
              <h3>Backend Architecture</h3>
              <p>Designing and implementing scalable APIs, authentication systems, and microservices architecture with focus on performance and security.</p>
            </div>
            
            <div className={styles.expertiseCard}>
              <div className={styles.expertiseIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>
                </svg>
              </div>
              <h3>Cloud Infrastructure</h3>
              <p>AWS services, infrastructure-as-code with Terraform, container orchestration with Kubernetes, and deployment automation pipelines.</p>
            </div>
            
            <div className={styles.expertiseCard}>
              <div className={styles.expertiseIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                </svg>
              </div>
              <h3>System Design</h3>
              <p>Architecting distributed systems with focus on scalability, reliability, and security. Experience with database design, caching strategies, and API design patterns.</p>
            </div>
          </div>
        </div>

        <div className={styles.ctaSection}>
          <h2>Let's Build Something Amazing</h2>
          <p>Looking for a backend engineer to bring your next project to life? I'm always interested in new challenges and opportunities.</p>
          <Link href="/contact" className={styles.ctaButton}>
            Start a Conversation
          </Link>
        </div>
      </div>
    </Container>
  );
}