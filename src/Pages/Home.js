import React from 'react';
import { Link } from 'react-router-dom';
import Socials from '../Components/socials';

const Home = () => {
	return (
		<div className="home_background">
			<div className="home_card">
				<h1>Kenten Roth</h1>
				<h3>Web Developer</h3>
				<Socials />
				<div className="home_card__links">
					<Link to="/projects">Projects</Link>
					<Link to="/about">About Me</Link>
				</div>
			</div>
		</div>
	);
};

export default Home;
