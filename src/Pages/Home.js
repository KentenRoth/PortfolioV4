import React from 'react';
import Hero from '../Pages/Hero';
import Projects from './Projects';
import About from './About';

const Home = () => {
	return (
		<>
			<Hero />
			<section id="projects">
				<Projects />
			</section>
			<section id="about">
				<About />
			</section>
		</>
	);
};

export default Home;
