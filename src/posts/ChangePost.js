const fn = (post) => (dispatch) => {
	dispatch({
		type: "Post",
		post,
	});
};

export default fn;
