import Socials from '../Components/socials';

const Hero = () => {
	return (
		<>
			<div className="hero_background">
				<div className="hero_card">
					<h1>Kenten Roth</h1>
					<h3>Web Developer</h3>
					<Socials />
					<div className="hero_card__links">
						<a href="#projects">Projects</a>
						<a href="/about">About Me</a>
					</div>
				</div>
			</div>
		</>
	);
};

export default Hero;
