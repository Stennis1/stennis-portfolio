"use client";

import { useState } from "react";
import Container from "../components/Container";
import styles from "./page.module.css";

type ProjectCategory = "featured" | "planned";

interface Project {
  title: string;
  status: string;
  statusColor: string;
  category: ProjectCategory;
  description: string;
  details: string[];
  technologies: string[];
  githubUrl: string | null;
  liveUrl: string | null;
}

const PROJECTS_PER_PAGE = 3;

export default function ProjectsPage() {
  const projects: Project[] = [
    {
      title: "Authentication & Authorization Platform",
      status: "In Progress",
      statusColor: "var(--primary-color)",
      category: "planned",
      description:
        "A backend-focused authentication system supporting email/password login and OAuth providers (GitHub, Google). Emphasizes secure token handling, user management, and clean API design.",
      details: [
        "Secure JWT-based authentication flow",
        "Multi-provider OAuth 2.0 integration",
        "Role-based access control system",
        "Rate limiting and security headers",
        "PostgreSQL for user data storage",
      ],
      technologies: [
        "TypeScript",
        "Node.js",
        "Express",
        "PostgreSQL",
        "Redis",
        "OAuth 2.0",
      ],
      githubUrl: "https://github.com/Stennis1/devops-portfolio-project",
      liveUrl: null,
    },
    {
  title: "Text-Organizer Desktop App (Linux)",
  status: "Completed",
  statusColor: "#10b981",
  category: "featured",
  description:
    "A lightweight Linux desktop utility for transforming text through simple construct, strip, and split operations. Designed as a fast, offline-first productivity tool with native Linux packaging.",
  details: [
    "Construct text from comma-separated input",
    "Strip leading and trailing whitespace per line",
    "Split text into one-item-per-line output",
    "Native Linux GUI with no internet dependency",
    "Packaged and distributed as an AppImage",
  ],
  technologies: [
    "Python",
    "Linux",
    "AppImage",
    "PyInstaller",
    "linuxdeploy",
  ],
  githubUrl: "https://github.com/Stennis1/text-organizer",
  liveUrl: null,
},
    {
  title: "AI Resume Analyzer",
  status: "Completed",
  statusColor: "#10b981",
  category: "featured",
  description:
    "An AI-powered full-stack application that analyzes resumes against job descriptions and returns a match score, missing skills, and actionable improvement suggestions. Focuses on real-world AI system design using LLM APIs rather than academic model training.",
  details: [
    "Resume-to-job matching with structured AI output",
    "LLM-powered analysis with enforced JSON responses",
    "Backend request validation and orchestration with FastAPI",
    "Clear separation between frontend, API, and AI logic",
    "Production-ready architecture with independent deployments",
  ],
  technologies: [
    "Next.js",
    "TypeScript",
    "FastAPI",
    "Python",
    "Pydantic",
    "LLM APIs",
    "Vercel",
    "Render",
  ],
  githubUrl: "https://github.com/Stennis1/ai-resume-analyzer",
  liveUrl: "https://ai-resume-analyzer-eight-vert.vercel.app/",
},
    {
      title: "Cloud Text-to-Speech Platform",
      status: "Completed",
      statusColor: "#10b981",
      category: "featured",
      description:
        "Cloud-based text-to-speech service using AWS Polly, managed through Terraform. Focuses on cloud resource provisioning, permissions, and deployment workflows.",
      details: [
        "Infrastructure-as-code with Terraform",
        "AWS Lambda for serverless processing",
        "S3 for audio file storage",
        "API Gateway for REST endpoints",
        "Cost optimization strategies",
      ],
      technologies: [
        "Python",
        "AWS Polly",
        "Terraform",
        "Lambda",
        "S3",
        "API Gateway",
      ],
      githubUrl: "https://github.com/Stennis1/tts-aws-cloud-project",
      liveUrl: "https://d1khe43zuwow7v.cloudfront.net/",
    },
    {
      title: "Full-Stack Cloud Application",
      status: "Completed",
      statusColor: "#10b981",
      category: "featured",
      description:
        "Full-stack web application deployed using AWS Amplify, integrating frontend components with backend services. Highlights end-to-end development and deployment automation.",
      details: [
        "Serverless backend with AWS AppSync",
        "React frontend with TypeScript",
        "CI/CD pipeline with Amplify",
        "Real-time data synchronization",
        "Environment-based configuration",
      ],
      technologies: [
        "React",
        "TypeScript",
        "AWS Amplify",
        "GraphQL",
        "DynamoDB",
      ],
      githubUrl: "https://github.com/Stennis1/profilesapp",
      liveUrl: "https://main.dmx54kntsq6ft.amplifyapp.com/",
    },
    {
      title: "Systems Design Service",
      status: "Planned",
      statusColor: "#6b7280",
      category: "planned",
      description:
        "Backend service exploring core systems design concepts: request routing, data modeling, rate limiting, and scalability.",
      details: [
        "Distributed request routing",
        "Data partitioning strategies",
        "Rate limiting algorithms",
        "Caching layer implementation",
        "Monitoring and observability",
      ],
      technologies: ["Go", "Redis", "Kafka", "Prometheus", "Docker"],
      githubUrl: null,
      liveUrl: null,
    },
  ];

  const [activeTab, setActiveTab] = useState<ProjectCategory>("featured");
  const [pageByTab, setPageByTab] = useState({
    featured: 1,
    planned: 1,
  });

  const filteredProjects = projects.filter(
    (p) => p.category === activeTab
  );

  const currentPage = pageByTab[activeTab];
  const totalPages = Math.ceil(
    filteredProjects.length / PROJECTS_PER_PAGE
  );

  const paginatedProjects = filteredProjects.slice(
    (currentPage - 1) * PROJECTS_PER_PAGE,
    currentPage * PROJECTS_PER_PAGE
  );

  const changePage = (direction: "prev" | "next") => {
    setPageByTab((prev) => ({
      ...prev,
      [activeTab]:
        direction === "prev"
          ? Math.max(prev[activeTab] - 1, 1)
          : Math.min(prev[activeTab] + 1, totalPages),
    }));
  };

  const renderProject = (project: Project, index: number) => (
    <div
      key={index}
      className={`${styles.projectCard} ${
        project.category === "featured" ? styles.featured : ""
      }`}
    >
      <div className={styles.projectHeader}>
        <div className={styles.projectTitleSection}>
          <h2>{project.title}</h2>
          <span
            className={styles.statusBadge}
            style={{
              backgroundColor: `${project.statusColor}20`,
              color: project.statusColor,
            }}
          >
            {project.status}
          </span>
        </div>
      </div>

      <p className={styles.projectDescription}>{project.description}</p>

      <div className={styles.projectDetails}>
        <h3>Key Features:</h3>
        <ul className={styles.detailsList}>
          {project.details.map((detail, idx) => (
            <li key={idx}>{detail}</li>
          ))}
        </ul>
      </div>
      {project.title === "AI Resume Analyzer" && (
  <p className={styles.notice}>
    ⚠️ Note: The backend runs on a free-tier Render instance and may take
    30–60 seconds to respond on first request due to cold starts.
  </p>
)}

{project.title === "Text-Organizer Desktop App (Linux)" && (
  <p className={styles.notice}>
    ℹ️ Note: AppImages may not run on Ubuntu 25.04 due to FUSE limitations.
    Works correctly on Ubuntu 20.04, 22.04, and most Linux distributions.
  </p>
)}

      <div className={styles.projectFooter}>
        <div className={styles.technologies}>
          {project.technologies.map((tech, idx) => (
            <span key={idx} className={styles.techTag}>
              {tech}
            </span>
          ))}
        </div>

        <div className={styles.projectLinks}>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.linkButton} ${styles.secondary}`}
            >
              GitHub
            </a>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.linkButton} ${styles.primary}`}
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <Container>
      <div className={styles.projectsContent}>
        <div className={styles.projectsHeader}>
          <h1>Projects & Portfolio</h1>
          <p className={styles.subtitle}>
            A curated view of featured work and upcoming systems I plan to
            build.
          </p>
        </div>

        {/* Tabs */}
        <div className={styles.tabs}>
          <button
            className={`${styles.tab} ${
              activeTab === "featured" ? styles.activeTab : ""
            }`}
            onClick={() => setActiveTab("featured")}
          >
            Featured Projects
          </button>
          <button
            className={`${styles.tab} ${
              activeTab === "planned" ? styles.activeTab : ""
            }`}
            onClick={() => setActiveTab("planned")}
          >
            Planned / Exploratory
          </button>
        </div>

        {/* Projects */}
        <div className={styles.projectsGrid}>
          {paginatedProjects.map(renderProject)}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className={styles.pagination}>
            <button
              disabled={currentPage === 1}
              onClick={() => changePage("prev")}
            >
              Previous
            </button>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <button
              disabled={currentPage === totalPages}
              onClick={() => changePage("next")}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </Container>
  );
}
