import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import DashBoard from "./Components/pages/dashboard/DashBoard.jsx";
import Create from "./Components/pages/create/Create.jsx";
import About from "./Components/pages/about/About.jsx";
import ErrorPage from "./Components/ErrorPage.jsx";
import Issue from "./Components/pages/issue/Issue.jsx";
import Auth from "./Components/pages/auth/Auth.jsx";
import MainLayout from "./Components/MainLayout.jsx";
import { useState } from "react";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    JSON.parse(localStorage.getItem("authenticated"))
  );
  const AuthenticatedRoute = ({ Component }) => {
    return isAuthenticated ? <Component /> : <Navigate to="/login" />;
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Auth />} />
        <Route element={<MainLayout />}>
          <Route
            path="/about"
            element={<AuthenticatedRoute Component={About} />}
          />
          <Route
            path="/dashboard"
            element={<AuthenticatedRoute Component={DashBoard} />}
          />
          <Route
            path="/dashboard/issue/:id"
            element={<AuthenticatedRoute Component={Issue} />}
          />
          <Route
            path="/create"
            element={<AuthenticatedRoute Component={Create} />}
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
