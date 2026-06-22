function Testimonials() {
  return (
    <section
      id="reviews"
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
        What Our Customers Say
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
        Trusted by homeowners and businesses across
        Manchester for reliable plumbing services.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(320px,1fr))",
          gap: "30px",
        }}
      >
        <div style={cardStyle}>
          <div style={stars}>★★★★★</div>

          <p>
            Outstanding service. Arrived quickly,
            fixed the leak and left everything spotless.
            Highly recommended.
          </p>

          <div style={customer}>
            <div style={avatar}>S</div>

            <div>
              <h4>Sarah M.</h4>

              <span style={{ color: "#999" }}>
                Homeowner
              </span>
            </div>
          </div>
        </div>

        <div style={cardStyle}>
          <div style={stars}>★★★★★</div>

          <p>
            Professional from start to finish.
            Great communication, fair pricing
            and excellent workmanship.
          </p>

          <div style={customer}>
            <div style={avatar}>D</div>

            <div>
              <h4>David R.</h4>

              <span style={{ color: "#999" }}>
                Property Manager
              </span>
            </div>
          </div>
        </div>

        <div style={cardStyle}>
          <div style={stars}>★★★★★</div>

          <p>
            Called Titan Plumbing for an emergency
            boiler issue and they had us back up and
            running the same day.
          </p>

          <div style={customer}>
            <div style={avatar}>M</div>

            <div>
              <h4>Michael T.</h4>

              <span style={{ color: "#999" }}>
                Business Owner
              </span>
            </div>
          </div>
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
  lineHeight: "1.9",
};

const stars = {
  color: "#4da6ff",
  fontSize: "1.2rem",
  marginBottom: "20px",
};

const customer = {
  display: "flex",
  alignItems: "center",
  gap: "15px",
  marginTop: "25px",
};

const avatar = {
  width: "50px",
  height: "50px",
  borderRadius: "50%",
  background: "#4da6ff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: "700",
  color: "white",
};

export default Testimonials;