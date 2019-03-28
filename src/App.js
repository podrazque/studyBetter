import React from 'react';

import { Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import SignUpPage from "./components/pages/SignUpPage";
import AboutUs from "./components/pages/AboutUs";





const App = () => (
	<div className="ui container">
		<Route path="/" exact component={HomePage} />
		<Route path="/login" exact component={LoginPage} />
		<Route path="/signup" exact component={SignUpPage} />
		<Route path="/aboutus" exact component={AboutUs} />
	</div>
);

export default App;
