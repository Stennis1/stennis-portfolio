import Container from "../components/Container";
import styles from "./page.module.css";

export default function WritingPage() {
  const articles = [
    {
      title: "A New Year, A Different Kind of Commitment",
      description: "The Battle of New Year Resolutions... \n\ \
              The new year has a way of making everything feel possible.",
      date: "2026-01-01",
      readTime: "5 min read",
      link: "https://open.substack.com/pub/stennissmith/p/a-new-year-a-different-kind-of-commitment"
    },
    {
      title: "Monitoring vs Observability in Software Systems",
      description: "As software systems evolve from monoliths into distributed, cloud-native architectures, \
                    keeping systems healthy has become harder and more important than ever. ",
      date: "2025-12-24",
      readTime: "3 min read",
      link: "https://medium.com/@stennismith/monitoring-vs-observability-in-software-systems-4b9342dd96c8"
    },
    {
      title: "My Software Journey So Far And Where I’m Going Next",
      description: "My journey into software hasn’t been a straight line. It didn’t start with childhood coding competitions, \
                    a computer science background or reading entire programming books or manuals like Elon Musk and others.",
      date: "2025-11-06",
      readTime: "4 min read",
      link: "https://medium.com/@stennismith/my-software-journey-so-far-and-where-im-going-next-9ef1605d856c"
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
              Get new articles on frontend, backend systems, cloud infrastructure, and software architecture 
              delivered directly to your inbox.
            </p>
            <a
              href="https://stennissmith.substack.com/subscribe"
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