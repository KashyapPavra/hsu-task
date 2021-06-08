import React from "react";
export default function SliderSingle(props) {
	return (
		<div className='sliderSingle box'>
			<div className='testInfo'>
				<img src={props.img} alt='person-img' className='testImg' />
				<div className='testDetails'>
					<div className='testName'>{props.name}</div>
					<div className='testPos'>{props.pos}</div>
				</div>
				<img src={props.social} alt='' className='social' />
			</div>
			<div className='testText'>
				<div className='testContent'>{props.content}</div>
				<div className='testEdu'>Education &nbsp; · &nbsp; {props.edu}</div>
			</div>
		</div>
	);
}
