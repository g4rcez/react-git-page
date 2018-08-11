import { applyMiddleware, compose, createStore } from "redux";
import rootReducer from "./index";
import thunk from "redux-thunk";
const reduxDevTool = () => {
	return typeof window === "object" && typeof window.devToolsExtension !== "undefined"
		? window.devToolsExtension()
		: (f) => f;
};
export default function configureStore(initialState) {
	const middleware = [thunk];
	const composedStoreEnhancer = compose(
		applyMiddleware(...middleware),
		reduxDevTool(),
	);
	const store = composedStoreEnhancer(createStore)(rootReducer, initialState);
	if (module.hot) {
		module.hot.accept("./index", () => {
			store.replaceReducer(require("./index"));
		});
	}
	return store;
}
