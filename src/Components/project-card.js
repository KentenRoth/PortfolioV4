import React from 'react';

const ProjectCard = (props) => {
	let links = <div></div>;

	return (
		<div className={`project-card ${props.project.type}`}>
			<div className="project-card_image">
				<img src={`/img/${props.project.img}`} />
			</div>
			<div className="project-card_type">
				<p>{props.project.type}</p>
			</div>
			<div className="project-card_content">
				<h3>{props.project.title}</h3>
				<p>{props.project.copy}</p>
			</div>
		</div>
	);
};

export default ProjectCard;
