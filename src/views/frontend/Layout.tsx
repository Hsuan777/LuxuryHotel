import { TopNavbar } from "@/components/layout/TopNavbar";
import { Footer } from "@/components/layout/Footer";
import { Outlet } from "react-router-dom";

export const Layout: React.FC = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <TopNavbar />
      <div className="flex-grow-1">
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};
