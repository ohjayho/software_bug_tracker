import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashBoard from "./Components/pages/dashboard/DashBoard.jsx";
import Create from "./Components/pages/create/Create.jsx";
import About from "./Components/pages/about/About.jsx";
import ErrorPage from "./Components/ErrorPage.jsx";
import Header from "./Components/header/Header.jsx";
import Footer from "./Components/footer/Footer.jsx";
import Issue from "./Components/pages/issue/Issue.jsx";
import Auth from "./pages/Auth.jsx";
import Login from "./Components/pages/Login/Login.jsx";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<DashBoard />}></Route>
        <Route path="/dashboard/issue/:id" element={<Issue />} />
        <Route path="/create" element={<Create />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="a" element={<Auth />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
