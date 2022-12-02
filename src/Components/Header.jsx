import React from "react";

export default function Header() {
	return (
		<header>
			<nav className="nav-bar">
				<div className="nav-logowrapper">
                    <img
                        src={require("../imgs/logo512.png")}
                        className="
                        nav-logo"
                        alt="react logo"
                    />
                    <h2>ReactFacts</h2>
                </div>
				<ul className="nav-items">
					<li><a href="https://scrimba.com/learn/learnreact">React Course</a></li>
					<li><a href="https://www.figma.com/file/A6RCzeLJwyILy95OEf6eL0/ReactFacts-(Copy)?node-id=0%3A4&t=0niycaK8zCTLx8xO-1">Project 1</a></li>
				</ul>
			</nav>
		</header>
	);
}