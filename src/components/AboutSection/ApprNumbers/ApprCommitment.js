import React from "react";

export default function ApprCommitment(props) {
	return (
		<div className='apprCommitment m-l-2-d'>
			<div className='studyComm box commGroup m-r-2-d'>
				<div className='commVal'>
					<h5 className='headingPurple'>Study commitment</h5>
					<div className='commAmt'>{props.studyAmt} hours / day</div>
				</div>
				<div className='commText'>{props.studyText}</div>
			</div>
			<div className='workComm box commGroup m-l-2-d'>
				<div className='commVal'>
					<h5 className='headingPurple'>Work commitment</h5>
					<div className='commAmt'>{props.workAmt} hours / day</div>
				</div>
				<div className='commText'>{props.workText}</div>
			</div>
		</div>
	);
}
