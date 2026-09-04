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
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 120 120"
          width="22"
          height="22"
          fill="none"
          stroke="#06b6d4"
          strokeWidth="14"
          strokeLinecap="square"
          strokeLinejoin="miter"
        >
          <line x1="60" y1="16" x2="60" y2="104" />
          <line x1="16" y1="16" x2="104" y2="16" />
          <line x1="20" y1="20" x2="60" y2="60" />
          <line x1="100" y1="20" x2="60" y2="60" />
          <line x1="60" y1="60" x2="104" y2="104" />
          <line x1="16" y1="104" x2="44" y2="104" />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}