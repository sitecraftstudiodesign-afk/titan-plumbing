function EmergencyBanner() {
  return (
    <section
      style={{
        padding: "80px 20px",
        background:
          "linear-gradient(135deg, #4da6ff, #2d7dd2)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "3rem",
            color: "white",
            marginBottom: "20px",
          }}
        >
          24/7 Emergency Plumbing Service
        </h2>

        <p
          style={{
            color: "rgba(255,255,255,0.9)",
            fontSize: "1.2rem",
            maxWidth: "700px",
            margin: "0 auto 35px auto",
            lineHeight: "1.8",
          }}
        >
          Burst pipe? No hot water? Blocked drain?
          Our emergency plumbing team is available
          day and night to help when you need us most.
        </p>

        <button
          style={{
            padding: "18px 40px",
            borderRadius: "50px",
            border: "none",
            background: "white",
            color: "#2d7dd2",
            fontWeight: "700",
            fontSize: "1rem",
            cursor: "pointer",
          }}
        >
          📞 Call Now
        </button>
      </div>
    </section>
  );
}

export default EmergencyBanner;