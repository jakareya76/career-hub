import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <header className="container mx-auto">
        <Navbar />
      </header>

      <main className="container mx-auto px-5">
        <Outlet />
      </main>

      <footer className="py-10 bg-base-200 text-base-content">
        <Footer />
      </footer>
    </>
  );
};

export default App;
