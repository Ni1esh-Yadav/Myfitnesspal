import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="h-2">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
