import React, { Component } from "react";
import { Popover } from "@blueprintjs/core";

class PopsContent extends Component {
	render() {
		return (
			<div className="bg-white mw6 pa2">
				<h2 className="bb b--black-10">
					<a href={this.props.link}>{this.props.name}</a> <i className="fa fa-star material-dark-yellow" />{" "}
					{this.props.stars}
				</h2>
				<p className="tj">{this.props.description}</p>
				<hr className="b--black-10" />
				Language: <strong>{this.props.lang}</strong>
			</div>
		);
	}
}

class Repositories extends Component {
	render() {
		return (
			<ul className="list mw8 tc center mb2">
				{this.props.repositories.map((x, i) => {
					if (this.props.viewThis === x.language) {
						return (
							<Popover>
								<li key={i} className="dib mr2">
									<a href={x.html_url} className="f2 b db pa2 link blue-gray pointer">
										{x.name}
									</a>
								</li>
								<PopsContent
									key={`popover-${i}`}
									name={x.name}
									link={x.html_url}
									stars={x.stargazers_count}
									lang={x.language}
									description={x.description}
								/>
							</Popover>
						);
					}
					return (
						<Popover>
							<li key={i} className="dib mr2">
								<span href={x.html_url} className="f3 b db pa2 link dim near-black pointer">
									{x.name}
								</span>
							</li>
							<PopsContent
								key={`popover-${i}`}
								name={x.name}
								link={x.html_url}
								stars={x.stargazers_count}
								lang={x.language}
								description={x.description}
							/>
						</Popover>
					);
				})}
			</ul>
		);
	}
}

export default Repositories;
