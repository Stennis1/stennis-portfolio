import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stennis Smith - Software Engineer",
  description:
    "Backend systems, cloud infrastructure, and full-stack development",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="main">{children}</main>
        <footer className="footer">
          <div className="footerContent">
            <p>
              © {new Date().getFullYear()} Stennis Smith. All rights reserved.
            </p>
            <div className="socialLinks">
              <a
                href="https://github.com/Stennis1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/stennis-smith/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                LinkedIn
              </a>

              <a
                href="https://stennissmith.substack.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Substack"
              >
                Writing
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
