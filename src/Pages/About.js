import React from 'react';

const About = () => {
	return (
		<>
			<div class="about_content">
				<p class="opening">{'<'}</p>
				<div class="about_content__heading">
					<p class="eyebrow">Who Is</p>
					<h2>Kenten</h2>
					<h2 className="about_lastname">Roth</h2>
				</div>
				<div class="about_content__copy">
					<p>
						Hi there! I'm Kenten Roth, a seasoned Front-End
						developer with over 5 years of experience crafting
						immersive digital experiences. Based in Iowa, I
						specialize in turning innovative designs into functional
						and responsive websites using a toolkit that includes
						React, SASS, JavaScript, NodeJS, and MongoDB. My passion
						for blending design and technology shines through in
						every project I undertake.
					</p>
					<p>
						My expertise lies in building user-friendly interfaces,
						collaborating effectively within cross-functional teams,
						and delivering high-quality work on time. I take pride
						in transforming wireframes into polished websites that
						provide seamless user interactions. One of my standout
						accomplishments is the creation of a Task Manager
						application using React, Typescript, and MongoDB,
						showcasing my ability to design intuitive interfaces and
						foster team collaboration.
					</p>
					<p>
						I thrive on tackling challenges and continuously seek
						out opportunities to refine my skills. I bring a
						meticulous eye for detail, problem-solving prowess, and
						a commitment to delivering exceptional results to every
						project. My goal is to create digital experiences that
						not only meet but exceed expectations.
					</p>
				</div>
				<p class="closing">{'/>'}</p>
			</div>
		</>
	);
};

export default About;
