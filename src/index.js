import React from "react";
import { Provider } from "react-redux";
import ConfigureRedux from "./redux/Store";
import "./styles/index.css";
import ReactDOM from "react-dom";
import "./styles/mytachyons.css";
import App from "./containers/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";
import Posts from "./posts/Posts";
import NotFound from "./containers/NotFound";

const store = ConfigureRedux({});
const Router = () => (
	<Provider store={store}>
		<BrowserRouter>
			<Switch>
				<Route exact={true} path="/" component={App} />
				<Route exact={true} path="/posts" component={Posts} />
				<Route exact={true} path="/posts/:name" component={Posts} />
				<Route component={NotFound} />
			</Switch>
		</BrowserRouter>
	</Provider>
);

ReactDOM.render(<Router />, document.getElementById("root"));
registerServiceWorker();
