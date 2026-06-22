function Footer() {
  return (
    <footer
      style={{
        background: "#080808",
        borderTop: "1px solid #222",
        padding: "80px 20px 40px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "40px",
        }}
      >
        <div>
          <h2
            style={{
              marginBottom: "15px",
            }}
          >
            Titan Plumbing
          </h2>

          <p
            style={{
              color: "#999",
              lineHeight: "1.8",
            }}
          >
            Professional plumbing, boiler repairs
            and emergency callout services across
            Manchester and surrounding areas.
          </p>
        </div>

        <div>
          <h3
            style={{
              marginBottom: "15px",
            }}
          >
            Contact
          </h3>

          <p>📞 0161 555 1234</p>
          <p>📧 info@titanplumbing.co.uk</p>
        </div>

        <div>
          <h3
            style={{
              marginBottom: "15px",
            }}
          >
            Service Areas
          </h3>

          <p>Manchester</p>
          <p>Salford</p>
          <p>Stockport</p>
          <p>Bolton</p>
        </div>
      </div>

      <div
        style={{
          borderTop: "1px solid #222",
          marginTop: "50px",
          paddingTop: "25px",
          textAlign: "center",
          color: "#666",
        }}
      >
        © 2025 Titan Plumbing. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;