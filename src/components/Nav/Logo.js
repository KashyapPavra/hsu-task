import React from "react";

export default function Logo() {
	const miniLogoStyle = {
		fontSize: "11px",
		fontWeight: "400",
		marginLeft: "0.2rem",
	};
	return (
		<div className='logo'>
			<div>
				HARBOUR<span style={{ fontWeight: "300" }}>.</span>SPACE{" "}
				<sup style={miniLogoStyle}>/INTERACTION DESIGN</sup>
			</div>
		</div>
	);
}
