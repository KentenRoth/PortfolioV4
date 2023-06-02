import React from 'react';
import Socials from '../Components/socials';
import Hero from '../Pages/Hero';
import Projects from './Projects';
import About from './About';

const Home = () => {
	return (
		<>
			<section>
				<Hero />
			</section>
			<section id="projects">
				<Projects />
			</section>
			<section>
				<About />
			</section>
		</>
	);
};

export default Home;
