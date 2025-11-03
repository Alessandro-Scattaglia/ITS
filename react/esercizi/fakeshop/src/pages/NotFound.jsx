import { useNavigate } from "react-router-dom";

function NotFound() {
    const navigate = useNavigate();

    return (
        <div style={{ textAlign: "center", padding: "50px" }}>
            <h1>404 - Pagina non trovata</h1>
            <p>La pagina che stai cercando non esiste.</p>
            <button
                onClick={() => navigate("/")}
                style={{
                    marginTop: "20px",
                    padding: "10px 20px",
                    cursor: "pointer",
                    backgroundColor: "#7d035d",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                }}
            >
                Torna alla Home
            </button>
        </div>
    );
}

export default NotFound;
