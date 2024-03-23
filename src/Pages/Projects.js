import React from 'react';
import projects from '../data.json';
import ProjectGroup from '../Components/projectGroup';

const Projects = () => {
	const projectGroups = [];
	for (let i = 0; i < projects.projects.length; i += 3) {
		projectGroups.push(projects.projects.slice(i, i + 3));
	}

	return (
		<>
			<h2 class="section_title">My Projects</h2>
			<div className="projects">
				{projectGroups.map((group, i) => {
					return (
						<ProjectGroup
							projects={group}
							index={i}
							key={i}
							side={i % 2 === 0 ? 'right' : 'left'}
						/>
					);
				})}
			</div>
		</>
	);
};

export default Projects;
