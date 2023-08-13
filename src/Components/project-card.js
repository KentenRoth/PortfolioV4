import React from 'react';

const ProjectCard = (props) => {
	return (
		<div className={`project-card ${props.project.type}`}>
			<div className="project-card_image">
				<img src={`/img/${props.project.img}`} />
			</div>
			<div
				className={`project-card_content ${
					props.index % 2 ? 'left' : 'right'
				}`}
			>
				<h3>{props.project.title}</h3>
				<p>{props.project.copy}</p>
				<div className="project-card_content__links">
					{props.project.links.map((x) => {
						return (
							<a href={Object.values(x)} target="_blank">
								{Object.keys(x)}
							</a>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
