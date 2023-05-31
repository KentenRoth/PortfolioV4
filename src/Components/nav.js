import { Link } from 'react-router-dom';
import Socials from './socials';

const Nav = (props) => {
	console.log(props.page);
	let page = <Link to="/projects">Projects</Link>;

	if (props.page === 'Projects') {
		page = <Link to="/about">About</Link>;
	}

	return (
		<div className="nav">
			<Socials />
			<div className="nav_links">
				<Link to="/">Home</Link>
				{page}
			</div>
		</div>
	);
};

export default Nav;
