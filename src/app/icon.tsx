import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#02040a",
          borderRadius: "7px",
          border: "1px solid rgba(6, 182, 212, 0.3)",
        }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* R + Z merged monogram */}

          {/* Vertical stem of the R */}
          <path
            d="M7 26V6H16"
            stroke="#06b6d4"
            strokeWidth="2"
            strokeLinecap="square"
            strokeLinejoin="miter"
          />

          {/* Upper part / bowl of R */}
          <path
            d="M7 6H16C20.2 6 22.5 8.2 22.5 11.2C22.5 14.4 20.2 16 16 16H7"
            stroke="#06b6d4"
            strokeWidth="2"
            strokeLinecap="square"
            strokeLinejoin="miter"
          />

          {/* R leg + Z diagonal */}
          <path
            d="M14 16L24.5 26"
            stroke="#67e8f9"
            strokeWidth="2"
            strokeLinecap="square"
          />

          {/* Z top */}
          <path
            d="M14 6H25"
            stroke="#67e8f9"
            strokeWidth="2"
            strokeLinecap="square"
          />

          {/* Z diagonal */}
          <path
            d="M25 6L10 26"
            stroke="#06b6d4"
            strokeWidth="2"
            strokeLinecap="square"
          />

          {/* Z bottom */}
          <path
            d="M10 26H25"
            stroke="#67e8f9"
            strokeWidth="2"
            strokeLinecap="square"
          />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}