import { ImageResponse } from "next/og";

// iOS home-screen icon
export const runtime = "edge";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #1B1722 0%, #2F293A 55%, #5227FF 100%)",
          fontFamily: "sans-serif",
          color: "#ffffff",
          fontSize: 92,
          fontWeight: 700,
          letterSpacing: "-4px",
          borderRadius: 40
        }}
      >
        D3
      </div>
    ),
    { ...size }
  );
}
