import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Layout from "./Layout";
import SignUp from "./SignUp";
import NoPage from "./NoPage";
import About from "./About";
import ContactUs from "./ContactUs";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NoPage />} />
          <Route path="contactus" element={<ContactUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);