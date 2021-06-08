import React from "react";
import FAQHeader from "./FAQHeader";
import FAQList from "./FAQList";
import "./css/faq.css";
export default function FAQSection() {
	return (
		<div id='faqSection' className='container'>
			<FAQHeader />
			<FAQList />
		</div>
	);
}
