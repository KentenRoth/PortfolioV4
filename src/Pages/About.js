import React, { useEffect } from 'react';
import Nav from '../Components/nav';
import makeItRain from '../Components/rain';

const About = () => {
	useEffect(() => {
		console.log('useEffect');
		makeItRain();
	}, []);

	return (
		<>
			<div class="rain front-row"></div>
			<div class="rain back-row"></div>
			<div className="about">
				<Nav page={'About'} />
				<div className="about_content">
					<div className="about_content__image">
						<img src="/img/me.jpg" />
					</div>
					<div className="about_content__copy">
						<p>
							I'm Kenten Roth, a self-taught web developer with a
							passion for creating innovative and user-friendly
							web experiences. With expertise in React, Redux
							Toolkit, TypeScript, and more, I specialize in
							building dynamic web applications that captivate
							users.
						</p>
						<p>
							In my current role as a web developer, I've
							contributed to notable projects like
							tirechainsrus.com and atvtires.com, refining my
							attention to detail and embracing a self-motivated
							approach. I find fulfillment in turning concepts
							into reality and collaborating with others to bring
							visions to life. With a keen interest in gardening,
							nature, golf, and cars, I thrive on projects that
							merge my coding skills with my passion.
						</p>
						<p>
							As a dedicated learner, I continuously stay updated
							with the latest trends and advancements in web
							development. I value teamwork and problem-solving,
							actively seeking diverse perspectives to find
							creative solutions. My long-term goal is to evolve
							into a full-stack developer, expanding my skills and
							embracing new challenges.
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default About;
