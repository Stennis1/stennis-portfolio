// This is a Server Component by default (no 'use client' directive)
import '../globals.css';

export default function Container({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container">
      <div className="containerContent">
        {children}
      </div>
    </div>
  );
}