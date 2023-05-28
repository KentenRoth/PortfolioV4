import './sass/app.sass';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import About from './Pages/About';

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/about-me" element={<About />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
