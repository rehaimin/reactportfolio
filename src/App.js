import React from "react";
import "./App.css";
import Header from "./components/Header";
import Perso from "./components/Perso";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import Scrolltop from "./components/Scrolltop";
import Contact from "./components/Contact";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
	return (
		<div className="main-container">
			<Header />
			<main>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Perso />} />
						<Route path="/projects" element={<Projects />} />
						<Route path="/blog" element={<Blog />} />
						<Route path="/contact" element={<Contact />} />
					</Routes>
				</BrowserRouter>
			</main>
			<Scrolltop />
		</div>
	);
}

export default App;
