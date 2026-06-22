import { useState } from "react";

function FloatingCall() {
  const [hover, setHover] = useState(false);

  return (
    <a
      href="tel:01615551234"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: "fixed",
        bottom: "25px",
        right: "25px",
        background: "#4da6ff",
        color: "white",
        textDecoration: "none",
        padding: "16px 24px",
        borderRadius: "50px",
        fontWeight: "700",
        zIndex: "9999",
        transition: "all 0.25s ease",
        transform: hover
          ? "translateY(-4px) scale(1.03)"
          : "translateY(0) scale(1)",
        boxShadow: hover
          ? "0 15px 40px rgba(77,166,255,0.55)"
          : "0 0 30px rgba(77,166,255,0.4)",
      }}
    >
      🚨 24/7 Emergency Call
    </a>
  );
}

export default FloatingCall;