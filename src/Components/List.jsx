import React from "react";

export default function List() {
	return (
		<div className="List-wrapper">
            <ul className="List">
        
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
            <img src={require("../imgs/logo512.png")} alt="reactlogo" className="bg-logo"  />
        </div>
	);
}