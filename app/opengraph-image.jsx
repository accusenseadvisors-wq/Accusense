import { ImageResponse } from "next/og";

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
          alignItems: "center",
          justifyContent: "center",
          background: "#1a1a1a",
          backgroundImage: "radial-gradient(80% 120% at 50% -20%, rgba(208,11,20,0.35), transparent 60%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            fontSize: 22,
            fontWeight: 600,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#d00b14",
            marginBottom: 28,
          }}
        >
          <div style={{ width: 40, height: 2, background: "#d00b14" }} />
          Chartered Accountants
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 96,
            fontWeight: 700,
            letterSpacing: -3,
            color: "#fff",
          }}
        >
          Accusense<span style={{ color: "#d00b14" }}>.</span>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 24,
            fontSize: 30,
            fontWeight: 500,
            color: "rgba(255,255,255,0.65)",
          }}
        >
          Accounting built on precision, advice built on trust.
        </div>
      </div>
    ),
    { ...size }
  );
}
