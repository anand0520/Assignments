import { Link } from "react-router-dom";

const movies = [
  { 
    id: 1, 
    name: "Avengers", 
    img: "https://upload.wikimedia.org/wikipedia/en/8/8a/The_Avengers_%282012_film%29_poster.jpg" 
  },
  { 
    id: 2, 
    name: "Inception", 
    img: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg" 
  },
  { 
    id: 3, 
    name: "Interstellar", 
    img: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg" 
  },
  { 
    id: 4, 
    name: "Joker", 
    img: "https://upload.wikimedia.org/wikipedia/en/e/e1/Joker_%282019_film%29_poster.jpg" 
  },
 { id: 5, name: "Spider-Man", img: "https://images.unsplash.com/photo-1635805737707-575885ab0820?q=80&w=500&auto=format&fit=crop" },
  { 
    id: 6, 
    name: "Iron Man", 
    img: "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_FMjpg_UX1000_.jpg" 
  },
  { 
    id: 7, 
    name: "Titanic", 
    img: "https://images.unsplash.com/photo-1574687263812-a27e1c9e11ab?q=80&w=771&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
  },
  { id: 8, name: "Lion King", img: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?q=80&w=500&auto=format&fit=crop" },
];

function MovieList() {
  const containerStyle = {
    backgroundColor: "#000000", 
    
    minHeight: "100vh",
    padding: "40px 20px",
    color: "white",
    fontFamily: "Arial, sans-serif"
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
    gap: "30px",
    maxWidth: "1200px",
    margin: "0 auto"
  };

  const cardStyle = {
    backgroundColor: "#1a1a1a",
    borderRadius: "10px",
    overflow: "hidden",
    textDecoration: "none",
    color: "white",
    display: "block",
    transition: "transform 0.3s ease",
    border: "1px solid #333"
  };

  const imgStyle = {
    width: "100%",
    height: "330px", // Set a fixed height to make them look like posters
    objectFit: "cover",
    display: "block"
  };

  return (
    <div style={containerStyle}>
      <h2 style={{ textAlign: "center", fontSize: "2.5rem", marginBottom: "40px" }}>Now Showing</h2>

      <div style={gridStyle}>
        {movies.map(movie => (
          <Link 
            key={movie.id} 
            to={`/movie/${movie.id}`} 
            state={movie} 
            style={cardStyle}
            onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
            onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
          >
            <img src={movie.img} alt={movie.name} style={imgStyle} />
            <div style={{ padding: "15px", textAlign: "center" }}>
              <p style={{ margin: 0, fontWeight: "bold" }}>{movie.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default MovieList;