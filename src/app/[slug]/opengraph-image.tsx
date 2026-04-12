import { ImageResponse } from "next/og";
import { getProject } from "@/lib/projects";

export const runtime = "nodejs";
export const alt = "Crowd Control Digital — Project Proposal";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);

  if (!project) {
    return new ImageResponse(
      (
        <div
          style={{
            fontSize: 60,
            background: "#050505",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#e8e8e8",
          }}
        >
          Project Not Found
        </div>
      ),
      {
        ...size,
      }
    );
  }

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          background: "linear-gradient(135deg, #050505 0%, #0a0a0a 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "#e8e8e8",
          fontFamily: "system-ui",
          padding: "40px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            marginBottom: "30px",
          }}
        >
          <div
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "0",
              backgroundColor: project.accentColor,
            }}
          />
          <span style={{ fontSize: 32, color: "#777777", fontFamily: "monospace" }}>PROJECT PROPOSAL</span>
        </div>

        <h1
          style={{
            fontSize: 72,
            fontWeight: "bold",
            margin: "0 0 20px 0",
            textAlign: "center",
            background: `linear-gradient(135deg, #e8e8e8 0%, ${project.accentColor} 50%, #e8e8e8 100%)`,
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {project.client.name}
        </h1>

        <h2
          style={{
            fontSize: 48,
            fontWeight: 500,
            margin: "0 0 20px 0",
            textAlign: "center",
          }}
        >
          {project.project.name}
        </h2>

        <p
          style={{
            fontSize: 32,
            color: "#777777",
            margin: 0,
            textAlign: "center",
            maxWidth: "800px",
          }}
        >
          {project.project.tagline}
        </p>

        <div
          style={{
            display: "flex",
            gap: "40px",
            marginTop: "40px",
            fontSize: 24,
            color: "#777777",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: 16, color: "#383838", marginBottom: "5px" }}>DURATION</div>
            <div style={{ color: "#e8e8e8" }}>{project.project.duration}</div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: 16, color: "#383838", marginBottom: "5px" }}>START</div>
            <div style={{ color: "#e8e8e8" }}>{project.project.startDate}</div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
