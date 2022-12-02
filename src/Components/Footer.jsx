import React from "react";


// get current year
const year = new Date().getFullYear();


export default function Footer() {
	return (
		<footer>
			<small>
				<a
					href="https://github.com/toonchavez8/15-Scrimba_ReacFacts"
					style={{ textDecoration: "none" }}
				>
				{" "}
				© {year} by{" "}
					toonchavez 
				
                    <img className="gitImg"
                    src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="github icon" />
                {/* git hub icon */}
            
                </a>
			</small>    
		</footer>
	);
}