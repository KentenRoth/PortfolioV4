import React from 'react';
import Nav from '../Components/nav';
import Hero from '../Pages/Hero';
import Projects from './Projects';
import About from './About';

const Home = () => {
	return (
		<>
			<Nav />
			<Hero />
			<section className="projects" id="projects">
				<Projects />
			</section>
			<section className="about" id="about">
				<About />
			</section>
		</>
	);
};

export default Home;
