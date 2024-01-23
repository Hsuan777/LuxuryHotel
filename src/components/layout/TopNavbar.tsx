import { Link, useLocation } from "react-router-dom";

export const TopNavbar: React.FC = () => {
  const location = useLocation();
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-dark position-fixed top-0 start-0 end-0 ${
          location.pathname === "/" ? "bg-transparent" : "bg-dark"
        }`}
        style={{ zIndex: 10 }}
      >
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src="./src/assets/images/logoWhite.svg" alt="Logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {location.pathname !== "/login" && (
              <ul className="navbar-nav align-items-center ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    客房旅宿
                  </a>
                </li>
                <li className="nav-item mx-8">
                  <Link to="/login" className="nav-link">
                    會員登入
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="btn btn-primary text-white">立即訂房</a>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};
