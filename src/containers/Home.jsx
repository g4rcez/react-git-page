import React, { Component } from "react";
import Lists from "../posts/List";
import axios from "axios";
import Header from "../components/Header";
import Data from "../data";
import Card from "../components/Card";
import Repositories from "./Repositories";

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: {},
			languages: [],
			repositories: [],
			viewThis: "",
		};
	}

	componentWillMount = () => {
		const languages = [];
		axios.get(`https://api.github.com/users/${Data.username}/repos`).then((repositories) => {
			axios.get(`https://api.github.com/users/${Data.username}`).then((user) => {
				repositories.data.forEach((repo) => {
					if (!languages.includes(repo.language)) {
						languages.push(repo.language);
					}
				});
				this.setState({
					languages: languages,
					repositories: repositories.data,
					user: user.data,
				});
			});
		});
	};

	componentWillReceiveProps = (props) => {
		console.log(this.state, props);
	};

	orDefault = (data, defaultData) => {
		return data === "" ? defaultData : data;
	};

	strFormat = (string, ...args) => {
		args.forEach((x) => (string = string.replace("%s", x)));
		return string;
	};

	changeViews = (name) => {
		this.setState({ viewThis: name });
		this.state.languages.forEach((x) => {
			let element = document.getElementById(x);
			if (x === name) {
				element.classList.remove("bg-black-10");
				element.classList.add("bg-black");
				element.classList.add("b");
				element.classList.add("material-blue");
			} else {
				element.classList.remove("material-blue");
				element.classList.remove("bg-black");
				element.classList.remove("b");
				element.classList.add("bg-black-10");
			}
		});
	};

	render() {
		return (
			<React.Fragment>
				<Header />
				<div className="cf w-100">
					<h2 className="center tc f1 mb1">
						<i className="fa fa-terminal" style={{ fontSize: "0.9em" }} /> Whoami
					</h2>
					<h3 className="bb b--black-10 tc">{this.state.user.bio}</h3>
					<div className="mw8 center ph3-ns">
						<div className="cf ph2-ns">
							<div className="fl w-100 w-25-ns pr2">
								<Card user={this.state.user} />
							</div>
							<div className="fl w-100 w-75-ns">
								<div className="tj center">
									<div className="tc center">
										{this.state.languages.map((x, i) => (
											<span
												id={x}
												key={i}
												onClick={this.changeViews.bind(this, x)}
												className="link pointer black ph2 pa1 bg-animate mr1 ml1 f4 hover-material-dark-blue bg-black-10">
												{x}
											</span>
										))}
									</div>
									<Repositories viewThis={this.state.viewThis} repositories={this.state.repositories} />
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="cf w-100">
					<div className="mt2">
						<h2 className="f1 center measure tc">
							<i className="fas fa-clipboard" style={{ fontSize: "0.9em" }} /> Posts
						</h2>
						<p className="tc f4">Que tal fazer uma leitura de alguns tópicos já escritos?</p>
						<Lists />
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default Home;
