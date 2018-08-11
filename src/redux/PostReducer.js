const initial = {
	post: {},
};

const WelcomeReducer = (state = initial, action) => {
	switch (action.type) {
		case "Post":
			return { ...state, post: action.post };

		default:
			return state;
	}
};

export default WelcomeReducer;
