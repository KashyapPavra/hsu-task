import React, { useContext } from "react";
import FAQListItem from "./FAQListItem";
import { GlobalContext } from "../../App";

export default function FAQList() {
	let { globalData } = useContext(GlobalContext);
	return (
		<div className='faqList'>
			{globalData.scholarship.faqs.items.map((faq, index) => {
				return (
					<FAQListItem
						key={index}
						category={faq.type}
						question={faq.question}
						ans={faq.answer}
					/>
				);
			})}
		</div>
	);
}
