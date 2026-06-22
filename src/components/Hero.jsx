import { useState } from "react";

function Hero() {
  const [callHover, setCallHover] = useState(false);
  const [quoteHover, setQuoteHover] = useState(false);
  const [badgeHover, setBadgeHover] = useState(false);

  return (
    <section
      style={{
        minHeight: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "100px 20px",
        background:
          "radial-gradient(circle at top, rgba(77,166,255,0.18), transparent 35%), linear-gradient(to bottom, #07111d, #111)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: "600px",
          height: "600px",
          background: "rgba(77,166,255,0.08)",
          filter: "blur(120px)",
          borderRadius: "50%",
          top: "-200px",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      />

      <div
        style={{
          maxWidth: "1100px",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div
  onMouseEnter={() => setBadgeHover(true)}
  onMouseLeave={() => setBadgeHover(false)}
  style={{
    display: "inline-block",
    padding: "12px 24px",
    borderRadius: "999px",
    background: "rgba(77,166,255,0.12)",
    border: "1px solid rgba(77,166,255,0.25)",
    color: "#4da6ff",
    fontWeight: "600",
    marginBottom: "30px",
    cursor: "pointer",
    transition: "all 0.25s ease",
    transform: badgeHover
      ? "translateY(-3px)"
      : "translateY(0)",
    boxShadow: badgeHover
      ? "0 10px 25px rgba(77,166,255,0.25)"
      : "none",
  }}
>
  🚨 Available 24/7 For Emergency Callouts
</div>

        <h1
          style={{
            fontSize: "clamp(3rem, 8vw, 6rem)",
            lineHeight: "1",
            fontWeight: "900",
            marginBottom: "30px",
            letterSpacing: "-2px",
          }}
        >
          Fast, Reliable
          <br />
          Plumbing You Can Trust
        </h1>

        <p
          style={{
            color: "#b5b5b5",
            maxWidth: "780px",
            margin: "0 auto",
            lineHeight: "1.9",
            fontSize: "1.2rem",
          }}
        >
          Titan Plumbing provides expert plumbing,
          boiler repairs and emergency callout services
          across Manchester and surrounding areas.
          Fast response times, honest pricing and
          professional workmanship guaranteed.
        </p>

        <div
          style={{
            marginTop: "50px",
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <a
            href="#contact"
            style={{
              textDecoration: "none",
            }}
          >
            <button
              onMouseEnter={() => setCallHover(true)}
              onMouseLeave={() => setCallHover(false)}
              style={{
                padding: "18px 42px",
                borderRadius: "50px",
                border: "none",
                background: "#4da6ff",
                color: "white",
                fontWeight: "700",
                fontSize: "1rem",
                cursor: "pointer",
                transition: "all 0.25s ease",
                transform: callHover
                  ? "translateY(-3px)"
                  : "translateY(0)",
                boxShadow: callHover
                  ? "0 12px 30px rgba(77,166,255,0.45)"
                  : "0 0 30px rgba(77,166,255,0.35)",
              }}
            >
              📞 Call Now
            </button>
          </a>

          <a
            href="#contact"
            style={{
              textDecoration: "none",
            }}
          >
            <button
              onMouseEnter={() => setQuoteHover(true)}
              onMouseLeave={() => setQuoteHover(false)}
              style={{
                padding: "18px 42px",
                borderRadius: "50px",
                border: quoteHover
                  ? "1px solid #4da6ff"
                  : "1px solid #444",
                background: "rgba(255,255,255,0.02)",
                color: "white",
                fontWeight: "600",
                fontSize: "1rem",
                cursor: "pointer",
                transition: "all 0.25s ease",
                transform: quoteHover
                  ? "translateY(-3px)"
                  : "translateY(0)",
              }}
            >
              Get A Free Quote
            </button>
          </a>
        </div>

        <div
          style={{
            marginTop: "70px",
            display: "flex",
            justifyContent: "center",
            gap: "50px",
            flexWrap: "wrap",
          }}
        >
          <div>
            <h2
              style={{
                color: "#4da6ff",
                marginBottom: "5px",
              }}
            >
              500+
            </h2>

            <p style={{ color: "#aaa" }}>
              Happy Customers
            </p>
          </div>

          <div>
            <h2
              style={{
                color: "#4da6ff",
                marginBottom: "5px",
              }}
            >
              15+
            </h2>

            <p style={{ color: "#aaa" }}>
              Years Experience
            </p>
          </div>

          <div>
            <h2
              style={{
                color: "#4da6ff",
                marginBottom: "5px",
              }}
            >
              24/7
            </h2>

            <p style={{ color: "#aaa" }}>
              Emergency Callouts
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;