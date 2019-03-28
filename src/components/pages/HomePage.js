import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
	<div>
		<h1>Home Page</h1>
		<Link to="/login">Login</Link>
		<Link to="/signup">Sign Up</Link>
		<Link to="/aboutus">About</Link>
	</div>
);

export default HomePage;