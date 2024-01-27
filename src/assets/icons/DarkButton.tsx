import SvgIcon from "@mui/material/SvgIcon";

export default function DarkButton() {
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
          transform: "translateY(0%) rotate(0deg)",
          transformOrigin: "50% 50%",
          transitionDelay: "5s",
        }}
      >
        <circle
          r="17.5px"
          fill="#ffa82e"
          cx="200.5"
          cy="220.5px"
          style={{
            transform: "scale(0)",
            transformOrigin: "200.5px 220.5px",
            opacity: 0,
          }}
        />
        <circle
          r="17.5px"
          fill="#ffa82e"
          cx="150px"
          cy="251.5"
          style={{
            transform: "scale(0)",
            transformOrigin: "150px 251.5px",
            opacity: 0,
          }}
        />
        <circle
          r="17.5px"
          fill="#ffa82e"
          cx="150px"
          cy="169.5px"
          style={{
            transform: "scale(0)",
            transformOrigin: "150px 169.5px",
            opacity: 0,
          }}
        />
        <circle
          r="17.5px"
          fill="#ffa82e"
          cx="200.5"
          cy="160px"
          style={{
            transform: "scale(0)",
            transformOrigin: "200.5px 160px",
            opacity: 0,
          }}
        />
        <circle
          r="17.5px"
          fill="#ffa82e"
          cx="230px"
          cy="169.5"
          style={{
            transform: "scale(0)",
            transformOrigin: "230px 169.5px",
            opacity: 0,
          }}
        />
        <circle
          r="17.5px"
          fill="#ffa82e"
          cx="240px"
          cy="251.5"
          style={{
            transform: "scale(0)",
            transformOrigin: "240px 251.5px",
            opacity: 0,
          }}
        />
        <circle r="90px" fill="rgba(255, 255, 255, 1)" cx="200" cy="200" />
        <circle r="90px" fill="rgba(21, 26, 37, 1)" cx="250" cy="150" />
      </svg>
    </SvgIcon>
  );
}
