import React from "react";

interface ProjectCardProps {
  title: string;
  description?: string;
  imageSrc?: string;
  iframeSrc?: string;
  linkHref?: string;
  authors?: string;
  className?: string;
}

const styles: Record<string, React.CSSProperties> = {
  card: {
    width : '500px',
    height : '500px',
    position: "relative",
    borderRadius: "16px",
    overflow: "hidden",
    background: "#111",
    cursor: "pointer",
    boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    fontFamily: "'DM Sans', sans-serif",
  },
  imageWrapper: {
    position: "relative",
    aspectRatio: "16/9",
    overflow: "hidden",
    display: "block",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
    transition: "transform 0.5s ease",
  },
  overlay: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)",
    pointerEvents: "none",
  },
  iframeWrapper: {
    position: "relative",
    aspectRatio: "16/9",
    overflow: "hidden",
  },
  iframe: {
    border: 0,
    width: "100%",
    height: "100%",
    display: "block",
  },
  body: {
    padding: "16px 20px 20px",
  },
  title: {
    margin: "0 0 6px",
    fontSize: "1.1rem",
    fontWeight: 700,
    letterSpacing: "-0.01em",
    lineHeight: 1.2,
  },
  description: {
    margin: "0 0 10px",
    fontSize: "0.85rem",
    color: "rgba(255,255,255,0.6)",
    lineHeight: 1.5,
  },
  authors: {
    margin: 0,
    fontSize: "0.75rem",
    color: "rgba(255,255,255,0.35)",
    letterSpacing: "0.03em",
    textTransform: "uppercase",
  },
  badge: {
    display: "inline-block",
    marginBottom: "10px",
    padding: "3px 10px",
    borderRadius: "999px",
    background: "rgba(255,255,255,0.08)",
    color: "rgba(255,255,255,0.5)",
    fontSize: "0.7rem",
    letterSpacing: "0.06em",
    textTransform: "uppercase",
  },
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageSrc,
  iframeSrc,
  linkHref,
  authors,
  className,
}) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap"
        rel="stylesheet"
      />
      <article
        className={className}
        style={{
          ...styles.card,
          transform: hovered ? "translateY(-4px)" : "translateY(0)",
          boxShadow: hovered
            ? "0 12px 40px rgba(0,0,0,0.6)"
            : "0 4px 24px rgba(0,0,0,0.4)",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Image */}
        {imageSrc && (
          <div style={styles.imageWrapper}>
            <img
              src={imageSrc}
              alt={title}
              style={{
                ...styles.image,
                transform: hovered ? "scale(1.05)" : "scale(1)",
              }}
            />
            <div style={styles.overlay} />
          </div>
        )}

        {/* Iframe fallback */}
        {!imageSrc && iframeSrc && (
          <div style={styles.iframeWrapper}>
            <iframe
              src={iframeSrc}
              title={title}
              loading="lazy"
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
              style={styles.iframe}
            />
          </div>
        )}

        {/* Body */}
        <div style={styles.body}>
          {authors && <span style={styles.badge}>{authors}</span>}

          <h3 style={styles.title}>
  {linkHref ? (
    <a
      href={linkHref}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        color: hovered ? "#f5c842" : "#fff",
        textDecoration: "none",
        transition: "color 0.2s ease",
      }}
    >
      {title}
    </a>
  ) : (
    <span style={{ color: "#fff" }}>{title}</span>
  )}
</h3>

          {description && <p style={styles.description}>{description}</p>}
        </div>
      </article>
    </>
  );
};

export default ProjectCard;