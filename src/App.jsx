import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./Components/LoginForm.jsx";
import DashBoard from "./Components/DashBoard.jsx";
import Create from "./Components/Create.jsx";
import About from "./Components/About.jsx";
import Issue from "./Components/Issue.jsx";
import ErrorPage from "./Components/ErrorPage.jsx";
import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";
import SignUpForm from "./Components/SignUpForm.jsx";
import Login from "./pages/components/Login.jsx";
import Register from "./pages/components/Register.jsx";
import Auth from "./pages/Auth.jsx";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<DashBoard />}></Route>
        <Route path="/dashboard/issue/:id" element={<Issue />} />
        <Route path="/create" element={<Create />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/a" element={<Login />} />
        <Route path="/b" element={<Register />} />
        <Route path="/c" element={<Auth />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
