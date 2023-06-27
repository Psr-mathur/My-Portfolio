import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Aboutme from "./components/Aboutme";
import Projects from "./components/Projects";
import Contactus from "./components/Contactus";
import Footer from "./components/Footer";
// import Particles from "react-particles-js";
function App() {
  return (
    <div>
      {/* <Particles /> */}
      <Navbar />
      <Header />
      <Aboutme />
      <hr />
      <Projects />
      <hr />
      <Contactus />
      <Footer />
    </div>
  );
}

export default App;
