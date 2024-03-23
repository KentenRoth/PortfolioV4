import React from 'react';

const ProjectCard = (props) => {
	let clicked = (title) => {
		props.onClick(props.projects.title);
		props.showMobile();
	};

	return (
		<div
			onClick={clicked}
			className={`project_card ${props.active ? 'active' : ''}`}
		>
			<h2>{props.projects.title}</h2>
			<p>{props.projects.type} Project</p>
		</div>
	);
};

export default ProjectCard;
