import React from "react";
import { useMediaQuery } from "react-responsive";

export default function ApprAboutText(props) {
	const isDesktop = useMediaQuery({
		query: "(min-device-width: 1200px)",
	});

	return isDesktop ? (
		<div className='apprAboutText m-l-3-d'>
			<h2 className='apprAboutTextHeading headingPurple'>
				About the apprenticeship
			</h2>
			<div className='apprAboutTextContent '>{props.value}</div>
		</div>
	) : (
		<div className='apprAboutText'>
			<div className='box'>
				<h2 className='apprAboutTextHeading headingPurple'>
					About the apprenticeship
				</h2>
				<div className='apprAboutTextContent'>{props.value}</div>
			</div>
		</div>
	);
}
