import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashBoard from "./Components/pages/dashboard/DashBoard.jsx";
import Create from "./Components/pages/create/Create.jsx";
import About from "./Components/pages/about/About.jsx";
import ErrorPage from "./Components/ErrorPage.jsx";
import Issue from "./Components/pages/issue/Issue.jsx";
import Auth from "./Components/pages/auth/Auth.jsx";
import MainLayout from "./Components/MainLayout.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Auth />} />
        <Route element={<MainLayout />}>
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/dashboard/issue/:id" element={<Issue />} />
          <Route path="/create" element={<Create />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
