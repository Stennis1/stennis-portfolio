import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./components/ThemeProvider";
import Script from "next/script";

const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Stennis Smith - Software Engineer",
  description:
    "AI, Backend systems, cloud infrastructure, and full-stack development",
  icons: {
    icon: "/pp-icon.png",
    shortcut: "/pp-icon.png",
    apple: "/pp-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
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
        </ThemeProvider>

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-QMKSL388BN"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-QMKSL388BN');
          `}
        </Script>
      </body>
    </html>
  );
}
