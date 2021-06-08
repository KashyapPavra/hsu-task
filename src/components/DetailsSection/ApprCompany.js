import React from "react";

export default function ApprCompany(props) {
	return (
		<div className='apprCompany m-b-2 m-l-3-d'>
			<img className='apprCompanyLogo' src={props.logo} alt='company logo' />
			<div className='apprCompanyName'>
				Powered by: <span>{props.name}</span>
			</div>
		</div>
	);
}
