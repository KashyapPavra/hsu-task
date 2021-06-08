import React from "react";
import { useMediaQuery } from "react-responsive";

export default function ApprScholarship(props) {
	const isDesktop = useMediaQuery({
		query: "(min-device-width: 1200px)",
	});
	const classes = isDesktop
		? "apprScholarship  box m-r-2-d"
		: "apprScholarship";
	return (
		<div className={classes}>
			<div className='scholarshipVal valGroup'>
				<h5 className='headingPurple'>Scholarship Value</h5>
				<div className='amount'>€{props.scholarship}</div>
			</div>
			<div className='tuitionVal valGroup'>
				<h5 className='headingPurple'>Tuition Value</h5>
				<div className='amount'>€{props.tuition}</div>
			</div>
			<div className='remainingVal valGroup'>
				<h5 className='headingPurple'>Remaining</h5>
				<div className='amount'>
					€{props.scholarship - props.tuition - props.living}
				</div>
			</div>
			<div className='livingVal valGroup'>
				<h5 className='headingPurple'>Living Stipend</h5>
				<div className='amount'>
					€{props.living} (€{props.living / 12}/month)
				</div>
			</div>
		</div>
	);
}
