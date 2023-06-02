import React from 'react';
import Nav from '../Components/nav';
import projects from '../data.json';
import ProjectCard from '../Components/project-card';

const Projects = () => {
	return (
		<div className="projects">
			<div className="projects_list">
				{projects.projects.map((x) => {
					return <ProjectCard project={x} />;
				})}
			</div>
		</div>
	);
};

export default Projects;
