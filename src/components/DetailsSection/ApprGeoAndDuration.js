import React from "react";

export default function ApprGeoAndDuration(props) {
	return (
		<div className='apprGeoAndDuration box m-b-2 m-l-3-d'>
			<div className='apprGDgroup apprLocation m-b-1'>
				<h5 className='headingPurple'>Location</h5>
				<div>{props.location}</div>
			</div>
			<div className='apprGDgroup apprDuration m-b-1'>
				<h5 className='headingPurple'>Duration</h5>
				<div className=''>{props.duration} Year</div>
			</div>
			<div className='apprGDgroup apprStartDate'>
				<h5 className='headingPurple'>Start Date</h5>
				<div className='apprStartDate'>{props.startDate}</div>
			</div>
			<div className='apprGDgroup apprEndDate'>
				<h5 className='headingPurple'>End Date</h5>
				<div className=''>{props.endDate}</div>
			</div>
		</div>
	);
}
