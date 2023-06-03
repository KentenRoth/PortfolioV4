import React from 'react';
import Hero from '../Pages/Hero';
import Projects from './Projects';
import About from './About';
import Languages from './Languages';

const Home = () => {
	return (
		<>
			<Hero />
			<section className="section--projects" id="projects">
				<Projects />
			</section>
			<Languages />
			<section className="section--about" id="about">
				<About />
			</section>
		</>
	);
};

export default Home;
