const ShownProject = (props) => {
	return (
		<>
			<div
				className={`project_group__shown ${props.mobile ? 'show' : ''}`}
			>
				<div
					className="project_group__shown_mobile"
					onClick={() => props.showMobile()}
				>
					<p>X</p>
				</div>
				<div className="project_group__shown-img">
					<img src={`/img/${props.projects.img}`} alt="" />
				</div>
				<div className="project_group__shown-copy">
					<h2>{props.projects.title}</h2>
					<p>{props.projects.copy}</p>
					<div className="project_group__shown-copy_links">
						{props.projects.links.map((x, i) => {
							return (
								<a
									href={Object.values(x)}
									target="_blank"
									key={i}
									rel="noreferrer"
								>
									{Object.keys(x)}
								</a>
							);
						})}
					</div>
				</div>
			</div>
		</>
	);
};

export default ShownProject;
