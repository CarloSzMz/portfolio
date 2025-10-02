import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "Carlos Sanz Muñoz - Full Stack Developer"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(to bottom right, #1e293b, #0f172a)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <h1
            style={{
              fontSize: "72px",
              fontWeight: "bold",
              color: "white",
              margin: 0,
            }}
          >
            Carlos Sanz Muñoz
          </h1>
          <p
            style={{
              fontSize: "36px",
              color: "#94a3b8",
              margin: 0,
            }}
          >
            Full Stack Developer
          </p>
          <p
            style={{
              fontSize: "24px",
              color: "#64748b",
              margin: 0,
              textAlign: "center",
              maxWidth: "800px",
            }}
          >
            Especializado en desarrollo web con tecnologías modernas
          </p>
        </div>
      </div>
    ),
    {
      ...size,
    },
  )
}
