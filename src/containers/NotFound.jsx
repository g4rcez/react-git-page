import React, { Component } from "react";
import { Link } from "react-router-dom";
import Data from "../data";

class NotFound extends Component {
	render() {
		return (
			<section className="vh-100 bg-black">
				<header className="tc ph5 lh-copy">
					<h1 className="f1 f-headline-l mb3 fw9 dib material-blue">Exit code 404</h1>
					<h2 className="tc f1-l fw1">cat: {window.location.pathname}: No such file or directory</h2>
				</header>
				<p className="fw1 i tc mt4 mt5-l f4 f3-l">Use the right command to change directory</p>
				<ul className="list tc pl0 w-100 mt5">
					<li className="dib">
						<Link className="f5 f4-ns pointer white pv2 ph3 hover-material-green" to="/">
							cd /home/{Data.username}
						</Link>
						<a
							className="f5 f4-ns pointer white pv2 ph3 hover-material-green"
							href={`https://github.com/${Data.username}`}>
							cd github/{Data.username}
						</a>
					</li>
				</ul>
			</section>
		);
	}
}

export default NotFound;
