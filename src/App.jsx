import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Pizza from "./pages/Pizza";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import { useUser } from "./context/UserContext";

function App() {
  const { token } = useUser();

  return (
    <div className="app-container">
      <Navbar />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/login"
            element={token ? <Navigate to="/" /> : <Login />}
          />

          <Route
            path="/register"
            element={token ? <Navigate to="/" /> : <Register />}
          />

          <Route path="/cart" element={<Cart />} />

          <Route path="/pizza/:id" element={<Pizza />} />

          <Route
            path="/profile"
            element={token ? <Profile /> : <Navigate to="/login" />}
          />

          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;