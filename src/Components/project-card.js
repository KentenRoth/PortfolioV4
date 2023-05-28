import React from 'react';

const ProjectCard = (props) => {
	let workCard = (
		<div className="project-card_content__links">
			<a href={props.live} target="_blank">
				Live
			</a>
		</div>
	);
	if (!props.github) {
		workCard = (
			<div className="project-card_content__links">
				<a href={props.git} target="_blank">
					Github
				</a>
				<a href={props.live} target="_blank">
					Live
				</a>
			</div>
		);
	}

	return (
		<div className="project-card">
			<div className="project-card_image">
				<img src="/img/porfolioBackground.jpeg" />
			</div>
			<div className="project-card_content">
				<p className="title">`${props.title}`</p>
				<p className="copy">`${props.copy}`</p>
				{workCard}
			</div>
		</div>
	);
};

export default ProjectCard;
