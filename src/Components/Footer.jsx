import React from "react";


// get current year
const year = new Date().getFullYear();


export default function Footer() {
	return (
		<footer>
			<small>
				{" "}
				© {year} by{" "}
				<a
					href="https://github.com/toonchavez8"
					style={{ textDecoration: "none" }}
				>
					toonchavez
				</a>
			</small>
		</footer>
	);
}