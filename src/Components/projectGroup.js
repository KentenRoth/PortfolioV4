import React, { useState } from 'react';
import ProjectCard from './project-card';
import ShownProject from './shownProject';

const ProjectGroup = (props) => {
	const [showProject, setShowProject] = useState(props.projects[0]);
	const [mobileShow, setMobileShow] = useState(false);

	let handleClick = (title) => {
		let project = props.projects.find((x) => x.title === title);
		setShowProject(project);
	};

	let showMoible = () => {
		setMobileShow(!mobileShow);
	};

	return (
		<>
			<div
				className={'project_group ' + props.side}
				id={`group-${props.index}`}
			>
				<div className="project_group__list">
					{props.projects.map((project, i) => {
						return (
							<ProjectCard
								key={i}
								projects={project}
								active={project.title === showProject.title}
								onClick={handleClick}
								showMobile={showMoible}
							/>
						);
					})}
				</div>

				<ShownProject
					projects={showProject}
					showMobile={showMoible}
					mobile={mobileShow}
				/>
			</div>
		</>
	);
};

export default ProjectGroup;
