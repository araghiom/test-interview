import SvgIcon from "@mui/material/SvgIcon";

export default function LightButton() {
  return (
    <SvgIcon
      sx={{
        width: "50px",
        height: "50px",
      }}
    >
      <svg
        width="50px"
        height="50px"
        viewBox="0 0 400 400"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          transform: "translateY(0%) rotate(180deg)",
          transformOrigin: "50% 50%",
        }}
      >
        <circle
          r="17.5px"
          fill="#ffa82e"
          cx="200.5"
          cy="292.5px"
          style={{ transformOrigin: "200.5px 220.5px" }}
        />
        <circle
          r="17.5px"
          fill="#ffa82e"
          cx="114.5px"
          cy="251.5"
          style={{ transformOrigin: "150px 251.5px" }}
        />
        <circle
          r="17.5px"
          fill="#ffa82e"
          cx="114.5px"
          cy="169.5px"
          style={{ transformOrigin: "150px 169.5px" }}
        />
        <circle
          r="17.5px"
          fill="#ffa82e"
          cx="200.5"
          cy="111.5px"
          style={{ transformOrigin: "200.5px 160px" }}
        />
        <circle
          r="17.5px"
          fill="#ffa82e"
          cx="285.5px"
          cy="169.5"
          style={{ transformOrigin: "230px 169.5px" }}
        />
        <circle
          r="17.5px"
          fill="#ffa82e"
          cx="285.5px"
          cy="251.5"
          style={{ transformOrigin: "240px 251.5px" }}
        />
        <circle r="58px" fill="rgba(255, 168, 46, 1)" cx="200" cy="200" />
        <circle
          r="40px"
          fill="rgba(255, 255, 255, 1)"
          cx="450"
          cy="150"
          opacity="0"
        />
      </svg>
    </SvgIcon>
  );
}
