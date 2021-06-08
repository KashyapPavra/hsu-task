import React, { useRef } from "react";

export default function FilterOptions(props) {
	let optionRef = useRef();

	return (
		<li
			ref={optionRef}
			onClick={() => props.filterOptionClickHandler(optionRef.current)}
			className='filterOption'
		>
			{props.value}
		</li>
	);
}
