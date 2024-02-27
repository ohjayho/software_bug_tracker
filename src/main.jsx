import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import LoginForm from "./Components/LoginForm.jsx";
import DashBoard from "./Components/DashBoard.jsx";
import Create from "./Components/Create.jsx";
import About from "./Components/About.jsx";
import Issue from "./Components/Issue.jsx";
import Footer from "./Components/Footer.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<DashBoard />}></Route>
        <Route path="/dashboard/issue/:id" element={<Issue />} />
        <Route path="/create" element={<Create />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
