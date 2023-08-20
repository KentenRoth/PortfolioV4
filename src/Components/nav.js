import React, { useState } from 'react';

const Nav = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	return (
		<>
			<nav className="nav">
				<div className="nav_links desktop">
					<a href="#projects">Projects</a>
					<a href="#about">About Me</a>
					<a href="#projects">GitHub</a>
					<a href="#about">LinkedIn</a>
				</div>
				<div className="nav-toggle mobile" onClick={toggleMenu}>
					<div className={`hamburger ${menuOpen ? 'open' : ''}`}>
						<span className="bar1"></span>
						<span className="bar2"></span>
						<span className="bar3"></span>
					</div>
				</div>
				<div
					className={`mobile-nav_links ${menuOpen ? 'open' : ''}`}
					onClick={toggleMenu}
				>
					<a href="#projects">Projects</a>
					<a href="#about">About Me</a>
					<a href="#projects">GitHub</a>
					<a href="#about">LinkedIn</a>
				</div>
			</nav>
		</>
	);
};

export default Nav;
