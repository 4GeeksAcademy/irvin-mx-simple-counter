import React from "react";

//Components
import Counter from "./Counter.jsx"

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="container-fluid bg-primary bg-gradient vh-100 d-flex justify-content-center align-items-center">
			<Counter/>
		</div>
	);
};

export default Home;