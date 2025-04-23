import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "1:1 MOS Coaching | Transform Your Life Through Spiritual Guidance";
export const size = {
  width: 1200,
  height: 630,
};

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "40px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              fontSize: "60px",
              fontWeight: "bold",
              marginBottom: "20px",
              color: "#000",
            }}
          >
            1:1 MOS Coaching
          </h1>
          <p
            style={{
              fontSize: "30px",
              color: "#666",
              marginBottom: "20px",
            }}
          >
            Transform Your Life Through Spiritual Guidance
          </p>
          <p
            style={{
              fontSize: "24px",
              color: "#888",
            }}
          >
            Deep presence • Meditation • Gene Keys • Somatic practices
          </p>
        </div>
      </div>
    ),
    size
  );
}
