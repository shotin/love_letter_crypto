import { Link } from "react-router-dom";
import "./notfound.css";

const NotFound = () => {
  return (
    <div>
      <div style={{ textAlign: "center", marginTop: "300px" }}>
        <h3>Page not Found</h3>
        <br />
        <p style={{ textAlign: "center" }}>
          <Link className="text-dark" to="/">
            Go to Home{" "}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default NotFound;
