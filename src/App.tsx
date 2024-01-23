import "bootstrap";
import "./assets/style/main.scss";
import { Layout } from "./views/frontend/Layout";
import { UserPage } from "./views/frontend/UserPage";
import { HomePage } from "./views/frontend/HomePage";
import { LoginPage } from "./views/frontend/LoginPage";
import { NotFoundPage } from "./views/frontend/NotFoundPage";
import { Dashboard } from "./views/backend/Dashboard";
// github pages 為靜態網站，所以使用 HashRouter
import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="user" element={<UserPage />} />
            <Route path="login" element={<LoginPage />} />
          </Route>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
