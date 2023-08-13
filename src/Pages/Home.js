import React from 'react';
import Hero from '../Pages/Hero';
import Projects from './Projects';
import About from './About';
import TextTop from '../Components/text-top';
import TextBottom from '../Components/text-bottom';

const Home = () => {
	return (
		<>
			<Hero />
			<TextTop />
			<section className="projects" id="projects">
				<Projects />s
			</section>
			<TextBottom />
			<section className="about" id="about">
				<About />
			</section>
		</>
	);
};

export default Home;
