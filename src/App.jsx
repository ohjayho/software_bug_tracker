import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import DashBoard from "./Components/pages/dashboard/DashBoard.jsx";
import About from "./Components/pages/about/About.jsx";
import ErrorPage from "./Components/ErrorPage.jsx";
import Auth from "./Components/pages/auth/Auth.jsx";
import MainLayout from "./Components/MainLayout.jsx";
import { useState } from "react";
import ProjectPage from "./Components/pages/dashboard/components/projects/components/ProjectPage/ProjectPage.jsx";
import Tickets from "./Components/pages/tickets/Tickets.jsx";
import Administration from "./Components/pages/administration/Administration.jsx";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    JSON.parse(localStorage.getItem("authenticated"))
  );
  const AuthenticatedRoute = ({ Component }) => {
    return isAuthenticated ? <Component /> : <Navigate to="/auth" />;
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route element={<MainLayout />}>
          <Route
            path="/"
            element={<AuthenticatedRoute Component={DashBoard} />}
          />
          <Route
            path="/about"
            element={<AuthenticatedRoute Component={About} />}
          />
          <Route
            path="/dashboard"
            element={<AuthenticatedRoute Component={DashBoard} />}
          />
          <Route
            path="/tickets"
            element={<AuthenticatedRoute Component={Tickets} />}
          />
          <Route
            path="/administration"
            element={<AuthenticatedRoute Component={Administration} />}
          />
          <Route
            path="/dashboard/project/:project_id"
            element={<AuthenticatedRoute Component={ProjectPage} />}
          />
          <Route
            path="*"
            element={<AuthenticatedRoute Component={ErrorPage} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
