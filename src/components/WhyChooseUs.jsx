function WhyChooseUs() {
  return (
    <section
      style={{
        padding: "120px 20px",
        background: "#0d0d0d",
      }}
    >
      <div
        style={{
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
          Why Choose Titan Plumbing?
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
          We combine expert workmanship, rapid response
          times and honest pricing to deliver a plumbing
          service customers can rely on.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            gap: "25px",
          }}
        >
          <div style={cardStyle}>
            <h3>⚡ Fast Response</h3>
            <p>
              Emergency callouts available with rapid
              response times across the local area.
            </p>
          </div>

          <div style={cardStyle}>
            <h3>⭐ Trusted Service</h3>
            <p>
              Friendly, professional plumbers committed
              to high-quality workmanship.
            </p>
          </div>

          <div style={cardStyle}>
            <h3>💷 Honest Pricing</h3>
            <p>
              Clear quotations with no hidden costs or
              surprise charges.
            </p>
          </div>

          <div style={cardStyle}>
            <h3>🛠 Fully Qualified</h3>
            <p>
              Experienced professionals equipped to
              handle jobs of every size.
            </p>
          </div>
        </div>

        <div
          style={{
            marginTop: "80px",
            display: "flex",
            justifyContent: "center",
            gap: "60px",
            flexWrap: "wrap",
            textAlign: "center",
          }}
        >
          <div>
            <h2 style={{ color: "#4da6ff" }}>15+</h2>
            <p>Years Experience</p>
          </div>

          <div>
            <h2 style={{ color: "#4da6ff" }}>500+</h2>
            <p>Happy Customers</p>
          </div>

          <div>
            <h2 style={{ color: "#4da6ff" }}>24/7</h2>
            <p>Emergency Callouts</p>
          </div>
        </div>
      </div>
    </section>
  );
}

const cardStyle = {
  background: "#111",
  border: "1px solid #222",
  borderRadius: "20px",
  padding: "30px",
};

export default WhyChooseUs;