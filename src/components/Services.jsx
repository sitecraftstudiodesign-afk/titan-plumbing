function Services() {
  return (
    <section
      id="services"
      style={{
        padding: "120px 20px",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "3rem",
          marginBottom: "20px",
        }}
      >
        Our Services
      </h2>

      <p
        style={{
          textAlign: "center",
          color: "#999",
          maxWidth: "700px",
          margin: "0 auto 60px auto",
          lineHeight: "1.8",
        }}
      >
        Professional plumbing solutions for homes and
        businesses across Manchester and surrounding areas.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
          gap: "30px",
        }}
      >
        <div style={cardStyle}>
          <div style={icon}>🚰</div>

          <h3>Emergency Repairs</h3>

          <p>
            Fast response for burst pipes, leaks,
            blocked drains and urgent plumbing issues.
          </p>
        </div>

        <div style={cardStyle}>
          <div style={icon}>🔥</div>

          <h3>Boiler Repairs</h3>

          <p>
            Professional boiler diagnostics,
            servicing and repair solutions.
          </p>
        </div>

        <div style={cardStyle}>
          <div style={icon}>🛁</div>

          <h3>Bathroom Installation</h3>

          <p>
            Complete bathroom plumbing and
            installation services.
          </p>
        </div>

        <div style={cardStyle}>
          <div style={icon}>🔧</div>

          <h3>General Plumbing</h3>

          <p>
            Reliable maintenance, repairs and
            plumbing support for any property.
          </p>
        </div>
      </div>
    </section>
  );
}

const cardStyle = {
  background: "#111",
  border: "1px solid #222",
  borderRadius: "25px",
  padding: "35px",
  minHeight: "250px",
};

const icon = {
  width: "70px",
  height: "70px",
  borderRadius: "18px",
  background: "rgba(77,166,255,0.12)",
  border: "1px solid rgba(77,166,255,0.2)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "2rem",
  marginBottom: "20px",
};

export default Services;