import React, { Component } from "react";
import Navbar from "../components/Navbar";
import { connect } from "react-redux";
import changePost from "./ChangePost";
import { compose } from "ramda";

class Posts extends Component {
	onClick = () => {
		this.props.changePost("List");
	};

	render() {
		const Post = require(`./${this.props.post.file || "List"}`).default;
		return (
			<React.Fragment>
				<div className="bg-black">
					<Navbar bg="bg-black" links={[{ to: "/posts", title: "Posts", onClick: this.onClick }]} />
				</div>
				<div className="center">
					<Post {...this.props.post} />
				</div>
			</React.Fragment>
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
)(Posts);
