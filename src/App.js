import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Aboutme from "./components/Aboutme";
import Projects from "./components/Projects";
import Contactus from "./components/Contactus";
import Footer from "./components/Footer";
import Hello from "./components/Hello";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
function App() {
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<div>
			<Navbar />
			<Header />
			<Aboutme />
			<hr />
			<Projects />
			<hr />
			<Hello />
			<Contactus />
			<Footer />
		</div>
	);
}

export default App;
