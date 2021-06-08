import React from "react";
import ApprAbout from "./ApprAbout";
import ApprNumbers from "./ApprNumbers";
import "./css/about.css";
export default function AboutSection() {
	return (
		<div id='aboutSection' className='container'>
			<ApprAbout />
			<ApprNumbers />
		</div>
	);
}
