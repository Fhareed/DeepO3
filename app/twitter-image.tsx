import { ImageResponse } from "next/og";

// Twitter card — same visual as OG image
export const runtime = "edge";
export const alt =
  "DeepO3 — AI-native software solutions for firms and organizations.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          backgroundColor: "#0c0f16",
          backgroundImage:
            "radial-gradient(circle at 15% 20%, #2F293A 0%, #0c0f16 55%)",
          color: "#ffffff",
          fontFamily: "sans-serif"
        }}
      >
        {/* Accent strip */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 260,
            height: 6,
            background:
              "linear-gradient(90deg, #5227FF 0%, #69b5ff 100%)"
          }}
        />

        {/* Eyebrow */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 22,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "#69b5ff",
            fontWeight: 600
          }}
        >
          <span
            style={{
              width: 44,
              height: 44,
              borderRadius: 10,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background:
                "linear-gradient(135deg, #1B1722 0%, #2F293A 55%, #5227FF 100%)",
              color: "#ffffff",
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: "-1px"
            }}
          >
            D3
          </span>
          <span>DeepO3</span>
        </div>

        {/* Main headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 28
          }}
        >
          <div
            style={{
              fontSize: 78,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-2px",
              maxWidth: 980
            }}
          >
            AI-native software for firms and organizations.
          </div>
          <div
            style={{
              fontSize: 28,
              color: "#d0d7e8",
              lineHeight: 1.4,
              maxWidth: 900,
              fontWeight: 400
            }}
          >
            Product thinking, AI systems, and robust engineering — combined into
            reliable digital products.
          </div>
        </div>

        {/* Footer row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 20,
            color: "rgba(208, 215, 232, 0.72)",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            fontWeight: 500
          }}
        >
          <span>Conversational · Agentic · Vision</span>
          <span>deepo3.com</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
