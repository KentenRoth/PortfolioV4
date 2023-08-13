import React from 'react';
import Hero from '../Pages/Hero';
import Projects from './Projects';
import About from './About';
import Languages from './Languages';
import ScrollTextTop from '../Components/scrollTextTop';

const Home = () => {
	return (
		<>
			<Hero />
			<ScrollTextTop />
			<section className="projects" id="projects">
				<Projects />s
			</section>
			<Languages />
			<section className="about" id="about">
				<About />
			</section>
		</>
	);
};

export default Home;
