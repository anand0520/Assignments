import { useLocation, useNavigate } from "react-router-dom";

function MovieDetails() {
  const { state } = useLocation();
  const navigate = useNavigate();

  // Redirect or handle case where state might be null (e.g., page refresh)
  if (!state) return <h2 style={{ color: "white", textAlign: "center" }}>Movie not found!</h2>;

  const containerStyle = {
    backgroundColor: "#141414", // Dark background
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontFamily: "Arial, sans-serif",
    padding: "20px"
  };

  const imageStyle = {
    width: "100%",            // Makes image responsive
    maxWidth: "400px",       // Limits how big the image can get
    height: "auto",          // Maintains aspect ratio
    borderRadius: "15px",    // Rounded corners
    boxShadow: "0 8px 32px rgba(0,0,0,0.8)", // Professional shadow
    border: "2px solid #333"
  };

  const buttonStyle = {
    backgroundColor: "#e50914", // Cinema red
    color: "white",
    border: "none",
    padding: "12px 24px",
    fontSize: "1.1rem",
    fontWeight: "bold",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background 0.3s ease"
  };

  return (
    <div style={containerStyle}>
      <h2 style={{ marginBottom: "20px" }}>🎬 {state.name}</h2>
      
      <img src={state.img} alt={state.name} style={imageStyle} />
      
      <div style={{ marginTop: "30px" }}>
        <button 
          onClick={() => navigate("/book", { state })} 
          style={buttonStyle}
          onMouseOver={(e) => e.target.style.backgroundColor = "#ff0f1a"}
          onMouseOut={(e) => e.target.style.backgroundColor = "#e50914"}
        >
          🎟 Book Seat
        </button>
      </div>
      
      <button 
        onClick={() => navigate(-1)} 
        style={{ marginTop: "20px", background: "none", border: "none", color: "#aaa", cursor: "pointer" }}
      >
        Go Back
      </button>
    </div>
  );
}

export default MovieDetails;