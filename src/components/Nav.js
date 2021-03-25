import React from "react";
import { Link } from "gatsby";

function Nav() {
	return (
		<nav>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/pizza">pizza</Link>
				</li>
			</ul>
		</nav>
	);
}

export default Nav;
