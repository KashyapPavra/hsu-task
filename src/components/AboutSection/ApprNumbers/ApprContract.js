import React from "react";
import ApprDivider from "../ApprDivider";

export default function ApprContract(props) {
	return (
		<div className='apprContract m-l-2-d'>
			<ApprDivider value='GRADUATION' />
			<div style={{ marginBottom: "0px" }} className='box commGroup'>
				<div className='commVal'>
					<h5 className='headingPurple'>A full-time contract</h5>
					<div className='commAmt'>{props.contractAmt} Year / Full-Time</div>
				</div>
				<div className='commText'>{props.contractText}</div>
			</div>
		</div>
	);
}
