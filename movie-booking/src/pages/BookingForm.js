import { useLocation, useNavigate } from "react-router-dom";

function BookingForm() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const containerStyle = {
    backgroundColor: "#141414",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontFamily: "'Segoe UI', sans-serif"
  };

  const cardStyle = {
    backgroundColor: "#1f1f1f",
    padding: "40px",
    borderRadius: "12px",
    boxShadow: "0 15px 35px rgba(0,0,0,0.6)",
    width: "100%",
    maxWidth: "400px",
    border: "1px solid #333"
  };

  const inputStyle = {
    width: "100%",
    padding: "12px",
    marginBottom: "20px",
    borderRadius: "5px",
    border: "1px solid #444",
    backgroundColor: "#2b2b2b",
    color: "white",
    boxSizing: "border-box" // Ensures padding doesn't break width
  };

  const submitButtonStyle = {
    width: "100%",
    padding: "14px",
    backgroundColor: "#e50914",
    color: "white",
    border: "none",
    borderRadius: "5px",
    fontWeight: "bold",
    fontSize: "1rem",
    cursor: "pointer",
    marginTop: "10px"
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h2 style={{ textAlign: "center", marginBottom: "10px" }}>📝 Booking Form</h2>
        <p style={{ textAlign: "center", color: "#e50914", marginBottom: "30px", fontWeight: "bold" }}>
          {state?.name || "Movie"}
        </p>

        <form onSubmit={(e) => { e.preventDefault(); alert("Booking Successful!"); navigate("/"); }}>
          <label style={{ display: "block", marginBottom: "8px", fontSize: "0.9rem", color: "#bbb" }}>Full Name</label>
          <input type="text" placeholder="Enter your name" style={inputStyle} required />

          <label style={{ display: "block", marginBottom: "8px", fontSize: "0.9rem", color: "#bbb" }}>Email Address</label>
          <input type="email" placeholder="email@example.com" style={inputStyle} required />

          <label style={{ display: "block", marginBottom: "8px", fontSize: "0.9rem", color: "#bbb" }}>Mobile Number</label>
          <input type="tel" placeholder="+91 XXXXX XXXXX" style={inputStyle} required />

          <button type="submit" style={submitButtonStyle}>
            Confirm Booking
          </button>
        </form>
        
        <button 
          onClick={() => navigate(-1)} 
          style={{ width: "100%", background: "none", border: "none", color: "#777", marginTop: "15px", cursor: "pointer" }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default BookingForm;