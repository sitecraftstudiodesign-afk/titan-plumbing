import logo from "../assets/titan-logo.png";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-area">
        <img src={logo} alt="Titan Plumbing Logo" />

        <div>
          <h2>
            TITAN <span>PLUMBING</span>
          </h2>

          <p
            style={{
              margin: 0,
              color: "#999",
              fontSize: "0.9rem",
            }}
          >
            24/7 Emergency Plumbing Services
          </p>
        </div>
      </div>

      <div className="nav-links">
        <a href="#">Home</a>
        <a href="#services">Services</a>
        <a href="#reviews">Reviews</a>
        <a href="#contact">Contact</a>
      </div>

    <a
  href="http://localhost:5173#projects"
  className="back-button"
>
  ← Back To SiteCraft Studio
</a>
    </nav>
  );
}

export default Navbar;