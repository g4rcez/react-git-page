import React, { Component } from "react";
import Posts from "./postList";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import changePost from "./ChangePost";
import { compose } from "ramda";

class List extends Component {
	readPost = (post) => {
		this.props.changePost(post);
	};

	replace = (string) => string.replace(/ /gi, "-").toLowerCase();

	render() {
		return (
			<div className="mw7 center">
				{Posts.map((x, i) => (
					<div key={i} className="pa2 mb2 center">
						<Link to={`/posts/${this.replace(x.title)}`}>
							<h2 onClick={this.readPost.bind(this, x)} className="f2 center black tc link pointer hover-material-blue">
								{x.title}
							</h2>
						</Link>
						<p className="tc" style={{ fontSize: "1.2em" }}>
							{x.description}
						</p>
						<ul className="list center tc">
							{x.tags.map((tag) => (
								<li key={tag} className="dib mr1 mb2">
									<span className="f6 b pa1 db link dark-gray ba b--black-20">{tag}</span>
								</li>
							))}
						</ul>
						<hr className="b--black-10" />
					</div>
				))}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	post: state.PostReducer.post,
});

const mapDispatchToProps = (dispatch) => ({
	changePost: compose(
		dispatch,
		changePost,
	),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(List);
