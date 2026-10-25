import { ImageResponse } from "next/og";

export const alt =
  "Calvin Klein Tsefack — Fullstack Developer and Software Engineering Student, Douala, Cameroon";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          backgroundColor: "#071626",
          backgroundImage:
            "radial-gradient(circle at 82% 8%, rgba(84, 146, 210, 0.35), transparent 55%), radial-gradient(circle at 8% 100%, rgba(216, 184, 120, 0.14), transparent 50%)",
          padding: "52px",
          color: "#f6f4ef",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            height: "100%",
            border: "1px solid rgba(255,255,255,0.14)",
            borderRadius: "24px",
            padding: "48px 56px",
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.045) 1px, transparent 1px)",
            backgroundSize: "54px 54px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: 17,
              letterSpacing: "0.22em",
            }}
          >
            <div style={{ display: "flex", color: "#d8b878" }}>
              TCK — PORTFOLIO / 2026
            </div>
            <div
              style={{
                display: "flex",
                color: "rgba(255,255,255,0.45)",
                fontSize: 14,
              }}
            >
              DOUALA · CAMEROON · GMT+1
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                fontSize: 82,
                lineHeight: 1,
                fontWeight: 700,
                letterSpacing: "-0.035em",
              }}
            >
              Calvin Klein
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 82,
                lineHeight: 1.06,
                fontStyle: "italic",
                letterSpacing: "-0.025em",
                color: "#d8b878",
              }}
            >
              Tsefack
            </div>
            <div
              style={{
                display: "flex",
                marginTop: 26,
                fontSize: 24,
                color: "rgba(255,255,255,0.62)",
                letterSpacing: "0.01em",
              }}
            >
              Fullstack Developer · Software Engineering Student
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderTop: "1px solid rgba(255,255,255,0.13)",
              paddingTop: 22,
              fontSize: 15,
              color: "rgba(255,255,255,0.45)",
              letterSpacing: "0.04em",
            }}
          >
            <div style={{ display: "flex" }}>
              TypeScript · React · Next.js · Node.js · PostgreSQL
            </div>
            <div style={{ display: "flex" }}>linkedin.com/in/calvin-klein-tsefack</div>
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
