import React from 'react';
import projects from '../data.json';
import ProjectCard from '../Components/project-card';

const Projects = () => {
	return (
		<>
			<h2 class="section_title">My Projects</h2>
			<div className="projects_list">
				{projects.projects.map((x, i) => {
					return <ProjectCard project={x} index={i} />;
				})}
			</div>
		</>
	);
};

export default Projects;
