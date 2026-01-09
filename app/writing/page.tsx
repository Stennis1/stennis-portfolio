import Container from "../components/Container";
import styles from "./page.module.css";

export default function WritingPage() {
  const articles = [
    {
      title: "Designing Scalable Authentication Systems",
      description: "A deep dive into building secure and scalable authentication systems with modern OAuth flows and JWT management.",
      date: "2024-01-15",
      readTime: "8 min read",
      link: "https://stennissmith.substack.com/p/designing-scalable-authentication-systems"
    },
    {
      title: "Infrastructure as Code Best Practices",
      description: "Lessons learned from managing cloud infrastructure with Terraform and AWS, focusing on maintainability and collaboration.",
      date: "2023-11-28",
      readTime: "10 min read",
      link: "https://stennissmith.substack.com/p/infrastructure-as-code-best-practices"
    },
    {
      title: "Database Design for Scale",
      description: "Patterns and anti-patterns in database design when building systems that need to handle millions of requests.",
      date: "2023-09-12",
      readTime: "12 min read",
      link: "https://stennissmith.substack.com/p/database-design-for-scale"
    },
    {
      title: "The Psychology of Clean Code",
      description: "How writing maintainable code affects team productivity and long-term project success.",
      date: "2023-07-05",
      readTime: "6 min read",
      link: "https://stennissmith.substack.com/p/the-psychology-of-clean-code"
    }
  ];

  return (
    <Container>
      <div className={styles.writingContent}>
        <div className={styles.writingHeader}>
          <h1>Writing</h1>
          <p className={styles.subtitle}>
            Technical essays on software engineering, backend systems, cloud infrastructure, 
            and the design decisions behind the projects I build. My writing focuses on 
            clarity, trade-offs, and practical learning rather than tutorials or trend-driven content.
          </p>
        </div>

        <div className={styles.writingGrid}>
          {articles.map((article, index) => (
            <a
              key={index}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.articleCard}
            >
              <div className={styles.articleHeader}>
                <h2>{article.title}</h2>
                <div className={styles.articleMeta}>
                  <span className={styles.articleDate}>{article.date}</span>
                  <span className={styles.articleReadTime}>{article.readTime}</span>
                </div>
              </div>
              <p className={styles.articleDescription}>{article.description}</p>
              <div className={styles.articleFooter}>
                <span className={styles.readMore}>
                  Read Article →
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className={styles.newsletterSection}>
          <div className={styles.newsletterContent}>
            <h2>Subscribe to My Newsletter</h2>
            <p>
              Get new articles on backend systems, cloud infrastructure, and software architecture 
              delivered directly to your inbox.
            </p>
            <a
              href="https://stennissmith.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.newsletterButton}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              Visit Substack
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
}