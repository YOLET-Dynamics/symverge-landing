import { ImageResponse } from "next/og";

export const alt = "SYMVERGE — We design the workflow behind your business";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0a0a0a",
          backgroundImage:
            "radial-gradient(circle at 50% 30%, rgba(58,143,101,0.18) 0%, transparent 55%)",
          padding: "80px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 40,
            fontWeight: 700,
            letterSpacing: "0.15em",
            color: "#ffffff",
          }}
        >
          SYM<span style={{ color: "#3a8f65" }}>VERGE</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 76,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              color: "#ffffff",
            }}
          >
            We design the workflow
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 76,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              color: "#3a8f65",
            }}
          >
            behind your business.
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 32,
              fontSize: 30,
              color: "#b8b8b8",
            }}
          >
            Workflow · Automation · CRM · Dashboards · Custom Software
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 24,
            color: "#6b7280",
          }}
        >
          <div style={{ display: "flex", width: 40, height: 2, backgroundColor: "#3a8f65" }} />
          symverge.tech
        </div>
      </div>
    ),
    { ...size }
  );
}
