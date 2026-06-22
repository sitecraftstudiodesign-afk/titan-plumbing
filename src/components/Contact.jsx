function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: "120px 20px",
        background: "#0d0d0d",
      }}
    >
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "3rem",
            marginBottom: "20px",
          }}
        >
          Get Your Free Quote
        </h2>

        <p
          style={{
            color: "#999",
            marginBottom: "50px",
            lineHeight: "1.8",
          }}
        >
          Need a reliable plumber? Contact Titan Plumbing
          today for a free, no-obligation quotation.
        </p>

        <div
          style={{
            background: "#111",
            border: "1px solid #222",
            borderRadius: "25px",
            padding: "40px",
          }}
        >
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <input
              type="text"
              placeholder="Your Name"
              style={inputStyle}
            />

            <input
              type="email"
              placeholder="Email Address"
              style={inputStyle}
            />

            <input
              type="tel"
              placeholder="Phone Number"
              style={inputStyle}
            />

            <textarea
              placeholder="Tell us about your plumbing issue..."
              rows="6"
              style={inputStyle}
            />

            <button
              style={{
                padding: "18px",
                borderRadius: "50px",
                border: "none",
                background: "#4da6ff",
                color: "white",
                fontWeight: "700",
                cursor: "pointer",
                fontSize: "1rem",
              }}
            >
              Request Free Quote
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

const inputStyle = {
  background: "#161616",
  border: "1px solid #333",
  borderRadius: "15px",
  padding: "16px",
  color: "white",
  fontSize: "1rem",
};

export default Contact;