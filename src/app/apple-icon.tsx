import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};

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
          background: "#02040a",
          borderRadius: "36px",
          border: "2px solid rgba(6, 182, 212, 0.3)",
        }}
      >
        <svg
          width="132"
          height="132"
          viewBox="0 0 180 180"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* R + Z monogram */}

          {/* R vertical stem */}
          <path
            d="M38 142V38H88"
            stroke="#06b6d4"
            strokeWidth="8"
            strokeLinecap="square"
            strokeLinejoin="miter"
          />

          {/* R bowl */}
          <path
            d="M38 38H88C110 38 123 49 123 67
               C123 86 109 96 88 96H38"
            stroke="#06b6d4"
            strokeWidth="8"
            strokeLinecap="square"
            strokeLinejoin="miter"
          />

          {/* R leg */}
          <path
            d="M78 96L132 142"
            stroke="#67e8f9"
            strokeWidth="8"
            strokeLinecap="square"
          />

          {/* Z top */}
          <path
            d="M78 38H142"
            stroke="#67e8f9"
            strokeWidth="8"
            strokeLinecap="square"
          />

          {/* Z diagonal */}
          <path
            d="M142 38L48 142"
            stroke="#06b6d4"
            strokeWidth="8"
            strokeLinecap="square"
          />

          {/* Z bottom */}
          <path
            d="M48 142H142"
            stroke="#67e8f9"
            strokeWidth="8"
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