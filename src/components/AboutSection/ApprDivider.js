import React from "react";

export default function ApprDivider(props) {
	return (
		<div className='apprDivider'>
			<div className='dividerLine'></div>
			<div className='m-r-1 m-l-1'>{props.value}</div>
			<div className='dividerLine'></div>
		</div>
	);
}
