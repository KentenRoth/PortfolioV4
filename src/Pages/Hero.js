import Scroll from '../Components/scroll';

const Hero = () => {
	return (
		<>
			<section className="hero">
				<div className="hero_card">
					<p class="opening"> {'{'} </p>
					<p class="hero_eyebrow">Web Developer</p>
					<div className="name">
						<h1 className="section_title">Kenten</h1>
						<h1 className=" section_title hero_lastname">Roth</h1>
						<p className="details">
							React | TypeScript | JavaScript | NodeJS | MongoDB
						</p>
					</div>
					<p class="closing">{'}'}</p>
				</div>
				<Scroll />
			</section>
		</>
	);
};

export default Hero;
