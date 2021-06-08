import React, { useRef } from "react";
import OpenBtn from "../common/OpenBtn";
export default function FAQListItem(props) {
	let faqAnsRef = useRef();
	function clickHandler(refObj) {
		refObj.classList.toggle("openList");
		refObj.classList.toggle("m-b-2");
	}
	return (
		<div className='faqListItem'>
			<h5 className='faqCategory headingPurple'>{props.category}</h5>
			<div className='faqQA'>
				<h3 className='faqQuestion'>{props.question}</h3>
				<div ref={faqAnsRef} className='faqAnswer'>
					<ul>
						{props.ans.map((val, index) => {
							return <li key={index}>{val.data}</li>;
						})}
					</ul>
				</div>
			</div>
			<OpenBtn openFaqClickHandler={clickHandler} faqAnsRef={faqAnsRef} />
		</div>
	);
}
