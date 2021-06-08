import React from "react";
import leftArrow from "../../../images/arrow-left.png";
import rightArrow from "../../../images/arrow-right.png";
export function CustomRightArrow({ onClick, ...rest }) {
	const {
		onMove,
		carouselState: { currentSlide, deviceType },
	} = rest;
	return (
		<button className='customArrow rightArrow' onClick={() => onClick()}>
			<img src={rightArrow} alt='' />
		</button>
	);
}
export function CustomLeftArrow({ onClick, ...rest }) {
	const {
		onMove,
		carouselState: { currentSlide, deviceType },
	} = rest;
	return (
		<button className='customArrow leftArrow' onClick={() => onClick()}>
			<img src={leftArrow} alt='' />
		</button>
	);
}
