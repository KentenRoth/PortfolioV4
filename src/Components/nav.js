import { Link } from 'react-router-dom';
import Socials from './socials';

const Nav = () => {
	return (
		<div className="nav">
			<div className="nav_links">
				<a href="#projects">Projects</a>
				<a href="#about">About Me</a>
				<a href="#projects">GitHub</a>
				<a href="#about">LinkedIn</a>
			</div>
		</div>
	);
};

export default Nav;
