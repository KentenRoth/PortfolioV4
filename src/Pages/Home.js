import React from 'react';
import Nav from '../Components/nav';
import Hero from '../Pages/Hero';
import Projects from './Projects';
import About from './About';
import TextTop from '../Components/text-top';
import TextBottom from '../Components/text-bottom';

const Home = () => {
	return (
		<>
			<Nav />
			<Hero />
			<TextTop />
			<section className="projects" id="projects">
				<Projects />
			</section>
			<TextBottom />
			<section className="about" id="about">
				<About />
			</section>
		</>
	);
};

export default Home;
