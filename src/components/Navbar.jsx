import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
	render() {
		return (
			<nav className={`flex justify-between bb b--white-10 mw8 center ${this.props.bg}`}>
				<Link className="link white-70 hover-white no-underline flex items-center pa3" to="/">
					<i className="fab fa-github" />
				</Link>
				<div className="flex-grow pa1 flex items-center">
					<Link className="f6 link dib white dim mr3 mr4-ns" to="/">
						Whoami
					</Link>
					<Link className="f6 link dib white dim mr3 mr4-ns" to="/">
						Repositories
					</Link>
					{this.props.links !== undefined &&
						this.props.links.map((x, i) => (
							<Link key={i} onClick={x.onClick} className="f6 link dib white dim mr3 mr4-ns" to={x.to}>
								{x.title}
							</Link>
						))}
				</div>
			</nav>
		);
	}
}

export default Navbar;
