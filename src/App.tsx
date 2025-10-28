import { Outlet } from "react-router";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="grow">
      <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
