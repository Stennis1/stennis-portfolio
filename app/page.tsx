import Link from "next/link";
import Container from "./components/Container";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <Container>
      <div className={styles.homeContent}>
        {/* HERO */}
        <section className={styles.heroSection}>
          <h1 className={styles.heroTitle}>
            Backend Systems & <br />
            <span className={styles.highlight}>Cloud Infrastructure</span>
          </h1>

          <p className={styles.heroSubtitle}>
           I’m a software engineer with a strong interest in backend systems, cloud 
            infrastructure, full-stack application development and Artificial Intelligence.
          </p>

          <div className={styles.heroActions}>
            <Link href="/projects" className={styles.primaryButton}>
              View My Work
            </Link>
            <Link href="/contact" className={styles.secondaryButton}>
              Get in Touch
            </Link>
          </div>
        </section>

        {/* FEATURED EXPERTISE */}
        <section className={styles.featuredSection}>
          <div className={styles.sectionHeader}>
            <h2>Core Expertise</h2>
            <p>Where I focus my engineering effort</p>
          </div>

<div className={styles.expertiseGrid}>
  <div className={styles.expertiseCard}>
    <h3>Backend Architecture</h3>
    <p>
      Designing and implementing scalable backend services, RESTful APIs, and
      service-layer architectures with a focus on maintainability, performance,
      and clear domain boundaries.
    </p>
  </div>

  <div className={styles.expertiseCard}>
    <h3>Cloud Infrastructure</h3>
    <p>
      Building and deploying cloud-native systems on AWS using
      infrastructure-as-code tools such as Terraform, with an emphasis on
      automation, reliability, and cost-aware design.
    </p>
  </div>

  <div className={styles.expertiseCard}>
    <h3>Systems Design</h3>
    <p>
      Designing distributed systems by reasoning about scalability, data
      modeling, service communication, and operational trade-offs under real
      production constraints.
    </p>
  </div>

  <div className={styles.expertiseCard}>
    <h3>Authentication & Security</h3>
    <p>
      Implementing secure authentication and authorization systems including
      OAuth-based flows, token management, and access control.
    </p>
  </div>
</div>

        </section>

        {/* CTA */}
        <section className={styles.ctaSection}>
          <h2>Let’s Build Something Meaningful</h2>
          <p>
            I’m always interested in working on challenging backend and
            infrastructure problems.
          </p>
          <Link href="/contact" className={styles.ctaButton}>
            Start a Conversation
          </Link>
        </section>
      </div>
    </Container>
  );
}
