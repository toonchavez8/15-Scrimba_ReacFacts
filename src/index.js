import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import List from "./Components/List";
import Title from "./Components/Title";

function App() {
	return (
		<div>
			<Header />
			<Title />
			<List />
			<Footer />
		</div>
	);
}

ReactDOM.render(<App />, document.getElementById("root"));
