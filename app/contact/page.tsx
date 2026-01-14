import Container from "../components/Container";
import styles from "./page.module.css";

export default function ContactPage() {
  return (
    <Container>
      <section className={styles.contactSection}>
        <header className={styles.header}>
          <h1>Contact</h1>
          <p>
            If you’d like to discuss a project, collaboration, or opportunity,
            feel free to reach out using the form below or via my profiles.
          </p>
        </header>

        <div className={styles.content}>
          {/* CONTACT FORM */}
          <form
            className={styles.form}
            action="https://formspree.io/f/xgoovwzo"
            method="POST"
          >
            <div className={styles.field}>
              <label htmlFor="name">Name</label>
              <input id="name" name="name" type="text" required />
            </div>

            <div className={styles.field}>
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" required />
            </div>

            <div className={styles.field}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
              ></textarea>
            </div>

            <button type="submit" className={styles.submitButton}>
              Send Message
            </button>
          </form>

          {/* DIRECT CONTACT */}
          <div className={styles.directContact}>
            <h3>Other ways to reach me</h3>

            <ul>
              <li>
                <strong>Email:</strong>{" "}
                <a href="mailto:stennismith@gmail.com">
                  stennismith@gmail.com
                </a>
              </li>

              <li>
                <strong>GitHub:</strong>{" "}
                <a
                  href="https://github.com/Stennis1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/Stennis1
                </a>
              </li>

              <li>
                <strong>LinkedIn:</strong>{" "}
                <a
                  href="https://www.linkedin.com/in/stennis-smith/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linkedin.com/in/stennis-smith
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </Container>
  );
}
