import React, { Component } from "react";
import Data from "../data";

class Card extends Component {
	render() {
		return (
			<article className="ba b--black-30 pa2">
				<img src={this.props.user.avatar_url} alt="Profile" className="center tc" />
				<p className="black-90 b center tc f4">{this.props.user.name}</p>
				<hr className="b--black-10" />
				<p className="center tc">
					Location: <span className="b">{this.props.user.location}</span>
				</p>
				<p className="center tc">
					Public Repos: <span className="b">{this.props.user.public_repos}</span>
				</p>
				<p className="center tc">
					Followers: <span className="b">{this.props.user.followers}</span>
				</p>
				<p className="center tc">
					Following: <span className="b">{this.props.user.following}</span>
				</p>
				<h2 className="center tc">
					<a key="0" href={this.props.user.html_url}>
						<i className="fab fa-github link pointer black hover-material-blue ph1" />
					</a>
					{Data.social.map((x, i) => (
						<a key={i + 1} href={x.link}>
							<i className={`fab fa-${x.brand} link ph1 pointer black hover-material-blue`} />
						</a>
					))}
				</h2>
			</article>
		);
	}
}

export default Card;
