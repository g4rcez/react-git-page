import React, { Component } from "react";
import Navbar from "./Navbar";

class Header extends Component {
	render() {
		return (
			<header className="sans-serif">
				<div
					className="cover bg-left bg-center-l"
					style={{
						backgroundImage:
							"url(https://enterprise.github.com/assets/aws/aws-animation-teaser-large-5ac827d7617d87a2c90d5094773516f2b882ab8abe654bbc30f4ba816bfba51c.jpg)",
					}}>
					<div className="bg-black-70 pb3 pb4-m pb5-l">
						<Navbar bg="bg-transparent" />
						<div className="tc-l mt3 mt4-m mt5-l ph3">
							<h1 className="f2 f1-l fw2 white-90 mb0 lh-title">
								Welcome to my <strong>GitPage</strong>
							</h1>
							<h2 className="fw1 f4 white-80 mt3 mb4">Apenas um lugar para centralizar a coisa toda</h2>
						</div>
					</div>
				</div>
			</header>
		);
	}
}

export default Header;
