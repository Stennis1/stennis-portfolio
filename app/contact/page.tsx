import Container from "../components/Container";

export default function ContactPage() {
  return (
    <Container>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <h1>Contact</h1>
        <p>The best way to reach me is via email or through the platforms below.</p>
        
        <div style={{ marginTop: '2rem' }}>
          <div style={{ marginBottom: '1.5rem' }}>
            <h3>Email</h3>
            <p>
              <a href="mailto:stennismith@gmail.com" style={{ color: '#2563eb' }}>
                stennismith@gmail.com
              </a>
            </p>
          </div>
          
          <div style={{ marginBottom: '1.5rem' }}>
            <h3>GitHub</h3>
            <p>
              <a 
                href="https://github.com/Stennis1" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: '#2563eb' }}
              >
                github.com/Stennis1
              </a>
            </p>
          </div>
          
          <div style={{ marginBottom: '1.5rem' }}>
            <h3>LinkedIn</h3>
            <p>
              <a 
                href="https://www.linkedin.com/in/stennis-smith/" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: '#2563eb' }}
              >
                linkedin.com/in/stennis-smith
              </a>
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}